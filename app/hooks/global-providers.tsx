'use client'
import { ThemeProvider } from 'next-themes'
import { SidebarProvider } from '../components/ui/sidebar'
import { OpenPagesProvider } from '../hooks/use-open-pages'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <OpenPagesProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </OpenPagesProvider>
    </SidebarProvider>
  )
}
