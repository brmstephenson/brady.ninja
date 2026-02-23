import { SidebarTrigger, useSidebar } from './ui/sidebar'
import ThemeChanger from './theme-changer'
import Link from 'next/link'
import { cn } from '../lib/cn'

export default function Header({ className }: { className?: string }) {
  const { open, setOpen } = useSidebar()

  return (
    <header
      className={cn(
        'sticky w-full top-0 left-0 flex items-center justify-between bg-background dark:bg-background-dark border-b dark:border-border p-2',
        className
      )}
    >
      <SidebarTrigger onClick={() => setOpen(!open)} />
      <Link href="/">
        <h1>Brady Stephenson</h1>
      </Link>
      <ThemeChanger cookieName="brady-theme" />
    </header>
  )
}
