'use client'

import { Code, X } from 'lucide-react'
import { useOpenPages } from '../hooks/use-open-pages'
import { Button } from './ui/button'
import { cn } from '../lib/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function OpenPages() {
  const { openPages, setOpenPages } = useOpenPages()
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <div className="flex items-center flex-wrap border-b">
      {openPages.map((page) => (
        <Link
          key={page.title}
          className={cn(
            'flex items-center gap-1 border-l border-b flex-grow-4 justify-between p-1 text-sm',
            isActive(page.href) ? 'bg-background dark:bg-background-dark' : ''
          )}
          href={page.href}
        >
          <div className="flex items-center gap-2 p-2">
            <Code className="text-orange-500 size-4" />
            {page.title}.html
          </div>
          {pathname !== page.href && (
            <Button
              variant="ghost"
              size="icon"
              className="hover:cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                setOpenPages(openPages.filter((p) => p.title !== page.title))
              }}
            >
              <X />
            </Button>
          )}
        </Link>
      ))}
    </div>
  )
}
