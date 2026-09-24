import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

export default function ComparisonSection() {
  const rows = [
    { feature: "Monthly Cost", smootv: "From $4.2/mo", cable: "$80-$200/mo", other: "$10-$30/mo (unreliable)" },
    { feature: "Live Channels", smootv: "+50,000 Channels", cable: "200-500", other: "5,000-15,000" },
    { feature: "4K Streaming", smootv: "✓ Native 4K UHD", cable: "Limited 1080p", other: "Rarely stable" },
    { feature: "VOD Library", smootv: "+200,000 Films & Series", cable: "Add-on paywall", other: "Varies wildly" },
    { feature: "Server Uptime", smootv: "99.9% Guaranteed", cable: "99%", other: "60-85%" },
    { feature: "Buffering", smootv: "Zero Anti-Freeze", cable: "Rare", other: "Common at peak" },
    { feature: "Setup Time", smootv: "Under 3 minutes", cable: "Technician appointment", other: "Varies" },
    { feature: "Contract Commitments", smootv: "Zero Contracts", cable: "12-24 months lock-in", other: "Sometimes" },
    { feature: "Multi-Screen Support", smootv: "✓ Included", cable: "Expensive add-on", other: "Extra charge" },
    { feature: "Money-Back Guarantee", smootv: "✓ 7 Days Risk-Free", cable: "No refunds", other: "Rarely" },
  ];

  return (
    <section className="relative z-10 border-t border-amber-500/10 py-24 bg-[#07080C]/80 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/25 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <span>SMOOTV VS TRADITIONAL CABLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
            Why Smootv is the <br/>
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Ultimate Cable Alternative
            </span>
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Discover why thousands of households cut the cord and switch to Smootv. Premium IPTV with an expansive <Link href="/channels" className="font-semibold text-amber-400 hover:text-amber-300 hover:underline transition-colors">channel lineup</Link>, stunning 4K streaming quality, and anti-freeze reliability at an unbeatable price.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="bg-[#0B0D14] rounded-3xl border border-amber-500/20 p-8 pb-10 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            
            {/* Vertical Highlight for Smootv Column */}
            <div className="absolute top-0 bottom-0 left-[25%] w-[25%] bg-amber-500/[0.03] border-x border-amber-500/25 z-0" />

            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-2 relative z-10">
              <div className="text-left font-black text-[#CBD5E1] uppercase tracking-widest text-xs flex items-center pb-4 pl-4">Features</div>
              
              <div className="flex flex-col items-center justify-center bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black rounded-2xl py-3 shadow-[0_0_25px_rgba(245,158,11,0.35)] border border-yellow-200/50 transform -translate-y-2 relative z-20 mx-2">
                <span className="text-[9px] uppercase tracking-widest font-black opacity-90 mb-0.5">VIP Choice</span>
                <span className="text-[22px] font-black tracking-tight leading-none">Smootv</span>
              </div>
              
              <div className="text-center font-bold text-[#CBD5E1] uppercase tracking-widest text-xs flex items-center justify-center pb-4">Cable / Satellite</div>
              <div className="text-center font-bold text-[#CBD5E1] uppercase tracking-widest text-xs flex items-center justify-center pb-4">Other IPTV</div>
            </div>

            {/* Table Rows */}
            <div className="relative z-10">
              {rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-4 gap-4 py-4.5 border-b border-white/[0.06] last:border-0 items-center">
                  <div className="font-semibold text-[#F8FAFC] text-sm md:text-[15px] pl-4">{row.feature}</div>
                  <div className="font-black text-amber-400 text-center text-[15px] md:text-[16px]">{row.smootv}</div>
                  <div className="font-medium text-[#CBD5E1] text-center text-xs md:text-[13px]">{row.cable}</div>
                  <div className="font-medium text-[#CBD5E1] text-center text-xs md:text-[13px]">{row.other}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Comparison (Cards) */}
        <div className="md:hidden space-y-6">
          <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/10 rounded-2xl p-1 relative border border-amber-500/30">
            <div className="bg-[#0B0D14] rounded-xl p-5">
              <h3 className="text-2xl font-black mb-4 text-center bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">Smootv (VIP Choice)</h3>
              <div className="space-y-3.5">
                {rows.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                    <span className="text-[#CBD5E1] text-xs">{row.feature}</span>
                    <span className="font-bold text-amber-400 text-xs text-right">{row.smootv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0B0D14] rounded-2xl border border-white/10 p-5">
            <h3 className="text-lg font-bold mb-4 text-center text-[#CBD5E1]">Cable / Satellite TV</h3>
            <div className="space-y-3.5">
              {rows.map((row, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                  <span className="text-[#CBD5E1] text-xs">{row.feature}</span>
                  <span className="font-medium text-white/70 text-xs text-right">{row.cable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/pricing"
            className="btn-primary-smootv px-9 py-4 text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            <span>View Plans &amp; Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
