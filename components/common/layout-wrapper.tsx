'use client';

import { useEffect, useState } from 'react';
import { Banner } from '@/components/utils/banner';
import { BannerCountdown } from '@/components/utils/banner-countdown';
import HelixQueHeader from '@/components/common/badtz-header';
import { ArrowUpRight } from 'lucide-react';

export function LayoutWrapper() {
  const [isBannerClosed, setIsBannerClosed] = useState(false);
  const bannerId = 'helixque-networking-banner';
  const bannerKey = `banner-${bannerId}`;

  useEffect(() => {
    // Check if banner was previously closed in this session
    const bannerClosed = sessionStorage.getItem(bannerKey) === 'true';
    setIsBannerClosed(bannerClosed);

    // Listen for custom event when banner is closed in the same tab
    const handleBannerClose = () => {
      setIsBannerClosed(true);
    };

    window.addEventListener('bannerClosed', handleBannerClose);

    return () => {
      window.removeEventListener('bannerClosed', handleBannerClose);
    };
  }, [bannerKey]);

  return (
    <>
      {/* Fixed Banner */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Banner
          id={bannerId}
          variant="rainbow"
          className="h-9 sm:h-11 text-xs sm:text-sm md:text-base"
          href="/announcements"
          target="_self"
        >
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-2 sm:px-4 gap-2">
            {/* Left side - Always visible dynamic content */}
            <div className="flex items-center gap-1 group-hover:underline underline-offset-4 min-w-0 flex-1 overflow-hidden">
              <picture className="shrink-0">
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
                  type="image/webp"
                />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif"
                  alt="🚀"
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  width="20"
                  height="20"
                />
              </picture>
              
              {/* Single version - always visible with dynamic sizing */}
              <span className=" flex items-center gap-1 whitespace-nowrap overflow-hidden min-w-0" style={{
                fontSize: 'clamp(0.6rem, 2.8vw, 0.875rem)',
                lineHeight: '1.2'
              }}>
                <span className="font-semibold shrink-0">HelixQue</span>
                <span className="shrink-0">–</span>
                <span className="truncate min-w-0">Professional networking platform</span>
              </span>
              
              <ArrowUpRight
                className="shrink-0 ml-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out"
                style={{
                  width: 'clamp(0.5rem, 2vw, 1rem)',
                  height: 'clamp(0.5rem, 2vw, 1rem)'
                }}
                strokeWidth={2.5}
              />
            </div>
            
            {/* Right side - Responsive countdown always visible */}
            <div className="flex items-center shrink-0">
              <div style={{ transform: 'scale(clamp(0.6, 1.2vw + 0.4, 1))' }} className="origin-right">
                <BannerCountdown />
              </div>
            </div>
          </div>
        </Banner>
      </div>

      {/* Fixed Header - dynamically positioned based on banner state */}
      <div 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isBannerClosed ? 'top-0' : 'top-9 sm:top-11'
        }`}
      >
        <HelixQueHeader />
      </div>
    </>
  );
}

export function MainContentWrapper({ children }: { children: React.ReactNode }) {
  const [isBannerClosed, setIsBannerClosed] = useState(false);
  const bannerId = 'helixque-networking-banner';
  const bannerKey = `banner-${bannerId}`;

  useEffect(() => {
    // Check if banner was previously closed in this session
    const bannerClosed = sessionStorage.getItem(bannerKey) === 'true';
    setIsBannerClosed(bannerClosed);

    // Listen for custom event when banner is closed in the same tab
    const handleBannerClose = () => {
      setIsBannerClosed(true);
    };

    window.addEventListener('bannerClosed', handleBannerClose);

    return () => {
      window.removeEventListener('bannerClosed', handleBannerClose);
    };
  }, [bannerKey]);

  return (
    <main 
      className="relative z-10 min-h-screen transition-all duration-300"
      style={{ 
        paddingTop: isBannerClosed ? '4rem' : '6.2rem', // Mobile: 2.25rem (banner) + 4rem (header) = 6.25rem, Desktop: 2.75rem + 4rem = 6.75rem
        minHeight: '100vh'
      }}
    >
      {children}
    </main>
  );
}
