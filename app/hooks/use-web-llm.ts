'use client'

import { useState, useRef, useCallback } from 'react'
import { BRADY_SYSTEM_PROMPT } from '@/app/data/brady-context'

const MODEL_ID = 'SmolLM2-1.7B-Instruct-q4f16_1-MLC'

export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

type LoadingState =
  | { status: 'idle' }
  | { status: 'loading'; progress: number; text: string }
  | { status: 'ready' }
  | { status: 'error'; error: string }

export function useWebLLM() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loadingState, setLoadingState] = useState<LoadingState>({
    status: 'idle',
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const engineRef = useRef<import('@mlc-ai/web-llm').MLCEngineInterface | null>(
    null
  )
  const abortRef = useRef(false)

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

  const sendMessage = useCallback(
    async (userMessage: string) => {
      const engine = engineRef.current
      if (!engine || isGenerating) return

      const userMsg: ChatMessage = { role: 'user', content: userMessage }
      const updatedMessages = [...messages, userMsg]
      setMessages(updatedMessages)
      setIsGenerating(true)
      abortRef.current = false

      try {
        const request = {
          messages: [
            { role: 'system' as const, content: BRADY_SYSTEM_PROMPT },
            ...updatedMessages,
          ],
          stream: true as const,
          temperature: 0.7,
          max_tokens: 512,
        }

        const chunks = await engine.chat.completions.create(request)
        let assistantContent = ''
        const assistantMsg: ChatMessage = {
          role: 'assistant',
          content: '',
        }

        setMessages([...updatedMessages, assistantMsg])

        for await (const chunk of chunks) {
          if (abortRef.current) {
            engine.interruptGenerate()
            break
          }
          const delta = chunk.choices[0]?.delta?.content || ''
          assistantContent += delta
          setMessages([
            ...updatedMessages,
            { role: 'assistant', content: assistantContent },
          ])
        }
      } catch (err) {
        const errorContent =
          err instanceof Error ? err.message : 'Something went wrong.'
        setMessages([
          ...updatedMessages,
          { role: 'assistant', content: `Error: ${errorContent}` },
        ])
      } finally {
        setIsGenerating(false)
      }
    },
    [messages, isGenerating]
  )

  const stopGenerating = useCallback(() => {
    abortRef.current = true
  }, [])

  const clearChat = useCallback(() => {
    setMessages([])
  }, [])

  return {
    messages,
    loadingState,
    isGenerating,
    supportsWebGPU,
    initEngine,
    sendMessage,
    stopGenerating,
    clearChat,
  }
}
