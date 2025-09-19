"use client"
import StickyFooter from "@/components/common/footer";
import { Banner } from "@/components/utils/banner";
import { ArrowUpRight } from "lucide-react";
import HeroSection from "@/components/sections/hero";
import PricingSection6 from "@/components/sections/pricing";
import Feature1 from "@/components/sections/features";
import BenefitsSection from "@/components/sections/benefits";
import HomeHeader from "@/components/common/header2";
import { CTANew } from "@/components/sections/cta";
// import { AnimatedBeamMultipleOutputDemo } from "@/components/common/animated-beam";

export default function Home() {
  return (
    <>
      <Banner
            variant="rainbow"
            className="h-11 md:text-base sm:text-sm text-xs z-20 relative"
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
      
      <HomeHeader />
      
      {/* Main content section with relative positioning and higher z-index */}
      <main className="relative z-10 min-h-screen flex flex-col">
          <HeroSection/>
          <Feature1/>
          <BenefitsSection/>
          <PricingSection6/>
          <CTANew/>
          {/* <AnimatedBeamMultipleOutputDemo/> */}

      </main>
      
      <StickyFooter/>
    </>
  );
}
