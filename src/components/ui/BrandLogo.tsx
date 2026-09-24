import Link from "next/link";

interface BrandLogoProps {
  compact?: boolean;
}

export default function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none font-sans ${compact ? "scale-90 origin-left" : ""}`}>
      {/* Stream Icon */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-600 p-[1px] shadow-[0_0_18px_rgba(245,158,11,0.35)]">
        <div className="w-full h-full bg-[#07080C] rounded-[11px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/25 via-yellow-500/15 to-amber-600/25" />
          <svg
            className="w-4 h-4 text-amber-400 relative z-10 translate-x-[1px]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86a1 1 0 00-1.5.86z" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex items-center gap-1.5 leading-none">
        <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F8FAFC]">
          Smoo<span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">tv</span>
        </span>
        <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
          4K
        </span>
      </div>
    </div>
  );
}
