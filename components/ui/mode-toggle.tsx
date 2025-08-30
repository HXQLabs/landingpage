"use client"

import * as React from "react"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className={cn(
        "relative flex cursor-pointer items-center justify-center rounded-lg p-2 text-neutral-500 dark:text-neutral-400",
        className
      )}>
        <div className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        "relative flex cursor-pointer items-center justify-center rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 transition-all duration-200 ease-in-out",
        className
      )}
      aria-label="Toggle theme"
    >
      <IconSun className="h-5 w-5 scale-100 rotate-0 transition-all duration-300 ease-in-out dark:scale-0 dark:-rotate-90" />
      <IconMoon className="absolute h-5 w-5 scale-0 rotate-90 transition-all duration-300 ease-in-out dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
