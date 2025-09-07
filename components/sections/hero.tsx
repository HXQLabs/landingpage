"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import LogoCloud from "../general/logocloud";
import { AnnouncementBadge } from "../ui/announcement-badge";

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
    <section className="relative w-full">
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
          <div 
            className="relative bg-gray-50 dark:bg-zinc-800 p-8 md:p-12"
          >
            
            <div className="relative group">
              {/* Subtle diagonal lines pattern background div with rounded corners */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out overflow-hidden">
                {/* Light mode subtle diagonal lines - only +45 degrees */}
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
                {/* Dark mode subtle diagonal lines - only +45 degrees */}
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
              </div>
              
              <div className="relative group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500 ease-out">
                <div className="relative overflow-hidden rounded-lg border border-border bg-white dark:bg-black shadow-xl group-hover:shadow-2xl transition-shadow duration-500 ease-out">
                  <Image
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png"
                    alt="Dashboard Insights"
                    className="w-full aspect-[16/10] object-cover"
                    draggable={false}
                    width={800}
                    height={500}
                  />
                </div>
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
    </section>
  );
};

export { Hero195 };
