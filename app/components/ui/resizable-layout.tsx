'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/app/components/ui/resizable'
import { SidebarTrigger } from '@/app/components/ui/sidebar'
import type {
  Layout,
  PanelImperativeHandle,
  PanelSize,
} from 'react-resizable-panels'
import ThemeChanger from '@/app/components/ui/theme-changer/theme-changer'

export default function ResizableLayout({
  children,
  defaultLayout,
}: {
  children: React.ReactNode
  defaultLayout?: Layout
}) {
  const [open, setOpen] = useState(true)
  const sidebarPanelRef = useRef<PanelImperativeHandle>(null)
  const prevOpenRef = useRef(open)
  const hasInitialLayoutRef = useRef(false)

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
      <header className="sticky top-0 left-0 flex items-center justify-between">
        <SidebarTrigger onClick={() => setOpen(!open)} />
        <h1>Brady Stephenson</h1>
        <ThemeChanger cookieName="brady-theme" />
      </header>
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
          onResize={(size: PanelSize) => {
            // Ignore initial layout pass to avoid toggling open on mount
            if (!hasInitialLayoutRef.current) {
              hasInitialLayoutRef.current = true
              return
            }
            if (size.asPercentage < 2 && open) {
              setOpen(false)
            } else if (size.asPercentage > 2 && !open) {
              setOpen(true)
            }
          }}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
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
