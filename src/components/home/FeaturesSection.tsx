import Link from "next/link";
import { Tv, Zap, Monitor, Sparkles, Shield, Clock, Globe, Settings, Award, ArrowRight } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Tv,
      title: "50,000+ IPTV Channels",
      description: "Access over 50,000 live international IPTV channels and 200,000 VOD movies updated daily with Smootv.",
      accent: "from-amber-400 to-yellow-500",
      link: "/channels",
      linkText: "View Channels Lineup",
    },
    {
      icon: Award,
      title: "True 4K / UHD Clarity",
      description: "Stream premium live sports and cinema content in true 4K HDR and high-frame-rate 60 FPS clarity.",
      accent: "from-yellow-400 to-amber-600",
      link: "/pricing",
      linkText: "Check 4K Plans",
    },
    {
      icon: Zap,
      title: "Anti-Freeze IPTV Servers",
      description: "Powered by 99.9% uptime cloud architecture with anti-buffering load balancing for smooth playback.",
      accent: "from-amber-500 to-orange-500",
      link: "/how-it-works",
      linkText: "How It Works",
    },
    {
      icon: Monitor,
      title: "Universal Device Support",
      description: "Watch Smootv effortlessly on Smart TVs, Firestick, Android, iOS, Windows PC, Mac, and MAG boxes.",
      accent: "from-yellow-300 to-amber-500",
      link: "/installation",
      linkText: "Setup Guides",
    },
    {
      icon: Sparkles,
      title: "Instant Account Activation",
      description: "Receive your automated Smootv login credentials delivered instantly via email & WhatsApp within seconds.",
      accent: "from-amber-400 to-yellow-400",
      link: "/pricing",
      linkText: "Instant Order",
    },
    {
      icon: Clock,
      title: "24/7 Expert IPTV Support",
      description: "Our dedicated technical team is available around the clock to assist with player setup and live diagnostics.",
      accent: "from-amber-500 to-yellow-600",
      link: "/contact",
      linkText: "Get Technical Help",
    },
    {
      icon: Globe,
      title: "Global Unrestricted Streaming",
      description: "Stream your favorite international TV channels and sports anywhere in the world with Smootv.",
      accent: "from-yellow-400 to-amber-500",
      link: "/channels",
      linkText: "Explore Lineup",
    },
    {
      icon: Settings,
      title: "Simple Player Integration",
      description: "Enjoy seamless setup instructions for TiviMate, IPTV Smarters Pro, XCIPTV, and IBO Player.",
      accent: "from-amber-400 to-orange-500",
      link: "/installation",
      linkText: "App Tutorials",
    },
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/25 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <span>WHY CHOOSE SMOOTV</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC]">
            Engineered for <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Ultimate IPTV Entertainment</span>
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg mt-4">
            Discover why thousands of households choose Smootv for high-speed, buffer-free global television streaming and 4K cinema.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="smootv-card p-7 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} p-[1px] mb-6 shadow-md`}>
                    <div className="w-full h-full bg-[#0B0D14] rounded-[11px] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-amber-300 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#CBD5E1] mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
