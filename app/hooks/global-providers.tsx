'use client'
import { ThemeProvider } from 'next-themes'
import { SidebarProvider } from '../components/ui/sidebar'
import { OpenPagesProvider } from './use-open-pages'
import { ChatSidebarProvider } from './use-chat-sidebar'
import { WebLLMProvider } from './use-web-llm'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ChatSidebarProvider>
        <WebLLMProvider>
          <OpenPagesProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
            >
              {children}
            </ThemeProvider>
          </OpenPagesProvider>
        </WebLLMProvider>
      </ChatSidebarProvider>
    </SidebarProvider>
  )
}
