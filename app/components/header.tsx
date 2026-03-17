import { SidebarTrigger, useSidebar } from './ui/sidebar'
import ThemeChanger from './theme-changer'
import Link from 'next/link'
import { cn } from '../lib/cn'
import { MessageSquareIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useChatSidebar } from '@/app/hooks/use-chat-sidebar'

export default function Header({ className }: { className?: string }) {
  const { open, setOpen } = useSidebar()
  const { toggle: toggleChat, open: chatOpen } = useChatSidebar()

  return (
    <header
      className={cn(
        'sticky z-50 w-full top-0 left-0 flex items-center justify-between bg-background border-b dark:border-border p-2',
        className
      )}
    >
      <SidebarTrigger onClick={() => setOpen(!open)} />
      <Link href="/">
        <h1>Brady Stephenson</h1>
      </Link>
      <div className="flex items-center gap-1">
        {isAiChatEnabled && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleChat}
            title="Toggle AI Chat"
          >
            <MessageSquareIcon
              className={cn('size-4', chatOpen ? 'fill-primary' : 'fill-none')}
            />
          </Button>
        )}
        <ThemeChanger cookieName="brady-theme" />
      </div>
    </header>
  )
}
