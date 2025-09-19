"use client";
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import React, { useRef, useState, useEffect } from 'react';

interface ColoredSpotlightItemProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  hoverScale?: boolean;
  enableScrollSpotlight?: boolean;
}

export function ColoredSpotlightItem({
  children,
  className,
  spotlightColor = "rgba(255, 255, 255, 0.1)",
  hoverScale = true,
  enableScrollSpotlight = false,
}: ColoredSpotlightItemProps) {
  const boxWrapper = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  const [scrollSpotlight, setScrollSpotlight] = useState({ x: 0, y: 0, intensity: 0 });
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    const x = clientX - left;
    const y = clientY - top;
    
    setOverlayColor({ x, y });
  };

  useEffect(() => {
    if (!enableScrollSpotlight || !boxWrapper.current) return;

    const element = boxWrapper.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element || !isInView) return;

      const rect = element.getBoundingClientRect();
      const elementCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };

      const viewportCenter = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      };

      // Calculate distance from viewport center
      const distance = Math.sqrt(
        Math.pow(elementCenter.x - viewportCenter.x, 2) + 
        Math.pow(elementCenter.y - viewportCenter.y, 2)
      );

      // Calculate max possible distance for normalization
      const maxDistance = Math.sqrt(
        Math.pow(window.innerWidth / 2, 2) + 
        Math.pow(window.innerHeight / 2, 2)
      );

      // Calculate intensity (closer to center = higher intensity)
      const intensity = Math.max(0, 1 - (distance / maxDistance));
      
      // Calculate spotlight position relative to the card
      const localX = rect.width / 2;
      const localY = rect.height / 2;

      setScrollSpotlight({
        x: localX,
        y: localY,
        intensity: intensity > 0.3 ? intensity : 0 // Only show when reasonably close to center
      });
    };

    if (isInView && isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial calculation
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enableScrollSpotlight, isInView, isMobile]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={boxWrapper}
      className={cn(
        'relative rounded-2xl overflow-hidden transition-all duration-300 h-full w-full',
        hoverScale && 'hover:scale-[1.02]',
        className
      )}
    >
      {/* Hover Spotlight Effect - covers whole card */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500",
          isHovered && !isMobile ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(
            400px circle at ${overlayColor.x}px ${overlayColor.y}px,
            ${spotlightColor},
            transparent 70%
          )`,
        }}
      />

      {/* Scroll Spotlight Effect - for mobile */}
      {enableScrollSpotlight && isMobile && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: scrollSpotlight.intensity,
            background: `radial-gradient(
              300px circle at ${scrollSpotlight.x}px ${scrollSpotlight.y}px,
              ${spotlightColor},
              transparent 60%
            )`,
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}