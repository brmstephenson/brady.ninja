import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/hooks/global-providers'
import type { Layout } from 'react-resizable-panels'
import LayoutContent from '@/app/components/layout-content'
import { Analytics } from '@vercel/analytics/next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Brady Stephenson',
    template: '%s | Brady Stephenson',
  },
  description:
    'Frontend-leaning full stack software engineer with 12+ years of experience in React, TypeScript, Remix, and Ruby on Rails. Portfolio, resume, and interactive projects.',
  metadataBase: new URL('https://brady.ninja'),
  keywords: [
    'Brady Stephenson',
    'Software Engineer',
    'Frontend Engineer',
    'React',
    'TypeScript',
    'Remix',
    'Ruby on Rails',
    'Portfolio',
  ],
  authors: [{ name: 'Brady Stephenson', url: 'https://brady.ninja' }],
  creator: 'Brady Stephenson',
  openGraph: {
    title: 'Brady Stephenson',
    description:
      'Frontend-leaning full stack software engineer. Portfolio, resume, and interactive projects.',
    url: 'https://brady.ninja',
    siteName: 'Brady Stephenson',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/brady.jpeg',
        width: 300,
        height: 300,
        alt: 'Brady Stephenson',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Brady Stephenson',
    description:
      'Frontend-leaning full stack software engineer. Portfolio, resume, and interactive projects.',
    images: ['/brady.jpeg'],
  },
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
      <Analytics />
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/ninja-circle-light.svg" type="image/svg+xml" />
      </head>
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
