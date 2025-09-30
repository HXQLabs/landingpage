import { Badge } from "@/components/ui/badge";
import { CleanCountdown } from "@/components/utils/clean-countdown";

export default function HacktoberfestPage() {
  const isHacktoberfestActive = () => {
    const now = new Date();
    const start = new Date("2025-10-01");
    const end = new Date("2025-10-31");
    return now >= start && now <= end;
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Page Title Section */}
      <div className="pt-8 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4 mt-8">
              <span className="text-2xl">🎃</span>
              <Badge variant="secondary" className="px-3 py-1 text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400">
                Hacktoberfest 2025
              </Badge>
              <span className="text-2xl">🎃</span>
            </div>
            
            <h1 className="text-foreground text-4xl text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter text-balance sm:text-5xl mb-4">
              {isHacktoberfestActive() ? "Hacktoberfest is Here!" : "Hacktoberfest Coming Soon"}
            </h1>
            
            <p className="text-muted-foreground text-base tracking-tight mt-6 max-w-2xl mx-auto sm:text-lg">
              We understand your eagerness to contribute and we're thankful for that, 
              but you have to wait until the time comes.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Countdown Timer */}
        {!isHacktoberfestActive() && (
          <div className="mb-16 flex justify-center">
            <CleanCountdown />
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Meanwhile, explore our repositories and get familiar with the codebase.
          </p>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-medium underline underline-offset-4"
          >
            Browse Our Repositories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
