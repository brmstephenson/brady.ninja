'use client'

import { useEffect, useRef } from 'react'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/app/components/ui/resizable'
import { useSidebar } from '@/app/components/ui/sidebar'
import type {
  Layout,
  PanelImperativeHandle,
  PanelSize,
} from 'react-resizable-panels'
import { useIsMobile } from '@/app/hooks/use-mobile'
import AppSidebar from './mobile-sidebar'
import Header from '@/app/components/header'
import PageList from './page-list'
import OpenPages from './open-pages'
import Footer from '@/app/components/footer'
import { useOpenPages } from '@/app/hooks/use-open-pages'

interface ResizableLayoutProps {
  children: React.ReactNode
  defaultLayout?: Layout
}
export default function LayoutContent({
  children,
  defaultLayout,
}: ResizableLayoutProps) {
  const isMobile = useIsMobile()

  if (isMobile === null) {
    return null
  }

  if (isMobile) {
    return <MobileLayout>{children}</MobileLayout>
  }
  return <DesktopLayout defaultLayout={defaultLayout}>{children}</DesktopLayout>
}

function MobileLayout({ children }: ResizableLayoutProps) {
  const { openPages } = useOpenPages()

  return (
    <>
      <Header className="fixed w-full top-0 left-0" />
      <AppSidebar />
      <div className="h-[calc(100%-90px)] mt-15">
        <OpenPages />
        <div>{openPages.length === 0 ? <EmptyState /> : children}</div>
      </div>
      <Footer />
    </>
  )
}

function DesktopLayout({ children, defaultLayout }: ResizableLayoutProps) {
  const { open, setOpen } = useSidebar()
  const { openPages } = useOpenPages()
  const sidebarPanelRef = useRef<PanelImperativeHandle>(null)
  const prevOpenRef = useRef(open)

  useEffect(() => {
    if (!sidebarPanelRef.current) return
    if (prevOpenRef.current === open) return
    prevOpenRef.current = open

    if (open) {
      sidebarPanelRef.current.expand()
      if (sidebarPanelRef.current.getSize().asPercentage < 2) {
        sidebarPanelRef.current.resize('20%')
      }
    } else {
      sidebarPanelRef.current.collapse()
    }
  }, [open])

  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="h-[calc(100%-90px)]">
        <ResizablePanelGroup
          id="main-layout"
          defaultLayout={defaultLayout}
          onLayoutChanged={(layout) => {
            document.cookie = `brady-layout=${encodeURIComponent(
              JSON.stringify(layout)
            )}; path=/; max-age=31536000`
          }}
        >
          <ResizablePanel
            id="sidebar"
            defaultSize={20}
            className="overflow-y-auto"
            panelRef={sidebarPanelRef}
            collapsible
            collapsedSize={0}
            maxSize="90%"
            minSize="20%"
            onResize={(size: PanelSize) => {
              if (size.asPercentage === 0 && open) {
                setOpen(false)
              } else if (size.asPercentage >= 5 && !open) {
                setOpen(true)
              }
            }}
          >
            <PageList />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel id="content" defaultSize={80}>
            <div className="sticky top-0 left-0">
              <OpenPages />
            </div>
            <div className="w-full h-[calc(100%-40px)] overflow-auto">
              {openPages.length === 0 ? <EmptyState /> : children}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Footer />
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-editor-background text-editor-foreground text-center gap-4">
      <h1 className="text-2xl font-bold">No pages are open.</h1>
      <p className="text-lg text-editor-accent-2">
        No pages are open. Pick a page from the sidebar to get started.
      </p>
    </div>
  )
}
