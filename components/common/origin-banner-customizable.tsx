"use client";

import { useState } from "react";
import { ArrowUpRight, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface OriginBannerCustomizableProps {
  className?: string;
}

export default function OriginBannerCustomizable({
  className,
}: OriginBannerCustomizableProps) {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <div
      className={cn(
        "relative dark text-foreground px-4 py-2 sm:py-3",
        className,
      )}
    >
      <button
        type="button"
        className="group absolute right-0 top-1/2 -translate-y-1/2 size-8 p-0 hover:bg-transparent cursor-pointer"
        aria-label="Close banner"
        onClick={() => setIsVisible(false)}
      >
        <XIcon
          size={16}
          className="opacity-60 translate-x-3 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </button>
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center gap-2 md:gap-3 flex-nowrap">
          {/*
            Hacktoberfest banner (archived)
            <p className="inline-flex items-center gap-1 truncate whitespace-nowrap text-xs sm:text-sm leading-tight">
              <picture className="max-md:mt-0.5 flex-shrink-0">
                <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f383/512.webp" type="image/webp" />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f383/513.gif"
                  alt="🎃"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                  width="32"
                  height="32"
                />
              </picture>
              <span className="font-semibold">Helixque</span>
              <span> is participating in</span>
              <span className="font-semibold"> Hacktoberfest 2025</span>
            </p>
          */}

          <p className="inline-flex items-center gap-1 text-xs sm:text-sm leading-tight">
            <picture className="max-md:mt-0.5 flex-shrink-0">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a8/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a8/512.gif"
                className="w-6 h-6"
                alt="🚨"
                width="32"
                height="32"
              />
            </picture>
            {/* Mobile concise message */}
            <span className="font-semibold md:hidden">Helixque</span>
            <span className="md:hidden"> is backed by </span>
            <span className="font-semibold md:hidden">Vercel OSS</span>

            {/* Desktop full message */}
            <span className="font-semibold hidden md:inline">Helixque</span>
            <span className="hidden md:inline"> is proudly backed by </span>
            <span className="font-semibold hidden md:inline">
              Vercel OSS Program under Fall Cohort ’25 -{" "}
            </span>
            {/* Future announcement link — uncomment after official confirmation */}
            <Link
              href="/announcements"
              className="hidden md:inline-flex items-center leading-tight group hover:underline underline-offset-4 transition-all duration-200"
            >
              Read the announcement
              <ArrowUpRight
                className="size-4 sm:size-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out shrink-0 inline"
                strokeWidth={2}
              />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
