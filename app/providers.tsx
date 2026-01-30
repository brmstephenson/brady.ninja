'use client'
import { ThemeProvider } from 'next-themes'
import { SidebarProvider } from './components/ui/sidebar'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
    </SidebarProvider>
  )
}
