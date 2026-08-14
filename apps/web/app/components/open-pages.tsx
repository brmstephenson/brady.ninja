'use client'

import { Code, X } from 'lucide-react'
import { useOpenPages } from '../hooks/use-open-pages'
import { Button } from './ui/button'
import { cn } from '../lib/cn'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function OpenPages() {
  const { openPages, setOpenPages } = useOpenPages()
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (href: string) => pathname === href

  const handleClose = (
    e: React.MouseEvent,
    page: { title: string; href: string }
  ) => {
    e.preventDefault()
    e.stopPropagation()

    const pageIndex = openPages.findIndex((p) => p.title === page.title)
    const newPages = openPages.filter((p) => p.title !== page.title)

    if (isActive(page.href)) {
      if (newPages.length > 0) {
        const nextIndex =
          pageIndex < newPages.length ? pageIndex : newPages.length - 1
        router.push(newPages[nextIndex].href)
      } else {
        router.push('/')
      }
    }

    setOpenPages(newPages)
  }

  return (
    <div className="flex items-center flex-wrap bg-background dark:bg-background-dark">
      {openPages.map((page) => (
        <Link
          key={page.title}
          className={cn(
            'group flex items-center gap-1 border-l border-b-2 flex-grow-4 justify-between p-1 text-sm',
            isActive(page.href)
              ? 'bg-editor-background text-editor-foreground border-b-editor-foreground'
              : ''
          )}
          href={page.href}
        >
          <div className="flex items-center gap-2 p-2">
            <Code className="text-editor-accent-1 size-4" />
            {page.title}.html
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'hover:cursor-pointer',
              isActive(page.href)
                ? ''
                : 'opacity-0 group-hover:opacity-100'
            )}
            onClick={(e) => handleClose(e, page)}
          >
            <X />
          </Button>
        </Link>
      ))}
    </div>
  )
}
