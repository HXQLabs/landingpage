"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Video, MessageCircle, Users } from "lucide-react";

interface MembershipsProps {
  timelineRef: React.RefObject<HTMLDivElement | null>;
  animationNum: number;
  customVariants?: Record<string, unknown>;
}

const Memberships: React.FC<MembershipsProps> = ({
  timelineRef,
  animationNum,
  customVariants,
}) => {
  const colorClasses = {
    green: "before:bg-green-500 shadow-green-500/20",
    orange: "before:bg-orange-500 shadow-orange-500/20",
    blue: "before:bg-blue-500 shadow-blue-500/20",
  };

  return (
    <>
      <motion.h1
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black dark:text-white leading-tight"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        Session Types
      </motion.h1>
      <motion.p
        className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        Connect with professionals through various formats
      </motion.p>
      <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
        {[
          {
            title: "Mock Interviews",
            desc: "Practice with industry professionals",
            color: "green",
            rotation: 0,
            icon: Video,
          },
          {
            title: "VC Pitch Sessions",
            desc: "Present to real investors & VCs",
            color: "orange",
            rotation: 3,
            icon: Users,
          },
          {
            title: "1-on-1 Mentoring",
            desc: "Personal career guidance & advice",
            color: "blue",
            rotation: -1,
            icon: MessageCircle,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`flex gap-1 sm:gap-2 md:gap-3 justify-between items-center bg-neutral-50 dark:bg-neutral-800 p-2 sm:p-3 md:p-4 rounded-xl border border-neutral-200 dark:border-neutral-600 shadow-lg pl-4 sm:pl-5 md:pl-7 relative before:content-[''] before:absolute before:left-2 sm:before:left-2.5 before:rounded-md before:top-1.5 before:w-1.5 before:h-[80%] ${
              colorClasses[item.color as keyof typeof colorClasses]
            } group-hover:rotate-0 transition-all`}
            style={{
              rotate: `${item.rotation}deg`,
              boxShadow: `0 10px 15px -3px rgb(${
                item.color === "green"
                  ? "34 197 94"
                  : item.color === "orange"
                  ? "249 115 22"
                  : "59 130 246"
              } / 0.1)`,
            }}
            initial={{ x: -30, opacity: 0, rotate: item.rotation + 10 }}
            animate={{ x: 0, opacity: 1, rotate: item.rotation }}
            transition={{
              delay: i * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ rotate: 0 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className={`p-1.5 sm:p-2 rounded-lg ${
                item.color === "green" ? "bg-green-100 dark:bg-green-900/30" :
                item.color === "orange" ? "bg-orange-100 dark:bg-orange-900/30" :
                "bg-blue-100 dark:bg-blue-900/30"
              }`}>
                <item.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  item.color === "green" ? "text-green-600 dark:text-green-400" :
                  item.color === "orange" ? "text-orange-600 dark:text-orange-400" :
                  "text-blue-600 dark:text-blue-400"
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-black dark:text-white text-sm sm:text-base md:text-lg truncate">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                  {item.desc}
                </p>
              </div>
            </div>
            <ArrowRight className="text-black dark:text-white w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Memberships;