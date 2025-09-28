import OpensourceSection from "@/components/sections/opensource";
import { CTANew } from "@/components/sections/cta";
import Hero from "@/components/sections/hero/Hero";
import FeaturesSection from "@/components/sections/features";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      {/* <FeaturesSection /> */}
      <OpensourceSection/>
      <CTANew />
    </div>
  );
}
