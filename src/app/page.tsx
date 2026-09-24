import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import CategoryStrip from "@/components/home/CategoryStrip";
import PricingSection from "@/components/home/PricingSection";

const WebPlayerSection = dynamic(() => import("@/components/home/WebPlayerSection"));
const FeaturesSection = dynamic(() => import("@/components/home/FeaturesSection"));
const SportsSection = dynamic(() => import("@/components/home/SportsSection"));
const DeviceSupport = dynamic(() => import("@/components/home/DeviceSupport"));
const HowItWorksSection = dynamic(() => import("@/components/home/HowItWorksSection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const LatestArticlesSection = dynamic(() => import("@/components/home/LatestArticlesSection"));
const SupportCtaSection = dynamic(() => import("@/components/home/SupportCtaSection"));
const FinalCtaSection = dynamic(() => import("@/components/home/FinalCtaSection"));

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <CategoryStrip />
      <WebPlayerSection />
      <PricingSection />
      <FeaturesSection />
      <SportsSection />
      <DeviceSupport />
      <HowItWorksSection />
      <FAQSection />
      <LatestArticlesSection />
      <SupportCtaSection />
      <FinalCtaSection />
    </main>
  );
}
