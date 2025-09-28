"use client";
import React from "react";
import { Safari } from "@/components/magicui/safari";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/kibo-ui/announcement";
import { ArrowUpRightIcon } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import TextRotate from "@/components/fancy/text/text-rotate";
import Link from "next/link";

export const HeroSection = () => {
  const words = ["professionals", "interviewers", "investors"];
  return (
    <section
      aria-label="Hero banner"
      className="bg-background relative z-1 container mx-auto w-full overflow-hidden px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl py-16 sm:py-28">
        <div className="flex justify-center pb-8">
          <Announcement>
            <AnnouncementTag>Now Live</AnnouncementTag>
            <AnnouncementTitle>
              Professional Networking Platform 
              <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
            </AnnouncementTitle>
          </Announcement>

        </div>
        <div className="relative z-1 mx-auto max-w-3xl text-center">
          <h1 className="text-foreground mt-6 bg-gradient-to-tr from-neutral-300 to-white bg-clip-text text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter text-balance sm:text-6xl sm:text-[64px] dark:text-transparent">
            Professional Networking 
            <br/>
          
            <LayoutGroup>
              <motion.span className="relative translate-x-0 flex gap-2 justify-center flex-wrap items-center" layout>
                <motion.span
                  className="text-white"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}

                >
                  for
                </motion.span>
                <TextRotate
                  texts={words}
                  mainClassName="text-white dark:text-black px-3 bg-black dark:bg-white overflow-hidden py-1.5 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </motion.span>
            </LayoutGroup>
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 leading-7 font-normal text-balance sm:w-[660px] sm:text-[18px] md:mt-8">
            Connect with professionals, practice mock interviews, and pitch to VCs — all on one platform designed for career growth.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              aria-label="Get started with Helixque"
              className="from-primary/90 to-primary durration-300 text-primary-foreground flex h-10 items-center rounded-3xl bg-linear-to-t px-6 text-sm font-medium shadow-[inset_0_1px_0_0_#FFFFFF20] transition-colors"
            >
              Get Started for Free
            </Link>
            <Link
              href="https://github.com/orgs/HXQLabs/repositories"
              className="text-foreground group/hero flex items-center gap-1 text-sm leading-none font-medium"
              aria-label="Learn more about professional networking"
            >
              Star on GitHub{' '}
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 transition-transform duration-300 group-hover/hero:translate-x-1.5"
                  role="img"
                  aria-label="Arrow pointing right"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div
          className="after:border-primary/20 after:bg-secondary pointer-events-none absolute top-[340px] h-[400px] w-full max-w-5xl overflow-hidden mask-[radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-y-0 before:-right-[200%] before:-left-[200%] before:h-[200%] before:bg-[radial-gradient(circle_at_bottom_center,var(--primary),transparent_90%)] before:opacity-25 after:absolute after:top-1/5 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t sm:top-[300px] sm:after:top-1/2"
          aria-hidden="true"
        >
          {/* Decorative background/particles can be added here if needed */}
        </div>
        <figure className="relative max-w-6xl mx-auto p-3 sm:p-4 lg:p-6 backdrop-blur-lg dark:bg-white/5 bg-black/5 rounded-lg transition-colors duration-300 before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.03)_25%,rgba(0,0,0,0.03)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.03)_75%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_25%,rgba(255,255,255,0.03)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.03)_75%)] before:[background-size:8px_8px] before:rounded-lg before:pointer-events-none mt-16 w-full border-border border shadow-xs md:mt-28">
          <div className="relative z-10 rounded-lg overflow-hidden border dark:border-neutral-800 border-neutral-200 shadow-2xl dark:shadow-neutral-900/50 shadow-gray-500/20">
            {/* Safari mockup with image */}
            <Safari
              url="helixque.vercel.app"
              imageSrc="https://cdn.badtz-ui.com/images/mail-light.png"
              className="w-full h-auto relative rounded-lg"
            />
            {/* Overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t dark:from-black/20 from-white/20 to-transparent rounded-lg"></div>
          </div>
        </figure>
      </div>
    </section>
  );
};

