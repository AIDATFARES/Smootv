import Image from "next/image";
import { Globe2, Headphones, RefreshCw, ShieldCheck, Star, Trophy, Tv, Users } from "lucide-react";

const reviewImages = [
  "1-2.webp",
  "2-2.webp",
  "3-3.webp",
  "4-2.webp",
  "1-2 (1).webp",
  "Image01-e1736575288611.jpg.webp",
  "Image02-e1736575280733.jpg.webp",
  "Image03-e1736575270823.jpg.webp",
  "Image07-e1736575248206.jpg.webp"
];

const metrics = [
  { icon: Star, value: "4.9 / 5.0", label: "Average rating", tone: "text-amber-400" },
  { icon: Users, value: "14K+", label: "Happy customers", tone: "text-yellow-400" },
  { icon: Tv, value: "50K+", label: "Live channels", tone: "text-amber-300" },
  { icon: Globe2, value: "80+", label: "Countries supported", tone: "text-amber-400" },
  { icon: RefreshCw, value: "94%", label: "Renewal rate", tone: "text-yellow-300" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-transparent py-24 sm:py-28">
      <div className="relative">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Trophy className="h-3 w-3" /> TOP RATED IPTV PROVIDER
          </span>
          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl animate-fade-up">
            <span className="block">Trusted by Thousands of</span>
            <span className="mt-1 block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Happy Cord-Cutters
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#CBD5E1] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Read real reviews from our global community. Discover why Smootv is rated as the most reliable, buffer-free IPTV service for live sports, movies, and international channels.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-2 gap-3 px-5 sm:grid-cols-5 sm:px-0">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="rounded-xl border border-amber-500/20 bg-[#0B0D14] px-3 py-4 text-center shadow-md animate-fade-up"
                style={{ animationDelay: `${0.2 + (index * 0.06)}s`, animationFillMode: 'both' }}
              >
                <Icon className={`mx-auto h-4 w-4 ${metric.tone}`} />
                <span className="mt-2 block text-base font-bold text-white">{metric.value}</span>
                <small className="mt-0.5 block text-[8px] font-bold uppercase tracking-wide text-[#CBD5E1]">
                  {metric.label}
                </small>
              </div>
            );
          })}
        </div>

        {/* Marquee Wall of Customer Reviews */}
        <div className="mt-14 relative w-full overflow-hidden flex items-center">
          <div className="flex gap-4 sm:gap-6 animate-marquee py-4" style={{ animationDuration: '35s' }}>
            {[...reviewImages, ...reviewImages, ...reviewImages].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] h-[340px] sm:h-[380px] md:h-[420px] relative bg-[#0B0D14] rounded-2xl border border-amber-500/20 p-2 shadow-lg hover:scale-105 hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300"
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <Image
                    src={`/reviews/${img}`}
                    alt="Customer IPTV Review"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
