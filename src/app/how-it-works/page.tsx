import HowItWorksSection from "@/components/home/HowItWorksSection";
import Link from "next/link";
import { PlayCircle, ShieldCheck, Zap, Phone, MonitorSmartphone, Globe2, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Smootv - How It Works | Easy 3-Step Setup & Instant Activation",
  description: "Discover how Smootv works. Select your plan, receive credentials instantly via email & WhatsApp, and stream 50,000+ 4K channels on any device in 3 steps.",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <main className="flex-col flex min-h-screen bg-[#07080C] text-[#F8FAFC]">
      
      {/* Page Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-amber-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-400 font-extrabold text-xs tracking-widest uppercase mb-6 border border-amber-500/25 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            SIMPLE IPTV SETUP GUIDE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#F8FAFC] tracking-tight leading-[1.1] mb-6">
            Start Streaming Smootv in <br />
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Under 5 Minutes
            </span>
          </h1>
          <p className="text-[#A7B0C0] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We&apos;ve made cord-cutting effortless. No technical skills required, no hardware installations, and zero contract commitments. Choose a <Link href="/pricing" className="text-amber-400 hover:underline font-bold">Smootv plan</Link>, connect your app, and access over <Link href="/channels" className="text-amber-400 hover:underline font-bold">50,000 live channels</Link> instantly.
          </p>
        </div>
      </section>

      {/* The Core Timeline Section */}
      <div className="bg-[#07080C]">
        <HowItWorksSection />
      </div>

      {/* Why Choose Smootv - Pill Grid */}
      <section className="py-20 bg-[#07080C]/80 text-[#F8FAFC] relative z-10 border-t border-amber-500/10">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10 text-[#F8FAFC]">
            Why Choose <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Smootv</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            
            {/* Pill 1 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-amber-500/20 bg-[#0B0D14] text-[#A7B0C0] shadow-sm">
              <ShieldCheck className="text-amber-400 shrink-0" size={20} />
              <span className="text-sm font-bold text-white">Secure 256-Bit Payment Gateway</span>
            </div>

            {/* Pill 2 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-amber-500/20 bg-[#0B0D14] text-[#A7B0C0] shadow-sm">
              <Zap className="text-amber-400 shrink-0" size={20} />
              <span className="text-sm font-bold text-white">Instant Automated M3U Credentials</span>
            </div>

            {/* Pill 3 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-amber-500/20 bg-[#0B0D14] text-[#A7B0C0] shadow-sm">
              <Phone className="text-amber-400 shrink-0" size={20} />
              <span className="text-sm font-bold text-white">24/7 Dedicated WhatsApp Support</span>
            </div>

            {/* Pill 4 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-amber-500/20 bg-[#0B0D14] text-[#A7B0C0] shadow-sm">
              <MonitorSmartphone className="text-amber-400 shrink-0" size={20} />
              <span className="text-sm font-bold text-white">100% Multi-Device Compatibility</span>
            </div>

            {/* Pill 5 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-amber-500/20 bg-[#0B0D14] text-[#A7B0C0] shadow-sm">
              <Globe2 className="text-amber-400 shrink-0" size={20} />
              <span className="text-sm font-bold text-white">150+ Country Channels &amp; VOD</span>
            </div>

            {/* Pill 6 */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-amber-500/20 bg-[#0B0D14] text-[#A7B0C0] shadow-sm">
              <CheckCircle2 className="text-amber-400 shrink-0" size={20} />
              <span className="text-sm font-bold text-white">Zero Contract or Cancellation Fees</span>
            </div>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-[#A7B0C0] font-semibold">
            <Link href="/installation" className="hover:text-amber-400 transition-colors">Device Setup Tutorials →</Link>
            <Link href="/faq" className="hover:text-amber-400 transition-colors">Setup FAQs →</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Ask Technical Support →</Link>
          </div>
        </div>
      </section>

      {/* Large Solid CTA Block */}
      <section className="py-24 relative z-10 border-t border-amber-500/10 bg-[#0B0D14] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-[#F8FAFC] mb-6 tracking-tight">
            Ready to Start Streaming with Smootv?
          </h2>
          <p className="text-[#A7B0C0] text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied cord-cutters worldwide. Get instant access to 50,000+ live IPTV channels, 200,000+ films, and premium 4K sports coverage.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/pricing" 
              className="btn-primary-smootv w-full sm:w-auto px-8 py-4 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              <span>View All Smootv Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Smootv." 
              target="_blank"
              rel="noreferrer"
              className="btn-secondary-smootv w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center"
            >
              Get Free Trial via WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
