"use client";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface HelixQueHeaderProps {
  className?: string;
}

export default function HelixQueHeader({ className }: HelixQueHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const updatePillPosition = (index: number) => {
    const element = navItemsRef.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      const parentRect = element.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setPillStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    }
  };

  const HelixQueLogo = () => (
    <div className="text-foreground flex items-end gap-2.5 [&_svg]:h-5">
      <img 
        src="/logo.svg" 
        alt="HelixQue Logo" 
        width={20} 
        height={20} 
        className="h-5 w-auto"
      />
      <div className="relative">
        <span className="hidden sm:block font-heading text-lg leading-none font-semibold">HelixQue</span>
        <Badge
          variant="secondary" 
          className="hidden sm:block absolute -top-1 -right-1 translate-x-full text-[8px] px-0.5 py-0 h-auto"
        >
          Beta
        </Badge>
      </div>
    </div>
  );

  const navigationItems = [
    { href: "/docs", label: "Documentation" },
    { href: "/changelog", label: "Changelog" },
    { href: "/announcements", label: "Announcements" },
    { href: "/resources", label: "Resources" }
  ];

  return (
    <div className={cn("bg-background theme-container", className)}>
      <div className="bg-background/70 sticky top-0 z-40 w-full backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 backdrop-blur-xs">
          {/* Desktop Logo */}
          <div className="hidden md:flex">
            <Link href="/" className="transition-opacity duration-200 hover:opacity-80">
              <HelixQueLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="absolute left-1/2 hidden -translate-x-1/2 transform md:flex" 
            aria-label="Main navigation"
          >
            <ul className="border-border/70 relative flex w-fit rounded-full border p-1 px-1">
              {navigationItems.map((item, index) => (
                <li 
                  key={item.href}
                  ref={(el) => {
                    navItemsRef.current[index] = el;
                  }}
                  className="hover:text-foreground text-muted-foreground z-10 block cursor-pointer px-3 py-1.5 text-sm font-medium tracking-tight transition-all duration-300 ease-out"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    updatePillPosition(index);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link 
                    href={item.href} 
                    className="text-[13.5px] text-muted-foreground hover:text-foreground transition-all duration-300 ease-out relative"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* Animated pill background */}
              <motion.li 
                className="bg-muted/80 absolute inset-0 my-1.5 rounded-full shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  hoveredIndex !== null
                    ? {
                        opacity: 1,
                        scale: 1,
                        left: `${pillStyle.left}px`,
                        width: `${pillStyle.width}px`,
                      }
                    : {
                        opacity: 0,
                        scale: 0.8,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                }}
              />
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <div className="flex items-center gap-3">
              <button 
                className="flex items-center [&_svg]:size-5 transition-opacity duration-200 hover:opacity-70" 
                aria-label="Open menu" 
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="transition-transform duration-200" style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                  <Menu size={22} />
                </div>
                <span className="sr-only">Toggle Menu</span>
              </button>
              <Link href="/" className="transition-opacity duration-200 hover:opacity-80">
                <HelixQueLogo />
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          
          <nav 
            className="flex items-center gap-3 text-sm font-medium" 
            aria-label="Authentication"
          >
          
            <Button 
              className="cursor-pointer inline-flex items-center  justify-center gap-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 has-[>svg]:px-3 h-8 rounded-lg px-4 text-[13.5px] whitespace-nowrap shadow-[inset_0_1px_0_0_#FFFFFF20]"
            >
              Sign Up
            </Button>
            <Button 
              className="cursor-pointer inline-flex items-center justify-center gap-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 py-2 has-[>svg]:px-3 h-8 rounded-lg px-4 text-[13.5px] whitespace-nowrap shadow-[inset_0_1px_0_0_#FFFFFF20]"
            >
              Sign In
            </Button>
            
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay and Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              className="fixed inset-0 z-50 bg-black/50 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Mobile Menu Drawer */}
            <motion.div
              role="dialog"
              id="mobile-menu"
              aria-modal="true"
              aria-label="Mobile menu"
              className="fixed inset-y-0 left-0 z-50 h-full w-3/4 max-w-72 border-r border-border bg-background shadow-xl md:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8,
              }}
            >
              {/* Header with Close Button */}
              <div className="relative flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <HelixQueLogo />
                  </Link>
                </div>
                
                {/* Close Button */}
                <button
                  type="button"
                  className="rounded-xs opacity-70 hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none ring-offset-background hover:rotate-90 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="size-6" />
                  <span className="sr-only">Close</span>
                </button>
              </div>

              {/* Navigation Content */}
              <div className="pt-2 pb-4 px-0">
                <div className="flex flex-col space-y-1 items-stretch">
                  {navigationItems.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href}
                      className="text-muted-foreground py-2 text-base hover:text-foreground transition-all duration-200 rounded-lg px-4 hover:bg-muted/50 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Hidden accessibility headers */}
              <div className="sr-only">
                <h2 className="text-foreground font-semibold">Main Menu</h2>
                <p className="text-muted-foreground text-sm">
                  Use the options below to navigate the application.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}