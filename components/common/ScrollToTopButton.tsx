"use client";

import React, { RefObject } from "react";
import { FaArrowUp } from "react-icons/fa";

interface Props {
  scrollContainerRef?: RefObject<HTMLElement>;
  className?: string;
}

const ScrollToTopButton: React.FC<Props> = ({ scrollContainerRef, className }) => {
  const handleClick = () => {
    const container = scrollContainerRef?.current;
    if (container && typeof container.scrollTo === "function") {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      aria-label="Scroll to top"
      title="Scroll to top"
      onClick={handleClick}
      className={
        "fixed right-4 bottom-6 md:right-6 md:bottom-8 z-50 p-3 md:p-4 rounded-full shadow-lg " +
        "border border-transparent hover:scale-105 transform transition-transform active:scale-95 " +
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " +
        "bg-white/90 backdrop-blur dark:bg-gray-800/85 " +
        (className ?? "")
      }
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <FaArrowUp className="w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
};

export default ScrollToTopButton;
