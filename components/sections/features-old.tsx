"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour, SkeletonFive } from "./_skeletons";


export function Features() {
  return (
    <section>
      {/* Top divider */}
      <div className="bg-gray-200 dark:bg-neutral-700 h-[1px] w-full" />
      
      <div className="max-w-7xl mx-auto border-l border-r border-gray-200 dark:border-neutral-700 py-16">
      <div className="mx-auto max-w-3xl text-center space-y-4 sm:space-y-6">
        <p className="text-sm text-muted-foreground">WHY WE ARE UNIQUE</p>
        <h2 className="text-3xl font-medium md:text-5xl">
          Bringing the best to you by the best in the industry
        </h2>
        <p className="text-muted-foreground md:max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          necessitatibus, culpa at vitae molestias tenetur explicabo.
          Voluptatum amet architecto suscipit pariatur eligendi repellendus
          mollitia dolore unde sint?
        </p>
      </div>
      <BentoGrid className="mt-12 max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
      </div>
      
      {/* Bottom divider */}
      <div className="bg-gray-200 dark:bg-neutral-700 h-[1px] w-full" />
    </section>
  );
}

const items = [
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automated Proofreading",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sentiment Analysis",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
