import Features from "@/components/sections/features";
import IntegrationsSection from "@/components/sections/integrations";
import { Footer2 } from "@/components/sections/footer";
import { Hero195 } from "@/components/sections/hero";
import TestimonialsSection from "@/components/sections/testimonials";
import PricingSection from "@/components/sections/pricing";
import Benefits from "@/components/sections/benefits";
import PricingNewSection from "@/components/sections/pricing-new";
import DeploymentFeatures from "@/components/sections/deployment-features";
// import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
    <Hero195
      title="Welcome to My Dashboard"
      description="Discover insights, metrics, trends and more with beautiful UI blocks."
      primaryButtonText="Get Started"
      primaryButtonUrl="/start"
      secondaryButtonText="Learn More"
      secondaryButtonUrl="/about"
    />

    
  <Features/>
  <IntegrationsSection />
  <PricingSection />
  <TestimonialsSection />
  <Benefits/>
  <PricingNewSection/>
  
  {/* <FaqSection /> */}
  {/* <CTANew/> */}
  <DeploymentFeatures/>
  {/* <Contact/> */}
  <Footer2/>

    </>
  );
}
