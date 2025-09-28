import Icons from "../global/icons";
import { ArrowUpRight } from "lucide-react";
import { Pill, PillIndicator } from "../ui/kibo-ui/pill";
import { Badge } from "../ui/badge";
import Link from "next/link";


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
    <footer className="border-border bg-background mt-4 w-full border-t" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-12 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col w-full md:flex-row md:justify-between md:items-start gap-8">
          {/* Left: Logo, heading, subtext, status */}
          <div className="flex flex-col items-start gap-2 md:max-w-64 w-full">
            <Link href="#hero" className="flex items-center gap-2" aria-label="Navigate to homepage">
              <BadtzLogo />
            </Link>
             <h3 className="mt-4 font-semibold">Join HelixQue Today!</h3>
            <p className="text-muted-foreground w-full text-balance md:text-sm">Connect with professionals, practice mock interviews, and pitch to VCs on our platform designed for career growth.</p>
          </div>
          {/* Right: Useful Links section with social links */}
          <div className="flex flex-col items-start gap-4 md:items-end md:justify-end w-full md:w-auto mt-8 md:mt-0">
            <h3 className="text-foreground mb-2 font-medium text-base md:text-right w-full md:w-auto">Useful Links</h3>
            <Link href="https://github.com/HXQLabs/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 group" aria-label="Visit our GitHub profile" role="listitem" tabIndex={0} target="_blank" rel="noopener noreferrer">
              <Icons.github className="h-5 w-5" />
              <span className="text-sm font-medium">GitHub</span>
              <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
            </Link>
            <Link href="https://discord.com/invite/XC4YsUBg2" className="flex items-center gap-2 text-muted-foreground hover:text-[#5865F2] transition-colors duration-300 group" aria-label="Join our Discord" role="listitem" tabIndex={0} target="_blank" rel="noopener noreferrer">
              <Icons.discord className="h-5 w-5" />
              <span className="text-sm font-medium">Discord</span>
              <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
            </Link>
            <Link href="https://hacktoberfest.com" className="flex items-center gap-2 text-muted-foreground hover:text-[#FF6B35] transition-colors duration-300 group" aria-label="Hacktoberfest" role="listitem" tabIndex={0} target="_blank" rel="noopener noreferrer">
              <Icons.hacktoberfest className="h-5 w-5" />
              <span className="text-sm font-medium">Hacktoberfest</span>
              <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
            </Link>
            
            {/* Buy Me a Coffee - Styled as social link */}
            {/* <Link href="https://buymeacoffee.com/uilayouts" className="flex items-center gap-2 text-muted-foreground hover:text-[#FFDD00] transition-colors duration-300 group" aria-label="Support us on Buy Me a Coffee" role="listitem" tabIndex={0} target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-.766-1.587a4.448 4.448 0 0 0-1.687-1.093 9.158 9.158 0 0 0-.858-.217c-.179-.033-.359-.061-.54-.082L15.739 3H8.28l-.492.77c-.18.021-.36.049-.54.082-.299.065-.589.14-.858.217a4.448 4.448 0 0 0-1.687 1.093c-.378.424-.647.989-.766 1.587L4.784 6.415c-.187.943-.104 1.617.056 2.535.134.774.348 1.497.635 2.183.287.686.648 1.33 1.084 1.909a8.861 8.861 0 0 0 1.393 1.493c.285.22.588.414.907.578.32.164.652.299.993.405.681.212 1.387.317 2.096.317s1.415-.105 2.096-.317c.341-.106.673-.241.993-.405.319-.164.622-.358.907-.578.506-.39.98-.847 1.393-1.493.436-.579.797-1.223 1.084-1.909.287-.686.501-1.409.635-2.183.16-.918.243-1.592.056-2.535zM8.5 12.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
              </svg>
              <span className="text-sm font-medium">Support Us</span>
              <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100" />
            </Link> */}
          </div>
        </div>
  {/* Footer bottom row: status and copyright in one line on desktop */}
  <div className="mt-8 w-full flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-center md:mt-4">
          {/* <span className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 text-xs font-medium px-3 py-2 border border-green-200 dark:border-green-800 rounded-lg hover:border-green-300 dark:hover:border-green-700">
            <PulsatingIndicator variant="success" size="sm" animate={true} duration={2000} />
            <span>All Systems Operational</span>
            
          </span> */}
          <Pill>
              <PillIndicator pulse variant="success" />
              All Systems Operational
            </Pill>
          <p className="text-muted-foreground text-xs text-center md:text-right">&copy; {new Date().getFullYear()} HXQLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;

