import Link from "next/link";
import { Trophy, Flame, Play, Shield, Circle, Sparkles, ArrowRight } from "lucide-react";

export default function SportsSection() {
  const leagues = [
    {
      name: "NFL Football",
      channel: "NFL Sunday Ticket & RedZone 4K",
      badge: "60 FPS LIVE",
      desc: "Every touchdown, game pass, and postseason playoff broadcast live in uncompressed 4K HDR.",
      accent: "from-amber-500 via-yellow-500 to-amber-700",
      icon: "🏈",
    },
    {
      name: "NBA Basketball",
      channel: "NBA League Pass 4K",
      badge: "ULTRA HD",
      desc: "Stream all out-of-market games, court-side cameras, and play-by-play coverage with Smootv.",
      accent: "from-yellow-500 via-amber-500 to-yellow-600",
      icon: "🏀",
    },
    {
      name: "UFC & Combat Sports",
      channel: "UFC PPV & Main Event",
      badge: "PPV INCLUDED",
      desc: "All UFC Fight Nights, pay-per-view main cards, Boxing, and ONE Championship at no extra fee.",
      accent: "from-red-500 via-amber-500 to-yellow-500",
      icon: "🥊",
    },
    {
      name: "UEFA Champions League",
      channel: "TNT Sports & Canal+ 4K",
      badge: "EU LEAGUES",
      desc: "Premier League, La Liga, Serie A, Champions League, and Europa League matchday action.",
      accent: "from-amber-400 via-yellow-400 to-amber-600",
      icon: "⚽",
    },
    {
      name: "MLB Baseball",
      channel: "MLB Extra Innings HD",
      badge: "ALL GAMES",
      desc: "Follow your team through all 162 regular season games and World Series broadcasts live.",
      accent: "from-yellow-600 via-amber-500 to-yellow-400",
      icon: "⚾",
    },
    {
      name: "NHL Hockey",
      channel: "NHL Center Ice 4K",
      badge: "60 FPS",
      desc: "Experience high-frame-rate hockey streaming with zero puck blur and full Stanley Cup coverage.",
      accent: "from-amber-500 via-yellow-500 to-amber-600",
      icon: "🏒",
    },
  ];

  return (
    <section id="sports" className="py-24 relative z-10 border-t border-amber-500/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/25 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Trophy className="w-3.5 h-3.5" />
            <span>LIVE IPTV SPORTS NETWORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC]">
            Stream Every <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Game &amp; PPV Event</span> with Smootv
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg mt-4">
            Smootv gives you unlimited access to premium pay-per-view sports networks, regional sports passes, and international 4K tournament streams with zero add-on fees. Explore our full <Link href="/channels" className="text-amber-400 hover:underline font-semibold">IPTV channel lineup</Link> or pick a <Link href="/pricing" className="text-amber-400 hover:underline font-semibold">subscription package</Link>.
          </p>
        </div>

        {/* 6 Sports Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leagues.map((item, idx) => (
            <div
              key={idx}
              className="smootv-card p-6 rounded-2xl relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle Card Accent Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.accent} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[10px] font-extrabold bg-amber-500/10 text-amber-400 border border-amber-500/25 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Circle className="w-1.5 h-1.5 fill-amber-400 animate-pulse" /> {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>
                <div className="text-xs font-mono text-amber-400 mt-1 font-semibold">
                  {item.channel}
                </div>

                <p className="text-sm text-[#CBD5E1] mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#CBD5E1]">
                <span>Anti-Freeze Server</span>
                <Link
                  href="/pricing"
                  className="text-amber-400 font-bold flex items-center gap-1 hover:text-amber-300 transition-colors"
                >
                  Watch Live <Play className="w-3 h-3 fill-current" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/channels"
            className="btn-secondary-smootv px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>View All Sports Channels &amp; Passes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
