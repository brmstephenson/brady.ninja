import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/providers'
import type { Layout } from 'react-resizable-panels'
import LayoutContent from '@/app/components/layout-content'

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const layoutCookie = cookieStore.get('brady-layout')?.value
  let defaultLayout: Layout | undefined

  if (layoutCookie) {
    try {
      defaultLayout = JSON.parse(decodeURIComponent(layoutCookie)) as Layout
    } catch {
      defaultLayout = undefined
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 font-sans dark:bg-black`}
      >
        <Providers>
          <div className="flex flex-col h-screen w-screen">
            <LayoutContent defaultLayout={defaultLayout}>
              {children}
            </LayoutContent>
          </div>
        </Providers>
      </body>
    </html>
  )
}
