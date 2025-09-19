"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import { FileText, History } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Drawer } from "vaul";
import { ModeToggle } from "@/components/utils/mode-toggle";
import GithubIconButton from "./github-icon-button";
import DiscordIconButton from "./discord-icon-button";

export function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

interface HomeHeaderProps {
  className?: string;
}

export default function HomeHeader({}: HomeHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/blog", label: "Blog", icon: FileText },
    { href: "/changelog", label: "Changelog", icon: History },
  ];

  return (
    <header className="w-full top-0 z-50 sticky lg:flex lg:items-center px-4 sm:px-6 lg:px-8 py-2 dark:text-white text-gray-900 transition-colors duration-300">
      <div className="flex max-w-4xl mx-auto w-full items-center relative justify-between h-14 sm:h-16 px-3 sm:px-4 p-2 dark:bg-black/20 bg-white/20 backdrop-blur-lg border dark:border-neutral-800/50 border-neutral-200/50 rounded-lg transition-all duration-300 shadow-lg dark:shadow-neutral-900/20 shadow-gray-200/20">
        {/* Mobile: Drawer trigger (hidden on lg+) */}
        <Drawer.Root direction="left" open={isOpen} onOpenChange={setIsOpen}>
          <Drawer.Trigger className="lg:hidden px-3 text-white h-10 grid place-content-center bg-gradient-to-b from-blue-500 to-blue-700 w-fit rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg">
            <AlignJustify />
          </Drawer.Trigger>

          {/* Drawer content (only visible when open) */}
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300" />
            <Drawer.Content
              className="left-2 top-2 bottom-2 fixed z-50 outline-none w-72 flex lg:hidden"
              style={{ "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties}
            >
              <div className="dark:bg-black/80 bg-white/80 backdrop-blur-lg border border-neutral-200 dark:border-neutral-800 p-2 h-full w-full grow flex flex-col rounded-[16px] transition-colors duration-300 shadow-xl">
                <div className="w-full flex justify-between mb-2">
                  <Link href="/" className="flex items-center pl-2" onClick={() => setIsOpen(false)}>
                    <span className="sr-only">HelixQue</span>
                    <Image
                      src="/logo.svg"
                      alt="HelixQue"
                      width={140}
                      height={32}
                      priority
                      className="h-8 w-auto"
                    />
                  </Link>
                  <button
                    className="rounded-md w-fit dark:bg-neutral-950 bg-gray-100 px-3 py-2.5 text-sm font-semibold dark:text-white text-gray-900 shadow-sm dark:hover:bg-neutral-800 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-gray-600 focus-visible:outline-gray-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X />
                  </button>
                </div>

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "cursor-pointer gap-1 select-none p-2 rounded-md transition-colors duration-200 flex items-center justify-start dark:text-gray-300 text-gray-700 dark:hover:text-blue-200 hover:text-blue-600",
                      pathname.startsWith(item.href) &&
                        "dark:text-blue-200 dark:border dark:border-blue-950 text-blue-600 dark:bg-neutral-900 bg-neutral-200",
                    )}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>

        {/* Desktop: brand + primary nav (hidden on <lg) */}
        <nav className="hidden lg:flex gap-2 items-center font-medium">
          <Link href="/" className="flex items-center pl-2">
            <span className="sr-only">HelixQue</span>
            <Image
              src="/logo.svg"
              alt="HelixQue"
              width={160}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "cursor-pointer gap-1 select-none p-2 rounded-md transition-colors duration-200 flex items-center justify-center dark:text-gray-300 text-gray-700 dark:hover:text-blue-200 hover:text-blue-600",
                pathname.startsWith(item.href) &&
                  "dark:text-blue-200 dark:border dark:border-blue-950 text-blue-600 dark:bg-neutral-900 bg-neutral-200",
              )}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right utilities (always visible) */}
        <nav className="flex items-center gap-2">
          <a
            href="https://twitter.com/naymur_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 border dark:border-neutral-800 border-neutral-200 px-3 rounded-md items-center justify-center dark:hover:bg-neutral-800 hover:bg-gray-100 transition-colors duration-300"
          >
            <XIcon className="h-4 w-4 fill-zinc-950 dark:fill-white transition-colors duration-300" />
          </a>
          <ModeToggle />
          <DiscordIconButton />
          <GithubIconButton />
        </nav>
      </div>
    </header>
  );
}
