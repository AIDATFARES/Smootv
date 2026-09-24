import Link from "next/link";
import { ShieldCheck, Zap, Tv, Play, CheckCircle2, Sparkles, ArrowRight, Flame } from "lucide-react";
import IPTVHeroMockup from "./IPTVHeroMockup";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-6 shadow-[0_0_15px_rgba(245,158,11,0.18)]">
              <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="uppercase tracking-widest text-[11px]">SMOOTV NEXT-GEN STREAMING NETWORK</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.05] text-[#F8FAFC]">
              Smootv — Premium 4K IPTV Service Built for{" "}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Live TV, Sports &amp; Cinema
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-[#CBD5E1] font-normal mt-6 max-w-[620px] leading-relaxed">
              Experience high-performance IPTV streaming with Smootv. Access over <Link href="/channels" className="text-amber-400 hover:underline font-semibold">50,000 live international channels</Link>, 200,000+ VOD movies, and high-bitrate live sports in ultra-crisp 4K/FHD with zero-freeze server stability.
            </p>

            {/* CTAs with Animations */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-9 w-full sm:w-auto">
              <a
                href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%2024-hour%20free%20trial%20for%20Smootv."
                target="_blank"
                rel="noreferrer"
                className="btn-primary-strimo btn-shimmer-effect btn-pulse-glow px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-black flex items-center justify-center gap-2.5 group shadow-xl"
              >
                <Sparkles className="w-4 h-4 text-[#07080C] animate-pulse shrink-0" />
                <span>START 24H FREE TRIAL</span>
                <ArrowRight className="w-4 h-4 text-[#07080C] group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
              </a>

              <Link
                href="/pricing"
                className="btn-secondary-strimo px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-extrabold flex items-center justify-center gap-2.5 group"
              >
                <Tv className="w-4 h-4 text-amber-400 group-hover:scale-125 transition-transform duration-300 shrink-0" />
                <span>VIEW ALL IPTV PLANS</span>
              </Link>
            </div>

            {/* Trust / Benefit Points */}
            <div className="grid grid-cols-2 sm:flex items-center gap-5 mt-10 pt-8 border-t border-amber-500/15 w-full text-xs font-semibold text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>4K Ultra HD Streaming</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <Link href="/installation" className="hover:text-amber-400 transition-colors">Multi-Device Compatibility</Link>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <Link href="/how-it-works" className="hover:text-amber-400 transition-colors">Instant Automated Setup</Link>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <Link href="/contact" className="hover:text-amber-400 transition-colors">24/7 Smootv VIP Support</Link>
              </div>
            </div>

          </div>

          {/* Right Column: Original IPTV Interface Mockup */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <IPTVHeroMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
