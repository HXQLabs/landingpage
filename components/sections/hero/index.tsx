"use client";
import { Button } from "@/components/ui/buttons/buttons";
import ShimmerButton from "@/components/ui/buttons/shimmer-button";
import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import NewItemsLoading from "@/components/utils/new-items-loading";
import TextRotate from "@/components/fancy/text/text-rotate";
import { Safari } from "@/components/magicui/safari";

const index = () => {
  const words = ["professionals", "interviewers", "investors"];
  return (
    <div className="relative">
      <section className="h-auto min-h-screen overflow-hidden relative pb-20 dark:bg-black bg-white transition-colors duration-300 pt-20">
        <div className="absolute inset-0 -z-0 h-full w-full dark:bg-[radial-gradient(#1d1d1d_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute inset-0 top-0 left-0 h-full w-full items-center px-5 py-24 bg-gradient-to-t dark:from-black from-white from-0% to-transparent to-60%"></div>

        <div className="pointer-events-none absolute inset-0 flex w-screen justify-end [mask-image:radial-gradient(transparent_5%,white)] opacity-80 dark:opacity-60 transition-opacity duration-300">
          <svg
            width="1512"
            height="1714"
            viewBox="0 0 1512 1714"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute left-0 top-0 h-auto w-full lg:w-1/2"
          >
            <g clipPath="url(#clip0_143_13)">
              <g filter="url(#filter0_f_143_13)">
                <path
                  d="M1045.18 982.551C1129.83 903.957 204.996 477.237 -235.529 294L-339.645 584.211C59.2367 752.376 960.521 1061.15 1045.18 982.551Z"
                  fill="currentColor"
                  fillOpacity="0.15"
                  className="dark:text-white text-gray-800"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_143_13"
                x="-595.645"
                y="38"
                width="1902.26"
                height="1213.13"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood
                  floodOpacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="64"
                  result="effect1_foregroundBlur_143_13"
                ></feGaussianBlur>
              </filter>
              <clipPath id="clip0_143_13">
                <rect width="1512" height="1714" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <article className="grid 2xl:pt-12 xl:pt-10 lg:pt-8 md:pt-6 pt-4 pb-8 sm:pb-12 lg:pb-16 relative dark:text-white text-gray-900 z-[2] px-4 sm:px-6 lg:px-0 transition-colors duration-300">
          <NewItemsLoading />
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-semibold tracking-tight dark:text-white text-gray-900">
            <span className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl dark:text-gray-100 text-gray-800">Professional Networking</span>{" "}
            <LayoutGroup>
              <motion.span className="relative translate-x-0 flex gap-4 justify-center dark:text-white text-gray-900 flex-wrap mt-2" layout>
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  for{" "}
                </motion.span>
                <TextRotate
                  texts={words}
                  mainClassName="text-white dark:text-black px-3 sm:px-3 md:px-4 bg-black dark:bg-white overflow-hidden py-1 sm:py-1.5 md:py-2.5 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </motion.span>
            </LayoutGroup>
          </h1>
          <p className="mx-auto lg:w-[700px] md:w-[85%] w-[95%] text-center lg:text-lg md:text-base sm:text-sm text-sm mt-4 sm:mt-5 mb-6 sm:mb-8 dark:text-gray-300 text-gray-600 transition-colors duration-300">
            Connect with professionals, practice mock interviews, and pitch to VCs — all on one platform designed for career growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center items-center mb-8 sm:mb-12 lg:mb-16">
            <ShimmerButton
              borderRadius={"100px"}
              className={cn(
                "flex items-center gap-2 w-full sm:w-fit rounded-full text-white border px-4 sm:px-4 py-3 sm:py-2 transition-all duration-300",
              )}
              background={"#334cec"}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 sm:text-base lg:text-lg">
                Get Started for Free
              </span>
            </ShimmerButton>

            <Button className="rounded-full px-4 h-12 w-full sm:w-auto dark:bg-gray-800 dark:text-white dark:border-gray-700 bg-white text-gray-900 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              Star on GitHub
              <ChevronsRight className="dark:text-white text-gray-900" />
            </Button>
          </div>
          
          {/* Dashboard Mockup Image */}
          <figure className="relative max-w-6xl mx-auto p-3 sm:p-4 lg:p-6 backdrop-blur-lg dark:bg-white/5 bg-black/5 rounded-lg transition-colors duration-300 before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.03)_25%,rgba(0,0,0,0.03)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.03)_75%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_25%,rgba(255,255,255,0.03)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.03)_75%)] before:[background-size:8px_8px] before:rounded-lg before:pointer-events-none">
            <div className="relative z-10 rounded-lg overflow-hidden border dark:border-neutral-800 border-neutral-200 shadow-2xl dark:shadow-neutral-900/50 shadow-gray-500/20">
              <Safari 
                url="helixque.vercel.app" 
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                className="w-full h-auto"
              />
              {/* Overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t dark:from-black/20 from-white/20 to-transparent rounded-lg"></div>
            </div>
          </figure>
          {/* <p className="text-center py-2">65% off during pre-sale.</p> */}
        </article>
      </section>
    </div>
  );
};

export default index;
