"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Initialize theme state on mount
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);
  const changeTheme = async () => {
    if (!buttonRef.current) return;

    // Fallback for browsers that don't support View Transition API
    if (!document.startViewTransition) {
      const dark = document.documentElement.classList.toggle("dark");
      setIsDarkMode(dark);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        const dark = document.documentElement.classList.toggle("dark");
        setIsDarkMode(dark);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };
  return (
    <button 
      ref={buttonRef} 
      onClick={changeTheme} 
      className={cn(
        "flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800",
        className
      )}
      type="button"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <IconSun className="transition-all duration-300 ease-in-out" /> : <IconMoon className="transition-all duration-300 ease-in-out" />}
    </button>
  );
};
