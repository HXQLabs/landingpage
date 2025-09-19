"use client";
import { Star, Users, Puzzle, Server } from "lucide-react";
import GithubButton from "@/components/common/github-button";
import DiscordButton from "@/components/common/discord-button";
import { Spotlight, SpotLightItem } from "@/components/uilayouts/main-spotlight";
import { ColoredSpotlightItem } from "@/components/ui/colored-spotlight";
import Pill from "@/components/ui/pill";

export default function OpenSourceSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto mt-20 mb-16 px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-xl p-8 sm:p-12 lg:p-16 flex flex-col items-center">
        <div className="flex justify-center mb-6">
          <Pill variant="primary">Open Source</Pill>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight">Built in the Open</h2>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2 text-center">Built in the Open, For the Community</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg text-center max-w-2xl mb-6">
          Helix Que is proudly open source. We believe in transparency, community collaboration, and making professional networking accessible to everyone.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mb-8">
          <ColoredSpotlightItem 
            spotlightColor="rgba(59, 130, 246, 0.2)"
            enableScrollSpotlight={true}
            className="flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-neutral-200/50 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
          >
            <Server className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
            <h4 className="font-bold text-lg text-black dark:text-white mb-2">Self-hostable</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Run your own instance for your organization or community</p>
          </ColoredSpotlightItem>
          
          <ColoredSpotlightItem 
            spotlightColor="rgba(147, 51, 234, 0.2)"
            enableScrollSpotlight={true}
            className="flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-neutral-200/50 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
          >
            <Puzzle className="w-12 h-12 mb-4 text-purple-600 dark:text-purple-400" />
            <h4 className="font-bold text-lg text-black dark:text-white mb-2">Extensible</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Build plugins and extensions to customize your experience</p>
          </ColoredSpotlightItem>
          
          <ColoredSpotlightItem 
            spotlightColor="rgba(34, 197, 94, 0.2)"
            enableScrollSpotlight={true}
            className="flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-neutral-200/50 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
          >
            <Users className="w-12 h-12 mb-4 text-green-600 dark:text-green-400" />
            <h4 className="font-bold text-lg text-black dark:text-white mb-2">Community-driven</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Join our contributors and help shape the future</p>
          </ColoredSpotlightItem>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <GithubButton /> 
          <DiscordButton />
        </div>
      </div>
    </section>
  );
}
