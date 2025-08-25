"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IconRocket } from "@tabler/icons-react";
import { ModeToggle } from "../ui/theme-toggle-button";


// Component to handle the separator line visibility
const NavSeparator = ({ visible, className }: { visible?: boolean; className?: string }) => {
  if (visible) return null; // Hide when scrolled
  return <div className={`bg-gray-200 dark:bg-neutral-700 h-[1px] w-full ${className}`} />;
};

export function MainNavbar() {
  const navItems = [
    {
      name:"About",
      link: "#about"
    },
    {
      name: "Blog",
      link: "#blog"
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="fixed inset-x-0 top-0 z-40 w-full">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-50 flex items-center gap-4">
          {/* <NavbarButton> hi</NavbarButton>
           */}
           <ModeToggle/>

          
          <NavbarButton variant="secondary">Login</NavbarButton>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1.5 px-3 py-1.5 text-sm"
          >
            <IconRocket className="h-4 w-4" />
            <span>Get Started</span>
          </HoverBorderGradient>
        </div>
      </NavBody>
      <NavSeparator className="hidden lg:block" />

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <ModeToggle />
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="w-full"
            >
              Login
            </NavbarButton>
            <HoverBorderGradient
              containerClassName="rounded-full w-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-1.5 px-3 py-2 w-full text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <IconRocket className="h-4 w-4" />
              <span>Get Started</span>
            </HoverBorderGradient>
          </div>
        </MobileNavMenu>
      </MobileNav>
      <NavSeparator className="lg:hidden" />
    </Navbar>
  );
}
