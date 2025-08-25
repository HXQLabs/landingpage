'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
];

// Logo component
const Logo = () => (
  <Link className="flex items-center gap-2" href="/">
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M0 4.5C0 3.11929 1.11929 2 2.5 2H7.5C8.88071 2 10 3.11929 10 4.5V9.40959C10.0001 9.4396 10.0002 9.46975 10.0002 9.50001C10.0002 10.8787 11.1162 11.9968 12.4942 12C12.4961 12 12.4981 12 12.5 12H17.5C18.8807 12 20 13.1193 20 14.5V19.5C20 20.8807 18.8807 22 17.5 22H12.5C11.1193 22 10 20.8807 10 19.5V14.5C10 14.4931 10 14.4861 10.0001 14.4792C9.98891 13.1081 8.87394 12 7.50017 12C7.4937 12 7.48725 12 7.48079 12H2.5C1.11929 12 0 10.8807 0 9.5V4.5Z" 
        fill="currentColor"
      />
    </svg>
    <span className="text-2xl font-medium">Notus</span>
  </Link>
);

// Theme toggle component
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="hover:shadow-input relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-neutral-500 dark:text-neutral-500">
        <div className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="hover:shadow-input relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-neutral-500 dark:text-neutral-500"
    >
      <Sun className={cn(
        "h-4 w-4 scale-100 rotate-0 text-gray-600 transition-all dark:scale-0 dark:-rotate-90 dark:text-gray-300"
      )} />
      <Moon className={cn(
        "absolute h-4 w-4 scale-0 rotate-90 text-gray-600 transition-all dark:scale-100 dark:rotate-0 dark:text-gray-300"
      )} />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

// Navigation links component
const NavigationLinks = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-10", className)}>
    {navigation.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="font-medium text-gray-600 transition duration-200 hover:text-neutral-900 dark:text-gray-300 dark:hover:text-neutral-300"
      >
        {item.name}
      </a>
    ))}
  </div>
);

// CTA Button
const CTAButton = ({ className }: { className?: string }) => (
  <a
    href="/sign-up"
    className={cn(
      "block rounded-xl px-6 py-2 text-center text-sm font-medium transition duration-150 active:scale-[0.98] sm:text-base bg-gray-900 text-white dark:bg-white dark:text-black",
      className
    )}
  >
    Start building
  </a>
);

export default function NewNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="max-w-7xl mx-auto">
      {/* Desktop Navigation - Fixed */}
      <div 
        className={cn(
          "fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-[calc(80rem-4rem)] items-center justify-between bg-white/80 px-2 py-2 backdrop-blur-sm md:flex xl:rounded-2xl dark:bg-neutral-900/80",
          isScrolled 
            ? "shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[0px_2px_0px_0px_var(--color-neutral-800),0px_-2px_0px_0px_var(--color-neutral-800)]"
            : "",
          !isScrolled && "translate-y-[-100px]"
        )}
        style={{
          transform: isScrolled ? 'translateY(0px)' : 'translateY(-100px)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <Logo />
        <NavigationLinks />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CTAButton />
        </div>
      </div>

      {/* Desktop Navigation - Static (when not scrolled) */}
      <div className="hidden items-center justify-between px-4 py-4 md:flex">
        <Logo />
        <NavigationLinks />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CTAButton />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="relative flex items-center justify-between p-2 md:hidden">
        <Logo />
        <button 
          className="shadow-aceternity flex h-6 w-6 flex-col items-center justify-center rounded-md"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-4 w-4 shrink-0 text-gray-600" />
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-900 dark:ring-white dark:ring-opacity-10">
            <div className="py-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-gray-100 dark:border-neutral-800">
                <div className="flex items-center justify-between px-4 py-2">
                  <ThemeToggle />
                  <CTAButton className="text-xs px-3 py-1" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

