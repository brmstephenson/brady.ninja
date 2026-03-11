'use client'

import { useState, useRef, useEffect } from 'react'
import {
  SendIcon,
  Loader2Icon,
  Trash2Icon,
  SquareIcon,
  AlertTriangleIcon,
  BotIcon,
  RotateCwIcon,
  InfoIcon,
} from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip'
import { cn } from '@/app/lib/cn'
import { useWebLLM, type ChatMessage } from '@/app/hooks/use-web-llm'

export default function ChatSidebar() {
  const {
    messages,
    loadingState,
    isGenerating,
    supportsWebGPU,
    initEngine,
    sendMessage,
    stopGenerating,
    clearChat,
    resetEngine,
  } = useWebLLM()
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    setInput('')
    sendMessage(trimmed)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  if (!supportsWebGPU()) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center gap-4">
        <AlertTriangleIcon className="size-10 text-editor-accent-1" />
        <p className="text-sm text-editor-accent-2">
          Your browser doesn&apos;t support WebGPU. Try Chrome or Edge for the
          AI chat feature.
        </p>
      </div>
    )
  }

  if (loadingState.status === 'idle') {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center gap-4">
        <BotIcon className="size-10 text-editor-accent-1" />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-editor-foreground">
            AI Chat Assistant
          </p>
          <p className="text-xs text-editor-accent-2">
            Ask me anything about Brady Stephenson. The AI model runs entirely
            in your browser.
          </p>
        </div>
        <Button
          onClick={initEngine}
          variant="outline"
          className="border-editor-accent-1 text-editor-accent-1 hover:bg-editor-accent-1 hover:text-editor-background"
        >
          Load AI Model
        </Button>
        <p className="text-xs text-editor-accent-2/60">
          ~1 GB download on first use, cached after
        </p>
      </div>
    )
  }

  if (loadingState.status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center gap-4">
        <Loader2Icon className="size-8 text-editor-accent-1 animate-spin" />
        <div className="w-full max-w-xs">
          <div className="h-2 rounded-full bg-editor-accent-1/20 overflow-hidden">
            <div
              className="h-full bg-editor-accent-1 rounded-full transition-all duration-300"
              style={{ width: `${Math.round(loadingState.progress * 100)}%` }}
            />
          </div>
          <p className="text-xs text-editor-accent-2 mt-2 line-clamp-2">
            {loadingState.text}
          </p>
        </div>
      </div>
    )
  }

  if (loadingState.status === 'error') {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center gap-4">
        <AlertTriangleIcon className="size-10 text-red-500" />
        <p className="text-sm text-editor-accent-2">{loadingState.error}</p>
        <Button
          onClick={initEngine}
          variant="outline"
          className="border-editor-accent-1 text-editor-accent-1"
        >
          Retry
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-3 py-2 border-b border-editor-accent-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-medium text-editor-accent-2">
            AI Chat
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon className="size-3 text-editor-accent-2" />
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-60">
                This AI chatbot sometimes shows inaccurate info, my experience
                on this site is the source of truth.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={clearChat}
            className="h-6 w-6 p-0 text-editor-accent-2 hover:text-editor-foreground"
            title="Clear chat"
          >
            <Trash2Icon className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetEngine}
            className="h-6 w-6 p-0 text-editor-accent-2 hover:text-editor-foreground"
            title="Reload model"
          >
            <RotateCwIcon className="size-3.5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <p className="text-xs text-editor-accent-2">
              Ask me about Brady&apos;s experience, skills, or this website.
            </p>
          </div>
        )}
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t border-editor-accent-1/20 p-3"
      >
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Brady..."
            rows={1}
            disabled={isGenerating}
            className="flex-1 resize-none rounded-md border border-editor-accent-1/30 bg-editor-background px-3 py-2 text-sm text-editor-foreground placeholder:text-editor-accent-2/50 focus:outline-none focus:ring-1 focus:ring-editor-accent-1 disabled:opacity-50"
          />
          {isGenerating ? (
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={stopGenerating}
              className="shrink-0 text-editor-accent-2 hover:text-editor-foreground"
              title="Stop generating"
            >
              <SquareIcon className="size-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              size="sm"
              variant="ghost"
              disabled={!input.trim()}
              className="shrink-0 text-editor-accent-1 hover:text-editor-foreground disabled:opacity-30"
              title="Send"
            >
              <SendIcon className="size-4" />
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user'

  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap',
          isUser
            ? 'bg-editor-accent-1 text-editor-background'
            : 'bg-editor-accent-1/10 text-editor-foreground'
        )}
      >
        {message.content || (
          <Loader2Icon className="size-4 animate-spin text-editor-accent-2" />
        )}
      </div>
    </div>
  )
}
