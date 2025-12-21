"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Zapobiegaj niezgodności hydratacji, czekając na zamontowanie
    // Użycie setTimeout w celu uniknięcia ostrzeżenia lint „ustaw stan synchronicznie w obrębie efektu”
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant='default'
      size='icon'
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label='Toggle theme'
      className='cursor-pointer bg-primary hover:bg-primary/80 '
    >
      {theme === "dark" ? (
        <Sun className='h-[1.2rem] w-[1.2rem]' />
      ) : (
        <Moon className='h-[1.2rem] w-[1.2rem]' />
      )}
    </Button>
  )
}
