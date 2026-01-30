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
      <Accordion type="single" collapsible>
        <CompactAccordionItem value="item-1">
          <CompactAccordionTrigger>Pages</CompactAccordionTrigger>
          <CompactAccordionContent>
            <PageItem href="/" title="Home" />
            <Accordion type="single" collapsible>
              <CompactAccordionItem value="item-2">
                <CompactAccordionTrigger>Games</CompactAccordionTrigger>
                <CompactAccordionContent>
                  <PageItem href="/" title="Minesweeper" />
                  <PageItem href="/" title="Conways Game of Life" />
                </CompactAccordionContent>
              </CompactAccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <CompactAccordionItem value="item-2">
                <CompactAccordionTrigger>Hobbies</CompactAccordionTrigger>
                <CompactAccordionContent>
                  <PageItem href="/" title="Mountain Biking" />
                  <PageItem href="/" title="Fitness" />
                  <PageItem href="/" title="Health" />
                  <PageItem href="/" title="Travel" />
                  <PageItem href="/" title="Gaming" />
                  <PageItem href="/" title="Art" />
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
