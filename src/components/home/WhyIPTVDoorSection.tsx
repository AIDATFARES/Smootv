"use client";

import { motion } from "framer-motion";
import { Bolt, Clapperboard, Globe2, Layers3, Monitor, ShieldCheck, Smartphone } from "lucide-react";

const primaryFeatures = [
  { icon: Monitor, title: "4K Ultra HD Streaming", text: "Enjoy your Smootv subscription with crisp 4K, Full HD, and HD quality streams. Our advanced anti-freeze technology ensures seamless playback on every device.", tags: ["4K UHD", "FULL HD", "ANTI-FREEZE"] },
  { icon: Layers3, title: "+50,000 Live Channels", text: "Access over 50,000 global live IPTV channels spanning premium sports, international news, kids' programming, and exclusive entertainment networks.", tags: ["160+ COUNTRIES", "SPORTS", "NEWS", "KIDS"] },
  { icon: Clapperboard, title: "200,000+ VODs", text: "Dive into a massive on-demand library featuring over 200,000 movies, hit series, documentaries, and sports replays, updated regularly.", tags: ["120,000+ FILMS", "SERIES", "200,000+ VODS"] },
];

const benefits = [
  { icon: Bolt, title: "Instant Activation", text: "Your Smootv account activates instantly." },
  { icon: Smartphone, title: "All Devices Supported", text: "Stream IPTV on Smart TVs, Firestick, iOS, and Android." },
  { icon: Globe2, title: "Works Worldwide", text: "Take your Smootv service anywhere in the world." },
  { icon: ShieldCheck, title: "99.9% Server Uptime", text: "Ultra-reliable servers for stable, buffer-free viewing." },
];

export default function WhyIPTVDoorSection() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(245,158,11,0.08),transparent_42%)] pointer-events-none" />
      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            PREMIUM FEATURES
          </span>
          <h2 className="mt-6 text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-5xl">
            <span className="block">Everything You Need for the</span>
            <span className="mt-1 block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Ultimate Smootv Experience.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#CBD5E1]">
            Smootv delivers premium live television, thrilling sports events, and on-demand entertainment seamlessly—on any supported device, anywhere.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {primaryFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article 
                key={feature.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }} 
                className="flex min-h-[285px] flex-col rounded-2xl border p-6 border-amber-500/20 bg-[#0B0D14] shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-lg font-extrabold uppercase text-white">{feature.title}</p>
                <p className="mt-4 text-xs leading-5 text-[#CBD5E1]">{feature.text}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {feature.tags.map(tag => (
                    <span key={tag} className="rounded-full border border-white/10 bg-[#07080C] px-2.5 py-1 text-[9px] font-bold tracking-wide text-[#CBD5E1]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => { 
            const Icon = benefit.icon; 
            return (
              <motion.div 
                key={benefit.title} 
                initial={{ opacity: 0, y: 14 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.25 + index * 0.07 }} 
                className="flex min-h-[112px] gap-3 rounded-xl border border-amber-500/20 bg-[#0B0D14] p-5 hover:border-amber-500/40 transition-colors"
              >
                <Icon className="h-5 w-5 shrink-0 text-amber-400" />
                <span>
                  <span className="block text-sm font-bold text-white">{benefit.title}</span>
                  <small className="mt-1 block text-[11px] leading-4 text-[#CBD5E1]">{benefit.text}</small>
                </span>
              </motion.div>
            ); 
          })}
        </div>
      </div>
    </section>
  );
}
