import Link from 'next/link'
import {
  Accordion,
  CompactAccordionContent,
  CompactAccordionItem,
  CompactAccordionTrigger,
} from './ui/accordion'
import { Code } from 'lucide-react'
import { useOpenPages } from '../hooks/use-open-pages'
import { pages } from '../utils/routes'
import { useSidebar } from './ui/sidebar'

export default function PageList() {
  return (
    <div>
      <Accordion type="single" collapsible defaultValue="brady-ninja">
        <CompactAccordionItem value="brady-ninja">
          <CompactAccordionTrigger>Brady.ninja</CompactAccordionTrigger>
          <CompactAccordionContent>
            <Accordion type="single" collapsible defaultValue="pages">
              <CompactAccordionItem value="pages">
                <CompactAccordionTrigger>Pages</CompactAccordionTrigger>
                <CompactAccordionContent>
                  {pages.map((page) => {
                    return page?.items?.length ? (
                      <Accordion
                        key={page.title}
                        type="single"
                        collapsible
                        defaultValue={page.title}
                      >
                        <CompactAccordionItem value={page.title}>
                          <CompactAccordionTrigger>
                            {page.title}
                          </CompactAccordionTrigger>
                          <CompactAccordionContent>
                            {page?.items?.map((item) => (
                              <PageItem
                                key={item.title}
                                href={item.href}
                                title={item.title}
                              />
                            ))}
                          </CompactAccordionContent>
                        </CompactAccordionItem>
                      </Accordion>
                    ) : (
                      <PageItem
                        key={page.title}
                        href={page.href ?? ''}
                        title={page.title}
                      />
                    )
                  })}
                </CompactAccordionContent>
              </CompactAccordionItem>
            </Accordion>
          </CompactAccordionContent>
        </CompactAccordionItem>
      </Accordion>
    </div>
  )
}

function PageItem({ href, title }: { href: string; title: string }) {
  const { openPages, setOpenPages } = useOpenPages()
  const { isMobile, setOpenMobile } = useSidebar()

  return (
    <Link
      href={href}
      className="flex items-center gap-2 hover:bg-accent p-2"
      onClick={() => {
        if (isMobile) {
          setOpenMobile(false)
        }
        if (openPages.some((p) => p.href === href)) {
          return
        }
        setOpenPages([...openPages, { title, href }])
      }}
    >
      <Code className="text-editor-accent-1 w-3 h-3 shrink-0" />
      <span className="w-full">
        <span>{title}</span>.html
      </span>
    </Link>
  )
}
