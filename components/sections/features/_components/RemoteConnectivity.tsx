"use client";
import React, { useRef, forwardRef } from "react";
import { User, Mic, Video, SkipForward, PhoneOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 border-border bg-white dark:bg-neutral-800 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

interface RemoteConnectivityProps {
  timelineRef: React.RefObject<HTMLDivElement | null>;
  animationNum: number;
  customVariants?: Record<string, unknown>;
}

const RemoteConnectivity: React.FC<RemoteConnectivityProps> = ({
  timelineRef,
  animationNum,
  customVariants,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null); // user
  const div2Ref = useRef<HTMLDivElement>(null); // audio
  const div3Ref = useRef<HTMLDivElement>(null); // video
  const div4Ref = useRef<HTMLDivElement>(null); // next
  const div5Ref = useRef<HTMLDivElement>(null); // leave
  const div6Ref = useRef<HTMLDivElement>(null); // peer

  return (
    <>
      {/* constrain overall width so it isn't huge on desktop */}
      <div className="mx-auto w-full max-w-[360px] xs:max-w-[400px] sm:max-w-[520px] md:max-w-[680px] lg:max-w-[800px] xl:max-w-[850px]">
        <article className="w-full bg-gradient-to-t font-helvetica from-white via-white to-transparent dark:from-neutral-900 dark:via-neutral-900 dark:to-transparent">
          <h3 className="px-3 xs:px-4 sm:px-5 md:px-6 pt-3 xs:pt-4 sm:pt-5 md:pt-6 text-black dark:text-white text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] xl:text-[1.75rem] font-medium leading-tight">
            Remote Connectivity
          </h3>
          <p className="mt-2 xs:mt-3 px-3 xs:px-4 sm:px-5 md:px-6 pb-3 xs:pb-4 sm:pb-5 md:pb-6 font-normal text-gray-700 dark:text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg w-full leading-relaxed">
            Streamlined relay between users and peers—audio, video, next,
            and leave—shown with crisp icons.
          </p>
        </article>

        {/* Card body */}
        <div className="relative mt-3 xs:mt-4 sm:mt-5 md:mt-6 w-full rounded-lg dark:bg-neutral-950/50 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 xs:py-5 sm:py-6 md:py-8 lg:py-10">
          {/* === DIAGRAM CANVAS (responsive) === */}
          <div
            ref={containerRef}
            className="
              relative z-0
              w-full
              h-[clamp(150px,35vw,200px)]
              xs:h-[clamp(170px,32vw,220px)]
              sm:h-[clamp(200px,28vw,250px)]
              md:h-[clamp(220px,22vw,280px)]
              lg:h-[clamp(250px,18vw,320px)]
              xl:h-[clamp(280px,15vw,360px)]
              overflow-visible
              isolate
            "
          >
            <div className="absolute inset-0 flex items-center justify-between px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
              {/* Left: user */}
              <div className="flex flex-col items-center justify-center">
                <Circle
                  className="
                    w-[clamp(2rem,5vw,3.5rem)]
                    h-[clamp(2rem,5vw,3.5rem)]
                    border-blue-500 dark:border-blue-400
                    bg-white dark:bg-neutral-800
                    text-blue-600 dark:text-blue-400
                    shadow-lg
                  "
                  ref={div1Ref}
                >
                  <User className="w-[clamp(10px,2vw,22px)] h-[clamp(10px,2vw,22px)]" />
                </Circle>
                <span className="mt-1.5 xs:mt-2 sm:mt-2.5 text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base text-neutral-700 dark:text-white/70 font-medium">
                  user
                </span>
              </div>

              {/* Center: device with stacked nodes */}
              <div className="relative flex items-center justify-center w-[clamp(5rem,20vw,12rem)] aspect-[9/16] min-w-0 mx-2 xs:mx-3 sm:mx-4 md:mx-5 lg:mx-6">
                {/* device frame */}
                <div className="absolute inset-0 rounded-[0.75rem] xs:rounded-[0.875rem] sm:rounded-[1rem] md:rounded-[1.125rem] border border-black/10 dark:border-white/15 bg-neutral-100 dark:bg-white/5 shadow-lg" />
                <div className="absolute inset-1 xs:inset-1.5 sm:inset-2 md:inset-2.5 rounded-[0.5rem] xs:rounded-[0.625rem] sm:rounded-[0.75rem] md:rounded-[0.875rem] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30" />

                {/* nodes (icons) */}
                <div className="relative z-10 flex w-full flex-col items-center justify-center gap-[clamp(4px,1.2vw,16px)] py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6">
                  <Circle
                    ref={div2Ref}
                    className="w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] bg-white dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <Mic className="w-[clamp(8px,1.6vw,18px)] h-[clamp(8px,1.6vw,18px)]" />
                  </Circle>
                  <Circle
                    ref={div3Ref}
                    className="w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] bg-white dark:bg-neutral-800 text-fuchsia-600 dark:text-fuchsia-400 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <Video className="w-[clamp(8px,1.6vw,18px)] h-[clamp(8px,1.6vw,18px)]" />
                  </Circle>
                  <Circle
                    ref={div4Ref}
                    className="w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] bg-white dark:bg-neutral-800 text-amber-600 dark:text-amber-400 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <SkipForward className="w-[clamp(8px,1.6vw,18px)] h-[clamp(8px,1.6vw,18px)]" />
                  </Circle>
                  <Circle
                    ref={div5Ref}
                    className="w-[clamp(1.5rem,3.5vw,2.75rem)] h-[clamp(1.5rem,3.5vw,2.75rem)] bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <PhoneOff className="w-[clamp(8px,1.6vw,18px)] h-[clamp(8px,1.6vw,18px)]" />
                  </Circle>
                </div>
              </div>

              {/* Right: peer */}
              <div className="flex flex-col items-center justify-center">
                <Circle
                  className="
                    w-[clamp(2rem,5vw,3.5rem)]
                    h-[clamp(2rem,5vw,3.5rem)]
                    border-green-500 dark:border-green-400
                    bg-white dark:bg-neutral-800
                    text-green-600 dark:text-green-400
                    shadow-lg
                  "
                  ref={div6Ref}
                >
                  <User className="w-[clamp(10px,2vw,22px)] h-[clamp(10px,2vw,22px)]" />
                </Circle>
                <span className="mt-1.5 xs:mt-2 sm:mt-2.5 text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base text-neutral-700 dark:text-white/70 font-medium">
                  peer
                </span>
              </div>
            </div>

            {/* Beams — nodes → user (left) */}
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div1Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div1Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div1Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div1Ref} />

            {/* Beams — nodes → peer (right) */}
            <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} />
            <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoteConnectivity;