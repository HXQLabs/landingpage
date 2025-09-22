"use client";

import { AvatarCircles } from "@/components/ui/avatar-circles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import Pill from "@/components/ui/pill";
import { Button } from "@/components/ui/buttons/buttons";
import ShimmerButton from "@/components/ui/buttons/shimmer-button";
import { Github, Heart } from "lucide-react";
import { useRef } from "react";

// Sample avatar data for community members
const communityAvatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528?v=4",
    profileUrl: "https://github.com/vercel",
    name: "Vercel"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/7711062?v=4", 
    profileUrl: "https://github.com/microsoft",
    name: "Microsoft"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
    profileUrl: "https://github.com/facebook",
    name: "Facebook"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/22632046?v=4",
    profileUrl: "https://github.com/typescript",
    name: "TypeScript"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/18133?v=4",
    profileUrl: "https://github.com/git",
    name: "Git"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/54879112?v=4",
    profileUrl: "https://github.com/tailwindcss",
    name: "Tailwind CSS"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/139895814?v=4",
    profileUrl: "https://github.com/shadcn-ui",
    name: "shadcn/ui"
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/6412038?v=4",
    profileUrl: "https://github.com/react",
    name: "React"
  }
];

export default function OpensourceSection() {
  const opensourceRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div
      className="w-full min-h-screen relative bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden"
      ref={opensourceRef}
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-white to-purple-100/30 dark:from-pink-900/20 dark:via-black dark:to-purple-900/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="relative z-10">
        {/* Header section */}
        <article className="text-center mb-8 pt-32 w-full mx-auto space-y-3 relative z-50 px-4">
          {/* Pill at the top */}
          <div className="flex justify-center mb-6">
            <Pill variant="primary">
              <Heart className="w-4 h-4 mr-2 text-pink-400" />
              Open Source
            </Pill>
          </div>
          
          <h2 className="text-4xl font-medium text-gray-900 dark:text-white mb-3">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0,
              }}
            >
              Loved by the Community
            </VerticalCutReveal>
          </h2>

          <TimelineContent
            as="p"
            animationNum={0}
            timelineRef={opensourceRef}
            customVariants={revealVariants}
            className="text-gray-600 dark:text-gray-300 mb-8"
          >
            Join and be a part of the HXQLabs community!
          </TimelineContent>

          {/* Community avatars display */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={opensourceRef}
            customVariants={revealVariants}
            className="flex flex-col items-center space-y-6 mb-12"
          >
            {/* First row of avatars */}
            <div className="flex justify-center">
              <AvatarCircles
                numPeople={0}
                avatarUrls={communityAvatars.slice(0,5)}
                className="scale-125"
              />
            </div>
            
            {/* Second row with additional avatars */}
            <div className="flex justify-center">
              <AvatarCircles
                numPeople={50}
                avatarUrls={communityAvatars.slice(0, 4)}
                className="scale-110"
              />
            </div>
          </TimelineContent>

          <TimelineContent
            as="p"
            animationNum={2}
            timelineRef={opensourceRef}
            customVariants={revealVariants}
            className="text-gray-600 dark:text-gray-300 mb-8"
          >
            Become part of the community!
          </TimelineContent>

          {/* CTA Buttons */}
          <TimelineContent
            as="div"
            animationNum={3}
            timelineRef={opensourceRef}
            customVariants={revealVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ShimmerButton
              onClick={() => window.open("https://github.com/yourusername/yourrepo", "_blank")}
              className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
            >
              <Github className="w-6 h-6" />
              Star on GitHub
            </ShimmerButton>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://github.com/yourusername/yourrepo/fork", "_blank")}
              className="bg-transparent border-gray-300 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white hover:text-gray-900 dark:hover:text-black transition-all duration-200"
            >
              <Heart className="w-5 h-5" />
              Contribute
            </Button>
          </TimelineContent>
        </article>

      </div>
    </div>
  );
}