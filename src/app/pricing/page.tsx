import type { Metadata } from "next";
import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "Smootv - Flexible IPTV Pricing Plans | Starting at $4.2/Month",
  description: "Choose your Smootv subscription plan. Access 50,000+ live 4K channels, 200,000+ VODs, zero contracts & multi-device options. Instant activation within 3 minutes!",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Smootv - Flexible IPTV Pricing Plans | Starting at $4.2/Month",
    description: "Choose your Smootv subscription plan. Access 50,000+ live 4K channels, 200,000+ VODs, zero contracts & multi-device options. Instant activation within 3 minutes!",
    url: "https://www.smootv.top/pricing",
    siteName: "Smootv",
    locale: "en_US",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}
