import { Banner } from '@/components/utils/banner';
import HelixQueHeader from './header';
import { ArrowUpRight } from 'lucide-react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      {/* Fixed Banner - always visible */}
      <div className="fixed top-0 left-0 right-0 z-40">
      <Banner
              variant="rainbow"
              className="h-11 md:text-base sm:text-sm text-xs"
              href="/announcements"
              target="_self"
        >
          <p className="group-hover:underline underline-offset-4 flex flex-wrap gap-1 items-center">
                <picture>
                  <source
                    srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
                    type="image/webp"
                  />
                  <img
                    src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif"
                    alt="🚀"
                    className="w-6 h-6"
                    width="32"
                    height="32"
                  />
                </picture>
                Ship faster with{" "}
                <span className="font-semibold">UI-Layouts Pro</span>
                <span className="md:inline-block hidden">
                  – 50+ Tailwind & React components for production-ready UIs
                </span>
              </p>
              <ArrowUpRight
                className="size-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ease-out shrink-0"
                strokeWidth={2}
              />
        </Banner>
      </div>

      {/* Fixed Header - positioned below banner */}
      <div className="fixed top-7 sm:top-9 left-0 right-0 z-50">
        <HelixQueHeader />
      </div>

      {/* Main content with proper spacing for banner + header */}
      <main className="relative z-10 min-h-screen pt-24 sm:pt-28">
        {children}
      </main>
    </>
  );
}
