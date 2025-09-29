'use client';

import React, { useEffect, useState } from 'react';
import { CursorCard, CursorCardsContainer } from '@/components/ui/cursor-cards';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import HelixqueConnection from '@/components/ui/helixque-connection';
import { DottedMap } from '@/components/ui/dotted-map';

// ----- Dotted Map Component -----
const MapComponent = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg flex items-center justify-center">
      <div className="w-full h-full min-h-[200px]">
        <DottedMap
          markers={[
            {
              lat: 40.7128,
              lng: -74.006,
              size: 0.5,
            }, // New York
            {
              lat: 34.0522,
              lng: -118.2437,
              size: 0.5,
            }, // Los Angeles
            {
              lat: 51.5074,
              lng: -0.1278,
              size: 0.5,
            }, // London
            {
              lat: -33.8688,
              lng: 151.2093,
              size: 0.5,
            }, // Sydney
            {
              lat: 35.6762,
              lng: 139.6503,
              size: 0.5,
            }, // Tokyo
            {
              lat: 39.9042,
              lng: 116.4074,
              size: 0.5,
            }, // Beijing
            {
              lat: 1.3521,
              lng: 103.8198,
              size: 0.5,
            }, // Singapore
            {
              lat: 19.0760,
              lng: 72.8777,
              size: 0.5,
            }, // Mumbai
            {
              lat: 37.5665,
              lng: 126.9780,
              size: 0.5,
            }, // Seoul
            {
              lat: 13.7563,
              lng: 100.5018,
              size: 0.5,
            }, // Bangkok
          ]}
        />
      </div>
    </div>
  );
};

export const FeaturesSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
  <section className="container mx-auto flex w-full max-w-5xl flex-col items-center justify-start !px-4 py-16 text-center md:py-32">
    <div className="flex flex-col items-center text-center">
            <h2 className="leading-tighter font-gilroy max-w-2xl bg-gradient-to-b from-gray-900/90 via-gray-800 to-gray-700/80 dark:from-white/80 dark:via-white dark:to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-pretty text-transparent lg:leading-[1.1] xl:text-6xl/[4rem] xl:tracking-tighter">
        Grow Your Career
      </h2>
      <p className="text-muted-foreground text-base tracking-tight mt-4 max-w-2xl">
        Skip cold outreach. Set your skills and preferences, get matched in seconds, and have meaningful conversations mock interviews, mentoring, code reviews, or pitch practice.
      </p>
    </div>

    {/* Feature Cards Row 1 */}
    <div className="mt-10 flex w-full flex-col gap-4 md:mt-14">
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
        {/* Card 1: Copy. Paste. Ship. */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[45%] w-full rounded-xl p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
        <div className="h-full flex flex-col">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Professional Profile</h3>
              <p className="text-muted-foreground text-sm">
                Build a credible profile so matches understand your background and what you're looking for learning, mentoring, or collaboration.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center rounded-lg relative min-h-[240px] overflow-hidden">
              <div className="text-center space-y-4 p-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-neutral-700 p-2">
                  <img 
                    src="/logo.svg" 
                    alt="HelixQue" 
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-gray-900 dark:text-white text-sm font-medium">Professional Profile</div>
                  <div className="text-muted-foreground text-xs">Skills • Languages • Experience Level • Goals</div>
                </div>
                <div className="flex gap-2 justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 dark:bg-neutral-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </CursorCard>

        {/* Card 2: Map visual with more width */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Matching Algorithm</h3>
              <p className="text-muted-foreground text-sm">
                Filter by <strong>skills</strong>, <strong>industry</strong>, and <strong>language</strong>. Balance experience levels for better conversations. Randomized pairing to reduce bias.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg">
              <MapComponent />
            </div>
          </div>
        </CursorCard>
      </CursorCardsContainer>

      {/* Feature Cards Row 2 */}
      <CursorCardsContainer className="flex flex-col md:flex-row gap-6 md:h-[380px]">
        {/* Card 3: Helixque Anonymous Connection */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[55%] w-full rounded-xl p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Professional Networking Sessions</h3>
              <p className="text-muted-foreground text-sm">
                Mock interviews (behavioral & technical), pair programming, portfolio critique, and startup pitch practice with feedback etc.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden rounded-lg min-h-[200px]">
              <HelixqueConnection />
            </div>
          </div>
        </CursorCard>

        {/* Card 4: Interactive Chat Component */}
        <CursorCard borderColor={theme === "dark" ? "#262626" : "#e5e5e5"} className="h-full md:w-[45%] w-full rounded-xl p-4 md:p-7 shadow-md bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="mb-3 md:mb-4 text-left">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Real time chats</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Instant professional connections.</p>
            </div>
            <div className="flex-1 flex flex-col rounded-lg overflow-hidden relative">
              <div className="flex-1 p-3 md:p-4 space-y-4 md:space-y-6 overflow-y-auto min-h-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                    <span className="text-gray-900 dark:text-white text-[10px] md:text-xs font-medium">Peer</span>
                    <span className="text-muted-foreground text-[10px] md:text-xs">2:30 PM</span>
                  </div>
                                    <div className="rounded-lg bg-gray-200 dark:bg-neutral-800 w-fit max-w-[85%] border border-gray-300 dark:border-neutral-700 p-2 md:p-2.5 text-[10px] md:text-xs text-gray-900 dark:text-white text-left leading-relaxed">
                    Hey up for a quick mock interview focusing on React and Node.js?
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="mb-1 md:mb-2"
                >
                                    <div className="rounded-lg mb-1 ml-auto w-fit max-w-[85%] bg-blue-600 p-2 md:p-2.5 text-[10px] md:text-xs text-white text-left leading-relaxed">
                    Sure. Let's start with state management in React and API design on the backend.
                  </div>
                  <div className="flex items-center justify-end gap-1.5 md:gap-2">
                    <span className="text-gray-900 dark:text-white text-[10px] md:text-xs font-medium">You</span>
                    <span className="text-muted-foreground text-[10px] md:text-xs">2:31 PM</span>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="flex items-center gap-1.5 md:gap-2 p-3 md:p-3 pt-1.5 md:pt-2 shrink-0"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <motion.input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-neutral-400 px-2.5 md:px-3 py-1.5 md:py-2 text-[10px] md:text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 touch-manipulation"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.3, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </CursorCard>
      </CursorCardsContainer>
    </div>
  </section>
  );
};

