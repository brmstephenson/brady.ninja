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

interface ResizableLayoutProps {
  children: React.ReactNode
  defaultLayout?: Layout
}
export default function ResizableLayout({
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
  return (
    <div>
      <Header />
      <AppSidebar />
      <div>{children}</div>
    </div>
  )
}

function DesktopLayout({ children, defaultLayout }: ResizableLayoutProps) {
  const { open, setOpen } = useSidebar()
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
    <>
      <Header />
      <ResizablePanelGroup
        id="main-layout"
        className="h-full w-full border"
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
          <div className="flex h-full w-full items-center justify-center p-6">
            {children}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <footer className="sticky bottom-0 left-0">
        <p>Footer</p>
      </footer>
    </>
  )
}
