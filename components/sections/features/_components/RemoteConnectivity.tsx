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
          <h3 className="px-3 pt-2 text-black dark:text-white text-lg font-medium leading-tight">
            Remote Connectivity
          </h3>
          <p className="mt-1 px-3 pb-2 font-normal text-gray-700 dark:text-gray-400 text-xs w-full leading-relaxed">
            Streamlined relay between users and peers—audio, video, next, and leave—shown with crisp icons.
          </p>
        </article>

        {/* Card body */}
        <div className="relative mt-2 w-full rounded-lg dark:bg-neutral-950/50 px-4 py-4">
          {/* === DIAGRAM CANVAS (responsive) === */}
          <div
            ref={containerRef}
            className="
              relative z-0
              w-full
              h-[220px]
              overflow-visible
              isolate
            "
          >
            <div className="absolute inset-0 flex items-center justify-between px-6">
              {/* Left: user */}
              <div className="flex flex-col items-center justify-center">
                <Circle
                  className="
                    w-12 h-12
                    border-blue-500 dark:border-blue-400
                    bg-white dark:bg-neutral-800
                    text-blue-600 dark:text-blue-400
                    shadow-lg
                  "
                  ref={div1Ref}
                >
                  <User className="w-5 h-5" />
                </Circle>
                <span className="mt-2 text-xs text-neutral-700 dark:text-white/70 font-medium">
                  user
                </span>
              </div>

              {/* Center: device with stacked nodes */}
              <div className="relative flex items-center justify-center w-24 aspect-[9/16] min-w-0 mx-6">
                {/* device frame */}
                <div className="absolute inset-0 rounded-xl border border-black/10 dark:border-white/15 bg-neutral-100 dark:bg-white/5 shadow-lg" />
                <div className="absolute inset-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/30" />

                {/* nodes (icons) */}
                <div className="relative z-10 flex w-full flex-col items-center justify-center gap-3 py-4">
                  <Circle
                    ref={div2Ref}
                    className="w-8 h-8 bg-white dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <Mic className="w-4 h-4" />
                  </Circle>
                  <Circle
                    ref={div3Ref}
                    className="w-8 h-8 bg-white dark:bg-neutral-800 text-fuchsia-600 dark:text-fuchsia-400 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <Video className="w-4 h-4" />
                  </Circle>
                  <Circle
                    ref={div4Ref}
                    className="w-8 h-8 bg-white dark:bg-neutral-800 text-amber-600 dark:text-amber-400 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <SkipForward className="w-4 h-4" />
                  </Circle>
                  <Circle
                    ref={div5Ref}
                    className="w-8 h-8 bg-white dark:bg-neutral-800 text-rose-600 dark:text-rose-400 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <PhoneOff className="w-4 h-4" />
                  </Circle>
                </div>
              </div>

              {/* Right: peer */}
              <div className="flex flex-col items-center justify-center">
                <Circle
                  className="
                    w-12 h-12
                    border-green-500 dark:border-green-400
                    bg-white dark:bg-neutral-800
                    text-green-600 dark:text-green-400
                    shadow-lg
                  "
                  ref={div6Ref}
                >
                  <User className="w-5 h-5" />
                </Circle>
                <span className="mt-2 text-xs text-neutral-700 dark:text-white/70 font-medium">
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