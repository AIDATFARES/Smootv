"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "SPORTS 4K", color: "bg-amber-400" },
    { name: "CINEMA & VOD", color: "bg-yellow-400" },
    { name: "NEWS LIVE", color: "bg-amber-500" },
    { name: "DOCUMENTARIES", color: "bg-yellow-300" },
    { name: "KIDS & FAMILY", color: "bg-amber-600" },
    { name: "MUSIC CHANNELS", color: "bg-yellow-500" },
    { name: "INTERNATIONAL TV", color: "bg-amber-300" },
    { name: "LIFESTYLE", color: "bg-orange-400" },
    { name: "PPV EVENTS", color: "bg-red-500" },
    { name: "4K ULTRA HD", color: "bg-yellow-200" },
    { name: "SERIES & SHOWS", color: "bg-amber-500" },
  ];

  // Duplicate categories to create a seamless infinite marquee scroll
  const duplicatedCategories = [...categories, ...categories, ...categories];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-6 border-y border-amber-500/15 bg-[#07080C]/80 backdrop-blur-md relative group">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative flex items-center">
        
        {/* Left Arrow Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#11141E]/90 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black transition-all shadow-lg backdrop-blur-sm opacity-80 hover:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrollable Container with Marquee Animation */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar py-1 scroll-smooth"
        >
          <div className="flex items-center gap-3 w-max animate-marquee-infinite hover:[animation-play-state:paused]">
            {duplicatedCategories.map((cat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-black tracking-wider text-[#CBD5E1] hover:text-white hover:border-amber-400/50 hover:bg-amber-500/5 transition-all cursor-pointer whitespace-nowrap shrink-0 border border-amber-500/15 bg-[#11141E]/90 shadow-sm"
              >
                <span className={`w-2 h-2 rounded-full ${cat.color} shadow-[0_0_8px_rgba(245,158,11,0.6)]`} />
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#11141E]/90 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black transition-all shadow-lg backdrop-blur-sm opacity-80 hover:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
