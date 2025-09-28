import Icons from "../global/icons";
import { ArrowUpRight } from "lucide-react";
import { Pill, PillIndicator } from "../ui/kibo-ui/pill";
import { Badge } from "../ui/badge";
import Link from "next/link";
import BuyMeCoffee from "../utils/buy-me-coffee-btn";


// Inline BadtzLogo from badtz-header
const BadtzLogo = () => (
  <div className="text-foreground flex items-end gap-2.5 [&_svg]:h-5">
    <img 
      src="/logo.svg" 
      alt="HelixQue Logo" 
      width={20} 
      height={20} 
      className="h-5 w-auto"
    />
    <div className="relative">
      <span className="font-heading text-lg leading-none font-semibold">HelixQue</span>
      <Badge 
        variant="secondary" 
        className="absolute -top-1 -right-1 translate-x-full text-[8px] px-0.5 py-0 h-auto"
      >
        Beta
      </Badge>
    </div>
  </div>
);



const StickyFooter = () => {
  return (
    <footer className="bg-background border-t border-border/40" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-12 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:gap-20">
          {/* Brand Section */}
          <div className="flex w-full flex-col items-start space-y-6 md:max-w-80">
            <Link href="#hero" className="flex items-center gap-2" aria-label="Navigate to homepage">
              <BadtzLogo />
            </Link>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Connect with professionals, practice mock interviews, and pitch to VCs on our platform designed for career growth.
              </p>
              
              {/* Status Indicator */}
              <Pill>
                <PillIndicator pulse variant="success" />
                All Systems Operational
              </Pill>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid w-full grid-cols-1 gap-8 md:w-auto lg:grid-cols-2">
            {/* Useful Links */}
            <nav aria-label="Useful Links">
              <div className="flex flex-col md:text-sm">
                <div>
                  <h3 className="text-foreground mb-6 font-medium">Useful Links</h3>
                </div>
                <ul className="text-muted-foreground space-y-3">
                  <li>
                    <Link 
                      href="https://github.com/HXQLabs/" 
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group" 
                      aria-label="Visit our GitHub profile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Icons.github className="h-4 w-4" />
                      <span className="text-sm font-medium">GitHub</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://discord.com/invite/XC4YsUBg2" 
                      className="flex items-center gap-2 text-muted-foreground hover:text-[#5865F2] transition-colors duration-200 group" 
                      aria-label="Join our Discord" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Icons.discord className="h-4 w-4" />
                      <span className="text-sm font-medium">Discord</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://hacktoberfest.com" 
                      className="flex items-center gap-2 text-muted-foreground hover:text-[#FF6B35] transition-colors duration-200 group" 
                      aria-label="Hacktoberfest" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Icons.hacktoberfest className="h-4 w-4 text-muted-foreground group-hover:text-[#FF6B35]" />
                      <span className="text-sm font-medium">Hacktoberfest</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Support */}
            <nav aria-label="Support">
              <div className="flex flex-col md:text-sm">
                <div>
                  <h3 className="text-foreground mb-6 font-medium">Support</h3>
                </div>
                <div className="space-y-3">
                  <BuyMeCoffee />
                </div>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} HXQLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="#privacy" className="hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-foreground transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#cookies" className="hover:text-foreground transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;

