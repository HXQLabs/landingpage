"use client";

import {
  BarChart,
  Database,
  Layers,
  PieChart,
  SquareKanban,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HeroPill } from "@/components/ui/hero-pill";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogoCloud from "../general/logocloud";

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

const defaultTabs: Tab[] = [
  {
    title: "Insights",
    icon: <SquareKanban />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png",
  },
  {
    title: "Metrics",
    icon: <BarChart />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-2.png",
  },
  {
    title: "Trends",
    icon: <PieChart />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-3.png",
  },
  {
    title: "Sources",
    icon: <Database />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-users.png",
  },
  {
    title: "Models",
    icon: <Layers />,
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-developer.png",
  },
];

const Hero195 = ({
  title = "Manage and simulate agentic workflows",
  description = "We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually",
  primaryButtonText = "Start building",
  primaryButtonUrl = "#",
  secondaryButtonUrl = "#",
  secondaryButtonText = "View pricing",
  tabs = defaultTabs,
}: Hero195Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.title || "");

  return (
    <section className="relative w-full">
       {/* Horizontal divider */}

      <div className="container mx-auto max-w-7xl">
        {/* Main content container with vertical borders */}
        <div className="relative border-l border-r border-border">
          {/* Hero content section */}
          <div className="relative flex flex-col items-center justify-center px-4 py-16 md:py-32">
            <div className="flex justify-center mb-6">
              <HeroPill 
                href="#"
                label="For fast moving engineering teams."
                announcement=""
                isExternal={false}
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
                  className="rounded-lg px-6 py-3 text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
                </Button>
              )}
            </div>
          </div>
          
          
          {/* Tab selector section */}
          <div className="py-8">
            <Tabs defaultValue={tabs[0]?.title} onValueChange={setActiveTab}>
              <TabsList className="mx-auto flex h-auto w-fit flex-wrap justify-center gap-2">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.title}
                    value={tab.title}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 data-[state=active]:text-black dark:text-gray-400 dark:data-[state=active]:text-white"
                  >
                    <span className="w-4 h-4">{tab.icon}</span>
                    {tab.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
        </div>
      </div>
      
      {/* Horizontal divider */}
      <div className="bg-gray-200 dark:bg-neutral-700 h-[1px] w-full" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="relative border-l border-r border-gray-200 dark:border-neutral-700">
          {/* Dashboard preview section */}
          <div 
            className="relative bg-gray-50 dark:bg-zinc-800 p-8 md:p-12"
          >
            {/* Corner markers */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-black dark:bg-white transform -translate-x-px -translate-y-px"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-black dark:bg-white transform translate-x-px -translate-y-px"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-black dark:bg-white transform -translate-x-px translate-y-px"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-black dark:bg-white transform translate-x-px translate-y-px"></div>
            
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
              
              <Tabs defaultValue={tabs[0]?.title} onValueChange={setActiveTab}>
                <div className="relative group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500 ease-out">
                  {tabs.map((tab) => (
                    <TabsContent
                      key={tab.title}
                      value={tab.title}
                      className={cn(
                        "transition-all duration-500",
                        {
                          "opacity-100": activeTab === tab.title,
                          "opacity-0 absolute inset-0": activeTab !== tab.title,
                        },
                      )}
                    >
                      <div className="relative overflow-hidden rounded-lg border border-border bg-white dark:bg-black shadow-xl group-hover:shadow-2xl transition-shadow duration-500 ease-out">
                        <img
                          src={tab.image}
                          alt={tab.title}
                          className="w-full aspect-[16/10] object-cover"
                          draggable="false"
                        />
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom horizontal divider */}
      <div className="bg-gray-200 dark:bg-neutral-700 h-[1px] w-full" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="relative border-l border-r border-gray-200 dark:border-neutral-700">
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
