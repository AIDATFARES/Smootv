"use client";

import Image from "next/image";
import { Play, Tv, Shield, Zap, Search, Radio, Film, Trophy, Circle, Volume2, Maximize2, Settings } from "lucide-react";
import { useState } from "react";

export default function IPTVHeroMockup() {
  const [activeCategory, setActiveCategory] = useState("Sports 4K");

  const channels = [
    { name: "ESPN 1 Ultra 4K", category: "Sports 4K", epg: "Live: Premier League Matchday", quality: "4K 60FPS", icon: "⚽" },
    { name: "Sky Sports Main Event", category: "Sports 4K", epg: "Live: Champions League Night", quality: "UHD", icon: "🏆" },
    { name: "TNT Sports 1 HD", category: "Sports 4K", epg: "Live: UEFA Europa Matchday", quality: "1080p", icon: "🥊" },
    { name: "HBO Cinema 4K", category: "Movies", epg: "Movie: Dune - Part Two (2024)", quality: "4K HDR", icon: "🎬" },
    { name: "Canal+ Sport FR", category: "Sports 4K", epg: "Direct: Ligue 1 Uber Eats", quality: "4K", icon: "⚽" },
  ];

  return (
    <div className="relative w-full max-w-[620px] mx-auto group">
      {/* Outer Glow Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/30 via-yellow-500/20 to-amber-700/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />

      {/* Main Interface Window */}
      <div className="relative bg-[#11141E] border border-amber-500/20 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Top Window Header Bar */}
        <div className="bg-[#07080C] px-4 py-3 border-b border-amber-500/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-[#94A3B8]">SMOOTV-PLAYER v4.2</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Circle className="w-1.5 h-1.5 fill-amber-400 animate-pulse" /> LIVE 4K SERVER
            </span>
            <div className="text-xs font-semibold text-amber-400">99.9% UPTIME</div>
          </div>
        </div>

        {/* Video Player Display Screen */}
        <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
          {/* Real Screen Image */}
          <Image
            src="/smootv-hero-stadium-live.webp"
            alt="Smootv Live Broadcast Stream"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 620px"
            className="object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />

          {/* Simulated Video Frame Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#11141E] via-transparent to-black/30 z-10 pointer-events-none" />
          
          {/* Screen Content Badge */}
          <div className="absolute top-3 left-3 z-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider shadow-lg">
              <Circle className="w-2 h-2 fill-black animate-ping" /> LIVE MATCH 60FPS
            </div>
          </div>

          {/* On-Screen EPG Bar */}
          <div className="absolute bottom-3 left-3 right-3 z-20 bg-[#07080C]/90 backdrop-blur-md p-2.5 rounded-xl border border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                ⚽
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  ESPN 1 ULTRA 4K
                  <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-400/30 px-1.5 rounded">60 FPS</span>
                </div>
                <div className="text-[11px] text-[#CBD5E1] truncate max-w-[200px] sm:max-w-[280px]">
                  Next: Post-Match Analysis &amp; Highlights
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Volume2 className="w-4 h-4 text-amber-400" />
              <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* EPG / Channel Selector List */}
        <div className="p-3 bg-[#07080C]">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#CBD5E1]">EPG TV GUIDE &amp; LIVE CHANNELS</span>
            <span className="text-[11px] text-amber-400 font-semibold cursor-pointer">View All 50,000+</span>
          </div>

          <div className="space-y-1.5">
            {channels.slice(0, 3).map((ch, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-lg border transition-all flex items-center justify-between text-xs ${
                  idx === 0
                    ? "bg-[#161A27] border-amber-500/40 text-white shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                    : "bg-[#11141E]/60 border-white/[0.04] text-[#CBD5E1] hover:border-amber-500/20"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{ch.icon}</span>
                  <div>
                    <div className="font-bold text-white text-xs">{ch.name}</div>
                    <div className="text-[10px] text-[#94A3B8]">{ch.epg}</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/15 text-amber-400 border border-amber-500/25">
                  {ch.quality}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
