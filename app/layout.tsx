import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/components/ui/theme-changer/providers'
import Header from '@/app/components/ui/header/header'
import LeftSidebar from '@/app/components/ui/left-sidebar/left-sidebar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Brady Stephenson',
  description: "Brady Stephenson's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 font-sans dark:bg-black`}
      >
        <Providers>
          <div className="flex p-4 gap-4">
            <LeftSidebar />
            <div className="w-full">
              <Header />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
