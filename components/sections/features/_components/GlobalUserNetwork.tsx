"use client";
import React from "react";
import Image from "next/image";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

// User components representing different nations
const UserIcons = {
  usa: () => (
    <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-full">
      <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">🇺🇸</span>
    </div>
  ),
  uk: () => (
    <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-500 rounded-full">
      <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">🇬🇧</span>
    </div>
  ),
  japan: () => (
    <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-600 rounded-full">
      <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">🇯🇵</span>
    </div>
  ),
  germany: () => (
    <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-500 rounded-full">
      <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">🇩🇪</span>
    </div>
  ),
  india: () => (
    <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-500 rounded-full">
      <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">🇮🇳</span>
    </div>
  ),
  brazil: () => (
    <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full">
      <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">🇧🇷</span>
    </div>
  ),
  canada: () => (
    <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-400 rounded-full">
      <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">🇨🇦</span>
    </div>
  ),
  australia: () => (
    <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-400 rounded-full">
      <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">🇦🇺</span>
    </div>
  ),
};

interface GlobalUserNetworkProps {
  timelineRef: React.RefObject<HTMLDivElement | null>;
  animationNum: number;
  customVariants?: Record<string, unknown>;
}

const GlobalUserNetwork: React.FC<GlobalUserNetworkProps> = ({
  timelineRef,
  animationNum,
  customVariants,
}) => {
  return (
    <>
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Center Logo */}
        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-white dark:bg-neutral-800 rounded-full border-2 border-gray-500 dark:border-gray-400 z-10 shadow-lg">
          <Image
            src="/logo.svg"
            alt="HelixQue"
            width={32}
            height={32}
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
            priority
          />
        </div>
        
        {/* Outer orbit */}
        <OrbitingCircles 
          iconSize={50} 
          radius={140} 
          duration={20}
          className="hidden sm:block"
        >
          <UserIcons.usa />
          <UserIcons.uk />
          <UserIcons.japan />
          <UserIcons.germany />
          <UserIcons.india />
        </OrbitingCircles>
        
        {/* Mobile outer orbit */}
        <OrbitingCircles 
          iconSize={35} 
          radius={100} 
          duration={20}
          className="block sm:hidden"
        >
          <UserIcons.usa />
          <UserIcons.uk />
          <UserIcons.japan />
          <UserIcons.germany />
          <UserIcons.india />
        </OrbitingCircles>
        
        {/* Inner orbit */}
        <OrbitingCircles 
          iconSize={45} 
          radius={100} 
          reverse 
          speed={1.5} 
          duration={15}
          className="hidden sm:block"
        >
          <UserIcons.brazil />
          <UserIcons.canada />
          <UserIcons.australia />
        </OrbitingCircles>
        
        {/* Mobile inner orbit */}
        <OrbitingCircles 
          iconSize={32} 
          radius={70} 
          reverse 
          speed={1.5} 
          duration={15}
          className="block sm:hidden"
        >
          <UserIcons.brazil />
          <UserIcons.canada />
          <UserIcons.australia />
        </OrbitingCircles>
      </div>

      <article className="absolute right-0 bottom-0 left-0 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-neutral-900 dark:via-neutral-900 dark:to-transparent p-2 sm:p-3 md:p-4 lg:p-6 pt-[60px] sm:pt-[80px] md:pt-[90px] lg:pt-[100px] z-10">
        <h3 className="px-1 pt-1 text-black dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight">
          Global User Network
        </h3>
        <p className="mt-1 px-1 pb-1 font-normal text-gray-600 dark:text-gray-400 text-xs sm:text-sm w-full">
          Connect with users from around the world. Our platform brings together diverse communities in a seamless experience.
        </p>
      </article>
    </>
  );
};

export default GlobalUserNetwork;