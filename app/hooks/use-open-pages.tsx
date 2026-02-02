import { createContext, useContext, useState } from 'react'
import { flatPages } from '../utils/routes'
import { usePathname } from 'next/navigation'

export type OpenPage = {
  title: string
  href: string
}

export type OpenPagesContextType = {
  openPages: OpenPage[]
  setOpenPages: (openPages: OpenPage[]) => void
}

export const OpenPagesContext = createContext<OpenPagesContextType>({
  openPages: [],
  setOpenPages: () => {},
})

export function OpenPagesProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [openPages, setOpenPages] = useState<OpenPage[]>(
    flatPages.filter((page) => page.href === pathname)
  )

  return (
    <OpenPagesContext.Provider value={{ openPages, setOpenPages }}>
      {children}
    </OpenPagesContext.Provider>
  )
}

export function useOpenPages() {
  return useContext(OpenPagesContext)
}
