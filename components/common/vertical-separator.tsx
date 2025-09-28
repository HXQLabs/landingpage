import { cn } from "@/lib/utils"

export function VerticalSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-4 w-px bg-border/50 shrink-0",
        className
      )}
      role="separator"
      aria-orientation="vertical"
    />
  )
}
