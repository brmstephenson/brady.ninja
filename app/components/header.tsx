import { SidebarTrigger, useSidebar } from './ui/sidebar'
import ThemeChanger from './theme-changer'
import Link from 'next/link'

export default function Header() {
  const { open, setOpen } = useSidebar()

  return (
    <header className="sticky top-0 left-0 flex items-center justify-between bg-background dark:bg-background-dark">
      <SidebarTrigger onClick={() => setOpen(!open)} />
      <Link href="/">
        <h1>Brady Stephenson</h1>
      </Link>
      <ThemeChanger cookieName="brady-theme" />
    </header>
  )
}
