'use client'

import { createContext, useContext, useState, useRef, useCallback } from 'react'
import { BRADY_SYSTEM_PROMPT } from '@/app/data/brady-context'

const MODEL_ID = 'SmolLM2-1.7B-Instruct-q4f16_1-MLC'

export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
  failed?: boolean
}

type LoadingState =
  | { status: 'idle' }
  | { status: 'loading'; progress: number; text: string }
  | { status: 'ready' }
  | { status: 'error'; error: string }

type WebLLMContextProps = {
  messages: ChatMessage[]
  loadingState: LoadingState
  isGenerating: boolean
  supportsWebGPU: () => boolean
  initEngine: () => Promise<void>
  sendMessage: (userMessage: string) => Promise<void>
  retryMessage: (failedMessageIndex: number) => Promise<void>
  stopGenerating: () => void
  clearChat: () => void
  resetEngine: () => Promise<void>
}

const WebLLMContext = createContext<WebLLMContextProps | null>(null)

export function WebLLMProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loadingState, setLoadingState] = useState<LoadingState>({
    status: 'idle',
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const engineRef = useRef<import('@mlc-ai/web-llm').MLCEngineInterface | null>(
    null
  )
  const abortRef = useRef(false)
  const generatingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )

  const clearGeneratingTimeout = useCallback(() => {
    if (generatingTimeoutRef.current) {
      clearTimeout(generatingTimeoutRef.current)
      generatingTimeoutRef.current = null
    }
  }, [])

  const supportsWebGPU = useCallback((): boolean => {
    if (typeof navigator === 'undefined') return false
    return 'gpu' in navigator
  }, [])

  const initEngine = useCallback(async () => {
    if (engineRef.current || loadingState.status === 'loading') return

    if (!supportsWebGPU()) {
      setLoadingState({
        status: 'error',
        error:
          "Your browser doesn't support WebGPU. Try Chrome or Edge for the AI chat feature.",
      })
      return
    }

    setLoadingState({ status: 'loading', progress: 0, text: 'Starting...' })

    try {
      const webllm = await import('@mlc-ai/web-llm')
      const engine = await webllm.CreateMLCEngine(MODEL_ID, {
        initProgressCallback: (report) => {
          setLoadingState({
            status: 'loading',
            progress: report.progress,
            text: report.text,
          })
        },
      })
      engineRef.current = engine
      setLoadingState({ status: 'ready' })
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to load the AI model.'
      setLoadingState({ status: 'error', error: message })
    }
  }, [loadingState.status, supportsWebGPU])

  const stopGenerating = useCallback(() => {
    abortRef.current = true
    clearGeneratingTimeout()
    try {
      engineRef.current?.interruptGenerate()
    } catch {
      // engine may be in a bad state; ignore
    }
    // Safety net: if the streaming promise is truly hung and the finally block
    // never runs, force-reset isGenerating after a short delay.
    setTimeout(() => {
      setIsGenerating(false)
    }, 500)
  }, [clearGeneratingTimeout])

  const markResponseFailed = useCallback(
    (conversationMessages: ChatMessage[], partialContent = '') => {
      const content =
        partialContent ||
        'The response timed out. Try again, or reload the model if the issue persists.'
      setMessages([
        ...conversationMessages,
        { role: 'assistant', content, failed: true },
      ])
    },
    []
  )

  const generateAssistantResponse = useCallback(
    async (conversationMessages: ChatMessage[]) => {
      const engine = engineRef.current
      if (!engine) return

      setIsGenerating(true)
      abortRef.current = false
      clearGeneratingTimeout()

      generatingTimeoutRef.current = setTimeout(() => {
        abortRef.current = true
        try {
          engine.interruptGenerate()
        } catch {
          // ignore
        }
        setIsGenerating(false)
        setMessages((prev) => {
          const last = prev[prev.length - 1]
          if (last?.role !== 'assistant') {
            return [
              ...prev,
              {
                role: 'assistant' as const,
                content:
                  'The response timed out. Try again, or reload the model if the issue persists.',
                failed: true,
              },
            ]
          }
          return [
            ...prev.slice(0, -1),
            {
              ...last,
              content:
                last.content ||
                'The response timed out. Try again, or reload the model if the issue persists.',
              failed: true,
            },
          ]
        })
      }, 60_000)

      try {
        const request = {
          messages: [
            { role: 'system' as const, content: BRADY_SYSTEM_PROMPT },
            ...conversationMessages,
          ],
          stream: true as const,
          temperature: 0.7,
          max_tokens: 512,
        }

        const chunks = await engine.chat.completions.create(request)
        let assistantContent = ''

        setMessages([
          ...conversationMessages,
          { role: 'assistant', content: '' },
        ])

        for await (const chunk of chunks) {
          if (abortRef.current) {
            engine.interruptGenerate()
            break
          }
          const delta = chunk.choices[0]?.delta?.content || ''
          assistantContent += delta
          setMessages([
            ...conversationMessages,
            { role: 'assistant', content: assistantContent },
          ])
        }
      } catch (err) {
        const errorContent =
          err instanceof Error ? err.message : 'Something went wrong.'
        markResponseFailed(
          conversationMessages,
          `Error: ${errorContent}`
        )
      } finally {
        clearGeneratingTimeout()
        setIsGenerating(false)
      }
    },
    [clearGeneratingTimeout, markResponseFailed]
  )

  const sendMessage = useCallback(
    async (userMessage: string) => {
      const engine = engineRef.current
      if (!engine || isGenerating) return

      const userMsg: ChatMessage = { role: 'user', content: userMessage }
      const updatedMessages = [...messages, userMsg]
      setMessages(updatedMessages)
      await generateAssistantResponse(updatedMessages)
    },
    [messages, isGenerating, generateAssistantResponse]
  )

  const retryMessage = useCallback(
    async (failedMessageIndex: number) => {
      if (isGenerating) return

      const failed = messages[failedMessageIndex]
      if (failed?.role !== 'assistant' || !failed.failed) return

      const conversationMessages = messages.slice(0, failedMessageIndex)
      const lastUser = conversationMessages[conversationMessages.length - 1]
      if (lastUser?.role !== 'user') return

      setMessages(conversationMessages)
      await generateAssistantResponse(conversationMessages)
    },
    [messages, isGenerating, generateAssistantResponse]
  )

  const clearChat = useCallback(async () => {
    setMessages([])
    try {
      await engineRef.current?.resetChat()
    } catch {
      // ignore if engine is in a bad state
    }
  }, [])

  const resetEngine = useCallback(async () => {
    abortRef.current = true
    clearGeneratingTimeout()
    setIsGenerating(false)
    setMessages([])

    const engine = engineRef.current
    engineRef.current = null

    if (engine) {
      try {
        engine.interruptGenerate()
        await engine.unload()
      } catch {
        // engine may already be in a bad state; ignore
      }
    }

    setLoadingState({ status: 'idle' })
  }, [clearGeneratingTimeout])

  return (
    <WebLLMContext.Provider
      value={{
        messages,
        loadingState,
        isGenerating,
        supportsWebGPU,
        initEngine,
        sendMessage,
        retryMessage,
        stopGenerating,
        clearChat,
        resetEngine,
      }}
    >
      {children}
    </WebLLMContext.Provider>
  )
}

export function useWebLLM() {
  const context = useContext(WebLLMContext)
  if (!context) {
    throw new Error('useWebLLM must be used within a WebLLMProvider.')
  }
  return context
}
