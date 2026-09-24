import { CheckCircle2, Sparkles, Zap, ArrowRight, ShieldCheck } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "1 Month",
      price: "$14.99",
      period: "Billed once for 30 Days",
      popular: false,
      features: [
        "Over 50,000+ Live Channels",
        "Over 200,000+ VOD Movies & Shows",
        "4K & FHD Ultra Streaming",
        "99.9% Server Uptime Guarantee",
        "All Sports & PPV Included",
        "1 Device Connection",
        "Instant Email & WhatsApp Setup",
      ],
      whatsappText: "Hello,%20I%20want%20to%20subscribe%20to%20the%20Smootv%201-Month%20Plan%20($14.99).",
    },
    {
      name: "3 Months",
      price: "$35.00",
      period: "Billed $35.00 every 3 Months (Save 22%)",
      popular: false,
      features: [
        "Over 50,000+ Live Channels",
        "Over 200,000+ VOD Movies & Shows",
        "4K & FHD Ultra Streaming",
        "99.9% Server Uptime Guarantee",
        "All Sports & PPV Included",
        "1 Device Connection",
        "Instant Email & WhatsApp Setup",
        "7-Day Money Back Guarantee",
      ],
      whatsappText: "Hello,%20I%20want%20to%20subscribe%20to%20the%20Smootv%203-Month%20Plan%20($35.00).",
    },
    {
      name: "6 Months",
      price: "$49.99",
      period: "Billed $49.99 every 6 Months (Save 44%)",
      popular: false,
      features: [
        "Over 50,000+ Live Channels",
        "Over 200,000+ VOD Movies & Shows",
        "4K & FHD Ultra Streaming",
        "99.9% Server Uptime Guarantee",
        "All Sports & PPV Included",
        "2 Simultaneous Connections",
        "Instant Email & WhatsApp Setup",
        "VIP Priority Support 24/7",
      ],
      whatsappText: "Hello,%20I%20want%20to%20subscribe%20to%20the%20Smootv%206-Month%20Plan%20($49.99).",
    },
    {
      name: "1 Year",
      price: "$69.99",
      period: "Billed $69.99 yearly (Save 61%)",
      popular: true,
      badge: "MOST POPULAR",
      features: [
        "Over 50,000+ Live Channels",
        "Over 200,000+ VOD Movies & Shows",
        "4K & FHD Ultra Streaming",
        "99.9% Server Uptime Guarantee",
        "All Sports & PPV Included",
        "2 Simultaneous Connections",
        "Instant Automated Activation",
        "Free EPG Guide Updates",
        "VIP Priority Support 24/7",
      ],
      whatsappText: "Hello,%20I%20want%20to%20subscribe%20to%20the%20Smootv%201-Year%20Most%20Popular%20Plan%20($69.99).",
    },
    {
      name: "2 Years",
      price: "$120.00",
      period: "Billed $120.00 every 24 Months",
      popular: false,
      features: [
        "Over 50,000+ Live Channels",
        "Over 200,000+ VOD Movies & Shows",
        "4K & FHD Ultra Streaming",
        "99.9% Server Uptime Guarantee",
        "All Sports & PPV Included",
        "3 Simultaneous Connections",
        "Instant Automated Activation",
        "Free Adult Content Switch",
        "Lifetime VIP Technical Support",
      ],
      whatsappText: "Hello,%20I%20want%20to%20subscribe%20to%20the%20Smootv%202-Year%20Best%20Value%20Plan%20($120.00).",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative z-10 border-t border-amber-500/10 bg-[#07080C]/80">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/25 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Zap className="w-3.5 h-3.5" />
            <span>FLEXIBLE SMOOTV SUBSCRIPTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC]">
            Choose Your <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Smootv Plan</span>
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg mt-4">
            Transparent pricing options with instant automated activation, 50,000+ live channels, 200,000+ VODs, and zero contract commitments.
          </p>
        </div>

        {/* 5 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? "smootv-featured-card scale-105 z-20"
                  : "smootv-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)] flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-black" /> MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#F8FAFC]">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                </div>
                <div className="text-[11px] text-[#CBD5E1] mt-1 font-medium">{plan.period}</div>

                <div className="my-6 border-t border-white/10" />

                <ul className="space-y-3 text-xs text-[#CBD5E1]">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/447882781998?text=${plan.whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Order ${plan.name} IPTV subscription plan`}
                  className={`w-full py-3.5 text-xs font-extrabold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? "btn-primary-smootv"
                      : "btn-secondary-smootv"
                  }`}
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-[#0B0D14] border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">100% Risk-Free Smootv Guarantee</h3>
              <p className="text-xs text-[#CBD5E1] mt-0.5">Enjoy premium 4K IPTV streaming or request assistance from our 24/7 technical team within 7 days.</p>
            </div>
          </div>

          <a
            href="https://wa.me/447882781998?text=Hello,%20I%20have%20a%20question%20about%20Smootv%20pricing."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-smootv px-6 py-2.5 text-xs whitespace-nowrap"
          >
            Have Questions? Chat Us
          </a>
        </div>

      </div>
    </section>
  );
}
