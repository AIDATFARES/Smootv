import Image from "next/image";
import Link from "next/link";
import BrandMarquee from "./BrandMarquee";

export default function MovieStrips() {
  const movieImages = [
    "7R05LaU8Em2zN0LaAqEZMVCx3wb.webp",
    "8iFUWLKBAWDrJ9rOunscgIDrGQ1.webp",
    "Lanterns-S01E.jpg",
    "Mutiny-2026.jpg",
    "OBX-S05.jpg",
    "SMBND-2026-5.jpg",
    "c987gxFjXqYOxZEZKcTkS1ONTWH.webp",
    "hFborW6HmffKL05GIWlkTFdvVpN.webp",
    "iLhi3wqsLOdHB61vySJRm7y09XS.webp",
    "iwCeOpuBtuTP1kLosqgniey5OvX.webp",
    "zqxIT48mWFsC4NSjGEHAcp1pjEo.webp",
    "????-Demon-Slayer-Infinity-Castle-2025-?????.jpg",
    "????-Evil-Dead-Burn-2026-?????.jpg",
    "????-The-Last-House-2026-?????.jpg",
    "?????-From-??????-??????-?????-????.jpg",
    "?????-House-of-The-Dragon-??????-??????.jpg",
    "?????-Reacher-??????-??????-?????-????.jpg"
  ];

  return (
    <section className="w-full overflow-hidden bg-transparent py-16 relative flex flex-col gap-6">
      {/* Section Header */}
      <div className="text-center mb-8 px-4 z-20">
        <span className="inline-block py-1 px-4 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          Endless Entertainment
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          THE ULTIMATE <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">CINEMATIC</span> EXPERIENCE
        </h2>
        <p className="text-[#CBD5E1] max-w-2xl mx-auto text-sm md:text-base mb-8">
          Explore a massive library of 200,000+ Films &amp; Series. From the latest blockbuster hits to timeless classics, all available instantly in crystal-clear 4K Ultra HD.
        </p>
        <Link 
          href="/channels"
          className="btn-primary-smootv inline-flex items-center justify-center px-8 py-3.5 text-xs font-black uppercase tracking-wider gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        >
          <span>View Smootv Channel List</span> <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {/* Brand Logos Tape */}
      <div className="z-20 w-full mb-10">
        <span className="block text-center text-sm font-bold tracking-widest text-[#CBD5E1] uppercase mb-6">50,000+ Premium Live Channels</span>
        <BrandMarquee />
      </div>

      {/* Top Strip (Right to Left) */}
      <div className="w-full mb-4 z-20">
        <span className="block text-center text-sm font-bold tracking-widest text-[#CBD5E1] uppercase mb-2">200,000+ Latest Movies &amp; Series</span>
      </div>
      <div className="relative flex w-max items-center">
        <div className="flex gap-4 md:gap-6 px-2 md:px-3 animate-marquee" style={{ animationDuration: '30s' }}>
          {[...movieImages, ...movieImages, ...movieImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[160px] h-[200px] md:w-[240px] md:h-[300px] relative rounded-xl overflow-hidden shadow-xl border border-amber-500/20 hover:scale-105 hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:z-10 transition-all duration-300">
              <Image
                src={`/movies/${img}`}
                alt="Movie poster"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 280px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
