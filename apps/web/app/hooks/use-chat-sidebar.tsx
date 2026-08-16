'use client'

import { createContext, useContext, useState, useCallback } from 'react'

type ChatSidebarContextProps = {
  open: boolean
  setOpen: (open: boolean) => void
  toggle: () => void
}

const ChatSidebarContext = createContext<ChatSidebarContextProps | null>(null)

export function ChatSidebarProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const toggle = useCallback(() => setOpen((prev) => !prev), [])

  return (
    <ChatSidebarContext.Provider value={{ open, setOpen, toggle }}>
      {children}
    </ChatSidebarContext.Provider>
  )
}

export function useChatSidebar() {
  const context = useContext(ChatSidebarContext)
  if (!context) {
    throw new Error('useChatSidebar must be used within a ChatSidebarProvider.')
  }
  return context
}
