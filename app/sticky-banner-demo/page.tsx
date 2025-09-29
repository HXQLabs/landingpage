import { StickyBanner } from "@/components/ui/sticky-banner";

export default function StickyBannerDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="mx-auto w-full max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Sticky Banner Demo</h1>
          <p className="text-muted-foreground">
            This page demonstrates the sticky banner functionality. The banner at the top will hide when you scroll down 
            and reappear when you scroll back up. The content below automatically takes the position of the removed sticky banner.
          </p>
        </div>
        
        {/* Demo Content */}
        <DummyContent />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="relative mx-auto flex w-full flex-col gap-10">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Section 1</h2>
        <div className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
        <p className="text-muted-foreground">
          This is some dummy content to demonstrate scrolling behavior. Notice how the content flows naturally 
          when the sticky banner disappears and reappears.
        </p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Section 2</h2>
        <div className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
        <p className="text-muted-foreground">
          Continue scrolling to see how the banner behavior works. The banner will hide after scrolling down 
          40 pixels and show again when scrolling back up.
        </p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Section 3</h2>
        <div className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
        <p className="text-muted-foreground">
          The sticky banner component uses Framer Motion for smooth animations and automatically adjusts 
          the layout so content flows seamlessly.
        </p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Section 4</h2>
        <div className="h-96 w-full animate-pulse rounded-lg bg-neutral-100 dark:bg-neutral-800" />
        <p className="text-muted-foreground">
          You can also manually close the banner using the X button in the top-right corner of the banner.
        </p>
      </div>
    </div>
  );
};
