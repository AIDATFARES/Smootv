import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "Smootv - IPTV Reseller Program | High-Margin Xtream Codes Panel",
  description:
    "Start your profitable IPTV business with Smootv. Full reseller control panel, non-expiring credits, 99.9% anti-freeze servers & 24/7 dedicated VIP support.",
  alternates: {
    canonical: "/reseller",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}
