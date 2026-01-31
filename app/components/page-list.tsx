import Link from 'next/link'
import {
  Accordion,
  CompactAccordionContent,
  CompactAccordionItem,
  CompactAccordionTrigger,
} from './ui/accordion'
import { Code } from 'lucide-react'

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
                  <PageItem href="/" title="Home" />
                  <PageItem href="/resume" title="Resume" />
                  <Accordion type="single" collapsible>
                    <CompactAccordionItem value="item-2">
                      <CompactAccordionTrigger>Games</CompactAccordionTrigger>
                      <CompactAccordionContent>
                        <PageItem href="/minesweeper" title="Minesweeper" />
                        <PageItem
                          href="/conways-game-of-life"
                          title="Conways Game of Life"
                        />
                      </CompactAccordionContent>
                    </CompactAccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                    <CompactAccordionItem value="item-2">
                      <CompactAccordionTrigger>Hobbies</CompactAccordionTrigger>
                      <CompactAccordionContent>
                        <PageItem href="/biking" title="Biking" />
                        <PageItem href="/art" title="Art" />
                        <PageItem href="/travel" title="Travel" />
                        <PageItem href="/gaming" title="Gaming" />
                      </CompactAccordionContent>
                    </CompactAccordionItem>
                  </Accordion>
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
  return (
    <Link
      href={href}
      className="flex items-center gap-2 hover:bg-accent p-2 truncate"
    >
      <Code className="text-orange-500 size-3" />
      {title}.html
    </Link>
  )
}
