import Link from "next/link";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle, Sparkles } from "lucide-react";

export const metadata = {
  title: "Smootv - Quick Setup & Installation Guide for All Devices",
  description: "Step-by-step setup guides to install Smootv on Smart TVs, Firestick, Android TV, Apple TV, iOS & Windows. Start watching 4K live TV in under 3 minutes!",
  alternates: {
    canonical: "/installation",
  },
};

export default function Installation() {
  return (
    <main className="mx-auto w-full max-w-[1440px] flex-grow px-5 pb-20 pt-28 sm:px-8 md:px-12">
      {/* Header Banner */}
      <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <Sparkles className="w-3.5 h-3.5" />
          SMOOTV INSTALLATION GUIDE
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#F8FAFC]">
          Smootv <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Installation &amp; Setup Guide</span>
        </h1>
        
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#A7B0C0]">
          Comprehensive step-by-step instructions to configure your Smootv subscription on all major streaming devices.
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#A7B0C0]">
          Smootv works seamlessly on Smart TVs, Amazon Firestick, Android TV boxes, Apple TV, iOS, Windows, Mac, and MAG devices. New to Smootv? Explore our{" "}
          <Link className="font-bold text-amber-400 hover:underline" href="/pricing">Pricing Plans</Link> or browse the{" "}
          <Link className="font-bold text-amber-400 hover:underline" href="/channels">Channel List</Link> first.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-bold text-[#A7B0C0]">
          <span className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-amber-400" />15+ Devices Supported</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-amber-400" />3–5 Minutes Setup</span>
          <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4 text-amber-400" />24/7 Smootv Support</span>
        </div>
      </header>

      {/* Quick Start Steps */}
      <section className="mb-20">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-4 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              QUICK START PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#F8FAFC] leading-tight tracking-tight">
              Everything You Need for{" "}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Easy IPTV Setup</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <QuickStartCard icon={Download} step="1" title="DOWNLOAD PLAYER APP">
              Download a compatible IPTV player application (such as TiviMate or IPTV Smarters Pro) on your streaming device.
            </QuickStartCard>
            <QuickStartCard icon={Link2} step="2" title="INPUT CREDENTIALS">
              Input your Smootv M3U playlist link or Xtream Codes API credentials received via email or WhatsApp.
            </QuickStartCard>
            <QuickStartCard icon={PlayCircle} step="3" title="START 4K STREAMING">
              Enjoy instant access to 50,000+ live channels, 4K movies, and premium live sports with zero buffering.
            </QuickStartCard>
          </div>
        </div>
      </section>

      {/* Interactive Device Setup Guide */}
      <DeviceSetupGuide />

      {/* Help Section */}
      <section className="smootv-card p-10 max-w-2xl mx-auto text-center rounded-3xl mt-16">
        <h2 className="text-2xl font-black text-[#F8FAFC]">Need Help with Smootv Setup?</h2>
        <p className="mt-2 text-sm text-[#A7B0C0]">Our dedicated technical support team is available 24/7 on WhatsApp to assist with your Smootv installation.</p>
        <a 
          className="mt-6 btn-primary-smootv px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          href="https://wa.me/447882781998?text=Hello,%20I%20need%20help%20setting%20up%20Smootv."
          target="_blank"
          rel="noreferrer"
        >
          Get Setup Help on WhatsApp
        </a>
      </section>
    </main>
  );
}

function QuickStartCard({ children, icon: Icon, step, title }: { children: React.ReactNode; icon: typeof Download; step: string; title: string }) {
  return (
    <div className="smootv-card p-8 rounded-2xl flex flex-col gap-4">
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
        <Icon className="w-6 h-6" />
      </div>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-xs font-black text-black">
        {step}
      </span>
      <h3 className="text-white font-extrabold text-sm tracking-wider uppercase">{title}</h3>
      <p className="text-[#A7B0C0] text-xs leading-relaxed">{children}</p>
    </div>
  );
}
