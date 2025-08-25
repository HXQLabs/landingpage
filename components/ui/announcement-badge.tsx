"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { AnimatedShinyText } from "../magicui/animated-shiny-text"

export interface AnnouncementBadgeProps {
  href: string
  announcementType: string // Inner circle content
  title: string           // Outer pill content
  className?: string
  isExternal?: boolean
}

export function AnnouncementBadge({
  href,
  announcementType,
  title,
  className,
  isExternal = false,
}: AnnouncementBadgeProps) {
  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      className={cn(
        "flex w-auto items-center space-x-2 rounded-full bg-primary/20 ring-1 ring-accent px-2 py-1 whitespace-pre",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Inner circle for announcement type */}
      <div className="flex items-center justify-center w-fit rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-primary sm:text-sm text-center">
            {announcementType}
      </div>

      {/* Outer pill for title/message */}
      <p className="text-xs font-medium text-primary sm:text-sm">
       <AnimatedShinyText>{title}</AnimatedShinyText> 
      </p>

      {/* Optional arrow icon */}
      <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="currentColor"
          className="text-primary"
        />
      </svg>
    </motion.a>
  )
}
