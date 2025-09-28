"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const hacktoberfestStartDate = new Date("2025-10-01T00:00:00")

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

interface CleanCountdownProps {
  className?: string
}

export function CleanCountdown({ className }: CleanCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = hacktoberfestStartDate.getTime() - now.getTime()

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (timeLeft.isExpired) return null

  return (
    <div className={cn("flex justify-center w-full", className)}>
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col items-center flex-1">
          <div className="relative w-full">
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 w-full flex items-center justify-center">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-foreground tabular-nums tracking-tight text-center">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-2 text-center uppercase tracking-wider">
              Days
            </div>
          </div>
        </div>
        
        <div className="text-lg sm:text-2xl md:text-3xl text-muted-foreground/30 font-mono">:</div>
        
        <div className="flex flex-col items-center flex-1">
          <div className="relative w-full">
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 w-full flex items-center justify-center">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-foreground tabular-nums tracking-tight text-center">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-2 text-center uppercase tracking-wider">
              Hours
            </div>
          </div>
        </div>
        
        <div className="text-lg sm:text-2xl md:text-3xl text-muted-foreground/30 font-mono">:</div>
        
        <div className="flex flex-col items-center flex-1">
          <div className="relative w-full">
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 w-full flex items-center justify-center">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-foreground tabular-nums tracking-tight text-center">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-2 text-center uppercase tracking-wider">
              Minutes
            </div>
          </div>
        </div>
        
        <div className="text-lg sm:text-2xl md:text-3xl text-muted-foreground/30 font-mono">:</div>
        
        <div className="flex flex-col items-center flex-1">
          <div className="relative w-full">
            <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-3 w-full flex items-center justify-center">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-foreground tabular-nums tracking-tight text-center">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-2 text-center uppercase tracking-wider">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
