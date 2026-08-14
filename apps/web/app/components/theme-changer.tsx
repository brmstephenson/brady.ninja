'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/app/components/ui/button'
import { Loader2, MoonIcon, SunIcon } from 'lucide-react'
import { readCookieValue, writeCookieValue } from '@/app/utils/cookie'

const VALID_THEMES = new Set(['light', 'dark', 'system'])

const ThemeChanger = ({
  cookieName = 'brady-theme',
}: {
  cookieName?: string
}) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const initializedFromCookieRef = useRef(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || initializedFromCookieRef.current) return
    initializedFromCookieRef.current = true

    const cookieTheme = readCookieValue(cookieName)
    if (!cookieTheme || !VALID_THEMES.has(cookieTheme)) return
    if (cookieTheme !== theme) {
      setTheme(cookieTheme)
    }
  }, [cookieName, mounted, setTheme, theme])

  useEffect(() => {
    if (!mounted || !initializedFromCookieRef.current) return
    if (!theme || !VALID_THEMES.has(theme)) return
    writeCookieValue(cookieName, theme)
  }, [cookieName, mounted, theme])

  if (!mounted) {
    return (
      <Button variant="ghost" className="p-2">
        <Loader2 className="w-4 h-4 animate-spin" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  )
}

export default ThemeChanger
