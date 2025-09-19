"use client";
import React, { useRef } from "react";
import { 
  MessageSquare,
  Users,
  Presentation,
  Brain,
  Calendar,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { motion } from "motion/react";
import Pill from "@/components/ui/pill";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { ColoredSpotlightItem } from "@/components/ui/colored-spotlight";
import OpenSourceSection from "./open-source";

// Import only the main feature section components
import GlobalUserNetwork from "./_components/GlobalUserNetwork";
import UsageStats from "./_components/UsageStats";
import Memberships from "./_components/Memberships";
import RemoteConnectivity from "./_components/RemoteConnectivity";
import RealTimeChat from "./_components/RealTimeChat";





const Icons = {
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
  messenger: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <radialGradient
        id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
        cx="11.087"
        cy="7.022"
        r="47.612"
        gradientTransform="matrix(1 0 0 -1 0 50)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1292ff"></stop>
        <stop offset=".079" stopColor="#2982ff"></stop>
        <stop offset=".23" stopColor="#4e69ff"></stop>
        <stop offset=".351" stopColor="#6559ff"></stop>
        <stop offset=".428" stopColor="#6d53ff"></stop>
        <stop offset=".754" stopColor="#df47aa"></stop>
        <stop offset=".946" stopColor="#ff6257"></stop>
      </radialGradient>
      <path
        fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
      />
      <path
        d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
        opacity=".05"
      />
      <path
        d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504-0.082,0.71-0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
        opacity=".07"
      />
      <path
        fill="#ffffff"
        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
      />
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
};

const Feature1 = () => {
  const featuresRef = useRef<HTMLDivElement>(null);



  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
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
    <div className="w-full min-h-screen relative bg-white dark:bg-black">
      <section
        className="max-w-7xl mx-auto p-4 relative z-10"
        ref={featuresRef}
      >
        <article className="max-w-5xl mx-auto py-6 sm:py-8 md:py-10 text-center space-y-2 px-4 sm:px-6 md:px-8">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Pill variant="primary">Features</Pill>
          </div>

          <TimelineContent
            as="h1"
            animationNum={0}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black dark:text-white leading-tight"
          >
            Professional Networking <br />
          </TimelineContent>
          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Connect with industry professionals, practice mock interviews, and pitch to VCs—all in one platform designed to accelerate your career growth.
          </TimelineContent>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 px-2 sm:px-0">
          {/* Global User Network */}
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="col-span-1 md:col-span-1 lg:col-span-5"
          >
            <div className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[380px] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow duration-300">
              <GlobalUserNetwork 
                timelineRef={featuresRef}
                animationNum={0}
                customVariants={revealVariants}
              />
            </div>
          </TimelineContent>

          {/* Usage Stats */}
          <TimelineContent
            as="div"
            animationNum={1}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="col-span-1 md:col-span-1 lg:col-span-3"
          >
            <div className="relative flex flex-col justify-between overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-3 sm:p-4 min-h-[250px] sm:min-h-[280px] lg:min-h-[380px] hover:shadow-lg transition-shadow duration-300">
              <UsageStats 
                timelineRef={featuresRef}
                animationNum={1}
                customVariants={revealVariants}
              />
            </div>
          </TimelineContent>

          {/* Memberships */}
          <TimelineContent
            as="div"
            animationNum={2}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="col-span-1 md:col-span-2 lg:col-span-4"
          >
            <div className="border rounded-lg p-3 sm:p-4 md:p-5 group border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 min-h-[250px] sm:min-h-[280px] lg:min-h-[380px] hover:shadow-lg transition-shadow duration-300">
              <Memberships 
                timelineRef={featuresRef}
                animationNum={2}
                customVariants={revealVariants}
              />
            </div>
          </TimelineContent>

          {/* Remote Connectivity */}
          <TimelineContent
            as="div"
            animationNum={3}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="col-span-1 sm:col-span-2 lg:col-span-7"
          >
            <div className="relative border p-2 sm:p-3 md:p-4 rounded-xl overflow-hidden border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow duration-300">
              <RemoteConnectivity 
                timelineRef={featuresRef}
                animationNum={3}
                customVariants={revealVariants}
              />
            </div>
          </TimelineContent>

          {/* Real Time Chat */}
          <TimelineContent
            as="div"
            animationNum={4}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="col-span-1 md:col-span-2 lg:col-span-5"
          >
            <div className="relative border p-2 sm:p-3 md:p-4 rounded-xl overflow-hidden border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] hover:shadow-lg transition-shadow duration-300">
              <RealTimeChat 
                timelineRef={featuresRef}
                animationNum={4}
                customVariants={revealVariants}
              />
            </div>
          </TimelineContent>
        </div>

        {/* Everything You Need to Succeed Section */}
        <article className="w-full max-w-7xl mx-auto py-8 sm:py-12 md:py-16 text-center space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 md:mt-24">
          <div className="flex justify-center mb-6">
            <Pill variant="primary">Professional Success</Pill>
          </div>

          <TimelineContent
            as="h2"
            animationNum={5}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black dark:text-white leading-tight"
          >
            Accelerate Your Career Journey
          </TimelineContent>
          
          <TimelineContent
            as="p"
            animationNum={6}
            timelineRef={featuresRef}
            customVariants={revealVariants}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            HelixQue combines the power of random professional connections with structured career development—network authentically, interview confidently, and pitch successfully.
          </TimelineContent>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-12 sm:mt-16 max-w-none">
            {/* Mock Interviews */}
            <ColoredSpotlightItem 
              spotlightColor="rgba(59, 130, 246, 0.15)"
              enableScrollSpotlight={true}
              className="group relative p-6 sm:p-8 lg:p-6 xl:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-semibold text-black dark:text-white mb-3">
                Real-World Interview Practice
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-sm xl:text-base leading-relaxed flex-grow">
                Practice interviews with industry professionals and hiring managers. Get actionable feedback and build confidence for your next big opportunity.
              </p>
            </ColoredSpotlightItem>

            {/* Professional Networking */}
            <ColoredSpotlightItem 
              spotlightColor="rgba(34, 197, 94, 0.15)"
              enableScrollSpotlight={true}
              className="group relative p-6 sm:p-8 lg:p-6 xl:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3">
                Smart Professional Matching
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                Connect with verified professionals in your industry through our intelligent matching system. Build meaningful relationships that drive career growth.
              </p>
            </ColoredSpotlightItem>

            {/* VC Pitching */}
            <ColoredSpotlightItem 
              spotlightColor="rgba(147, 51, 234, 0.15)"
              enableScrollSpotlight={true}
              className="group relative p-6 sm:p-8 lg:p-6 xl:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Presentation className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3">
                Investor Pitch Practice
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                Perfect your startup pitch with real VCs and seasoned entrepreneurs. Receive insider feedback to refine your message before crucial investor meetings.
              </p>
            </ColoredSpotlightItem>

            {/* AI-Powered Feedback */}
            <ColoredSpotlightItem 
              spotlightColor="rgba(251, 146, 60, 0.15)"
              enableScrollSpotlight={true}
              className="group relative p-6 sm:p-8 lg:p-6 xl:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3">
                AI-Powered Feedback
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                Receive instant AI analysis of your communication style, body language, and content to improve your performance.
              </p>
            </ColoredSpotlightItem>

            {/* Scheduled Sessions */}
            <ColoredSpotlightItem 
              spotlightColor="rgba(99, 102, 241, 0.15)"
              enableScrollSpotlight={true}
              className="group relative p-6 sm:p-8 lg:p-6 xl:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3">
                Scheduled Sessions
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                Book sessions in advance or join spontaneous meetings. Flexible scheduling to fit your busy professional life.
              </p>
            </ColoredSpotlightItem>

            {/* Professional Verification */}
            <ColoredSpotlightItem 
              spotlightColor="rgba(16, 185, 129, 0.15)"
              enableScrollSpotlight={true}
              className="group relative p-6 sm:p-8 lg:p-6 xl:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white mb-3">
                Professional Verification
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                All users are verified professionals, ensuring high-quality interactions and meaningful connections.
              </p>
            </ColoredSpotlightItem>
          </div>

          {/* Call to Action */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-700  dark:from-neutral-900 dark:to-neutral-800">
            <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-4">
              Get Referred by Proving Yourself to Professionals
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Stand out in the professional world by demonstrating your skills and expertise. 
              Build meaningful connections that can lead to career opportunities and referrals.
            </p>
            <motion.div 
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors">
                Start Building Your Network
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </article>

        {/* Open Source Section */}
        <OpenSourceSection />

      </section>
    </div>
  );
};

export default Feature1;
