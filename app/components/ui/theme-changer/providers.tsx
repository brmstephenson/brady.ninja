'use client'
import { ThemeProvider } from 'next-themes'
import { SidebarProvider } from '../sidebar'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </SidebarProvider>
  )
}
