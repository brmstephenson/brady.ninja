import { SidebarTrigger, useSidebar } from '../sidebar'
import ThemeChanger from '../theme-changer/theme-changer'

export default function Header() {
  const { open, setOpen } = useSidebar()

  return (
    <header className="sticky top-0 left-0 flex items-center justify-between bg-background dark:bg-background-dark">
      <SidebarTrigger onClick={() => setOpen(!open)} />
      <h1>Brady Stephenson</h1>
      <ThemeChanger cookieName="brady-theme" />
    </header>
  )
}
