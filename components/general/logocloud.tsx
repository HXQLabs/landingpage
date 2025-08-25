"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function LogoCloud(){
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    return (
        <section className="py-16 bg-white dark:bg-background">
            {/* Header */}
            <div className="px-4 py-8 text-center">
                <h2 className="font-mono text-sm tracking-tight text-neutral-500 uppercase dark:text-gray-300">
                    Trusted by Fast Growing Startups
                </h2>
            </div>
            
            {/* Horizontal divider */}
            <div className="h-px bg-border"></div>
            
            {/* Logo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4">
                {/* Logo 1 - Nvidia */}
                <div 
                    className="group relative overflow-hidden border-r border-b border-border"
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-5 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Logo 2 - Column */}
                <div 
                    className="group relative overflow-hidden border-r border-b border-border md:border-r"
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-4 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Logo 3 - GitHub */}
                <div 
                    className="group relative overflow-hidden border-r border-b border-border"
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-4 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 2 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Logo 4 - Nike */}
                <div 
                    className="group relative overflow-hidden border-b border-border"
                    onMouseEnter={() => setHoveredIndex(3)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-5 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 3 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Logo 5 - Laravel */}
                <div 
                    className="group relative overflow-hidden border-r border-b border-border"
                    onMouseEnter={() => setHoveredIndex(4)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-4 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel Logo" height="16" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 4 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Logo 6 - Lilly */}
                <div 
                    className="group relative overflow-hidden border-r border-b border-border md:border-r"
                    onMouseEnter={() => setHoveredIndex(5)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-7 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/lilly.svg" alt="Lilly Logo" height="28" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 5 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Logo 7 - Lemon Squeezy */}
                <div 
                    className="group relative overflow-hidden border-r border-b border-border"
                    onMouseEnter={() => setHoveredIndex(6)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-5 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height="20" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 6 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Logo 8 - OpenAI */}
                <div 
                    className="group relative overflow-hidden border-b border-border"
                    onMouseEnter={() => setHoveredIndex(7)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-6 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 7 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Logo 9 - Tailwind CSS */}
                <div 
                    className="group relative overflow-hidden border-r border-border"
                    onMouseEnter={() => setHoveredIndex(8)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-4 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height="16" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 8 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Logo 10 - Vercel */}
                <div 
                    className="group relative overflow-hidden border-r border-border md:border-r"
                    onMouseEnter={() => setHoveredIndex(9)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-5 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 9 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Logo 11 - Zapier */}
                <div 
                    className="group relative overflow-hidden border-r border-border"
                    onMouseEnter={() => setHoveredIndex(10)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        <img className="h-5 w-fit dark:invert object-contain transition-all duration-500" src="https://html.tailus.io/blocks/customers/zapier.svg" alt="Zapier Logo" height="20" width="auto" />
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 10 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                
                {/* Empty slot for symmetry */}
                <div 
                    className="group relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(11)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale relative z-10">
                        {/* Empty slot */}
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === 11 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0"
                            >
                                <CanvasRevealEffect
                                    animationSpeed={5}
                                    containerClassName="bg-transparent"
                                    colors={[
                                        [59, 130, 246],
                                        [139, 92, 246],
                                    ]}
                                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                                    dotSize={2}
                                    showGradient={false}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}