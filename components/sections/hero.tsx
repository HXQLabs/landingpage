"use client";

// import Image from "next/image";
import { Button } from "@/components/ui/button";
import LogoCloud from "../general/logocloud";
import { AnnouncementBadge } from "../ui/announcement-badge";
// import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Safari } from "@/components/magicui/safari";
import { ThemeToggleButton1 } from "../utility/theme-toggle";

export interface Tab {
  title: string;
  icon: React.ReactNode;
  image: string;
}

export interface Hero195Props {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonUrl: string;
  secondaryButtonUrl?: string;
  tabs?: Tab[];
}

const Hero195 = ({
  title = "Manage and simulate agentic workflows",
  description = "We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually",
  primaryButtonText = "Start building",
  primaryButtonUrl = "#",
  secondaryButtonUrl = "#",
  secondaryButtonText = "View pricing",
}: Hero195Props) => {

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="container mx-auto max-w-7xl">
        {/* Main content container */}
        <div className="relative">
          {/* Hero content section */}
          <div className="relative flex flex-col items-center justify-center px-4 py-16 md:py-32">
                        <div className="flex justify-center mb-6">
            <AnnouncementBadge
            
            href="#"
            announcementType="🚀 New"
            title="HelixQue V1 has raised $10M"
          />
          
            </div>
            <h1 className="text-center text-4xl font-medium tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white mt-4">
              {title}
            </h1>
            <p className="text-center text-base font-normal tracking-tight text-gray-600 md:text-lg dark:text-gray-300 mx-auto mt-6 max-w-2xl">
              {description}
              
            </p>
            
             <ThemeToggleButton1 className="w-12 h-12"/>            
            <div className="mt-8 flex items-center gap-4">
              <Button 
                asChild 
                className="rounded-lg px-6 py-3 text-sm font-medium bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                <a href={primaryButtonUrl}>{primaryButtonText}</a>
              </Button>
              {secondaryButtonText && (
                <Button 
                  variant="outline" 
                  asChild
                  className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
                >
                  <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="relative">
          {/* Dashboard preview section */}
          <div className="relative p-8 md:p-12">
            {/* Outer div with slanting lines pattern - direct container for image */}
            <div className="relative rounded-lg p-6 overflow-hidden">
              {/* Light mode diagonal lines pattern */}
              <div 
                className="absolute inset-0 dark:hidden rounded-lg"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    rgba(0, 0, 0, 0.06) 0px,
                    rgba(0, 0, 0, 0.06) 1px,
                    transparent 1px,
                    transparent 8px
                  )`,
                  backgroundColor: 'rgba(156, 163, 175, 0.03)'
                }}
              ></div>
              {/* Dark mode diagonal lines pattern */}
              <div 
                className="absolute inset-0 hidden dark:block rounded-lg"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    rgba(255, 255, 255, 0.12) 0px,
                    rgba(255, 255, 255, 0.12) 1px,
                    transparent 1px,
                    transparent 8px
                  )`,
                  backgroundColor: '#3a3a3a'
                }}
              ></div>
              
              {/* Inner div containing the Safari component - no middle gray layer */}
              <div className="relative overflow-hidden rounded-lg">
                <Safari 
                  url="helixque.vercel.app" 
                  className="size-full"
                  imageSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png"
                />
                {/* Commented out HeroVideoDialog components
                <HeroVideoDialog
                  className="block dark:hidden [&_img]:shadow-none [&_img]:border-none"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  thumbnailSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png"
                  thumbnailAlt="Dashboard Insights - Light Mode"
                />
                <HeroVideoDialog
                  className="hidden dark:block [&_img]:shadow-none [&_img]:border-none"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  thumbnailSrc="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png"
                  thumbnailAlt="Dashboard Insights - Dark Mode"
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="relative">
          {/* Rating section */}
          {/* <div className="px-4 py-8 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <span className="font-medium text-black dark:text-white">G2</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <span>Innovative AI solution 2025 by</span>
              <span className="font-medium text-black dark:text-white">Gartner</span>
            </div>
          </div> */}
          
          <LogoCloud/>
        </div>
      </div>
    </div>
    </section>
  );
};

export { Hero195 };
