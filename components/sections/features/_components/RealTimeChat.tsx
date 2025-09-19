"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, PencilLine } from "lucide-react";

interface RealTimeChatProps {
  timelineRef: React.RefObject<HTMLDivElement | null>;
  animationNum: number;
  customVariants?: Record<string, unknown>;
}

const RealTimeChat: React.FC<RealTimeChatProps> = ({
  timelineRef,
  animationNum,
  customVariants,
}) => {
  // Chat message variants
  const messageVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      {/* Header */}
      <article className="absolute right-0 top-0 left-0 w-full bg-gradient-to-b from-white via-white to-transparent dark:from-neutral-900 dark:via-neutral-900 dark:to-transparent p-2 sm:p-3 md:p-4 pb-16 sm:pb-20 md:pb-24 z-10">
        <h3 className="px-1 pt-1 text-black dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight">
          Real Time Chat
        </h3>
        <p className="mt-1 px-1 pb-1 font-normal text-gray-600 dark:text-gray-400 text-xs sm:text-sm w-full">
          Interactive chat experience with smooth animations and real-time
          messaging capabilities.
        </p>
      </article>

      {/* Chat Interface */}
      <div className="mt-16 sm:mt-20 md:mt-24 flex w-full max-w-full flex-col overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-lg mx-auto">
        {/* Messages Area */}
        <div className="flex-1 space-y-2 sm:space-y-3 p-2 sm:p-3 md:p-4 overflow-hidden max-h-[200px] sm:max-h-[240px]">
          {/* Agent message */}
          <motion.div
            className="mr-auto relative max-w-[85%] sm:max-w-[80%] rounded-lg bg-gray-100 dark:bg-neutral-700 p-2 sm:p-3 text-gray-800 dark:text-gray-200 text-[10px] sm:text-xs md:text-sm"
            variants={messageVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 3.2,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            Hey! I see that your last transaction was a dining purchase,
            which qualifies for 5x points, but only for Platinum Status
            Tier members. You are currently in the{" "}
            <span className="font-semibold text-blue-500 border-b border-dashed border-blue-500">
              Gold Status Tier
            </span>
            , which means you currently earn 3x points on dining
            transactions.
            <motion.button
              className="absolute -bottom-1.5 sm:-bottom-2 right-0 flex items-center gap-0.5 sm:gap-1 rounded-full bg-blue-500 px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 text-[8px] sm:text-[10px] md:text-xs text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 4.6, duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PencilLine className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3" />
              <span className="hidden sm:inline">Adjust tone</span>
              <span className="sm:hidden">Tone</span>
            </motion.button>
          </motion.div>

          {/* User message */}
          <motion.div
            className="ml-auto relative max-w-[85%] sm:max-w-[80%] rounded-lg bg-blue-500 p-2 sm:p-3 text-white text-[10px] sm:text-xs md:text-sm"
            variants={messageVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 3.8,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            That&apos;s great to know! How can I upgrade to the Platinum
            Status Tier to get those 5x points on dining?
          </motion.div>
        </div>

        {/* Chat Input Area */}
        <motion.div
          className="flex items-center gap-1 sm:gap-1.5 md:gap-2 border-t border-gray-200 dark:border-neutral-600 p-2 sm:p-3 md:p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.8, duration: 0.5 }}
        >
          <motion.input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-300 dark:border-neutral-600 bg-gray-100 dark:bg-neutral-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-sm focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-500"
            initial={{ width: "60%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 5.0, duration: 0.6 }}
          />
          <motion.button
            className="flex h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 5.2, duration: 0.4, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default RealTimeChat;