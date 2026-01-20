"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='bg-background text-primary-green'>
      The current theme is: {theme}
      <br />
      <button onClick={() => setTheme("system")}>System</button>
      <br />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <br />
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  )
}

export default ThemeChanger
