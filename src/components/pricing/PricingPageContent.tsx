"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Gift, Tv, Headphones, HelpCircle, MonitorSmartphone, ShieldCheck, Sparkles, Zap, CreditCard, Bitcoin, Wallet, ArrowRight } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  badge: string;
  price: number;
  durationLabel: string;
  months: number;
  savingsBadge?: string;
  popular?: boolean;
  buttonText: string;
};

const commonFeatures = [
  "Smootv subscription for {devices} Device{s}",
  "Uncompressed Ultra HD & 4K Streaming",
  "50,000+ Premium Live International Channels",
  "200,000+ VOD Movies & Series (Daily Updates)",
  "All Premium Sports Passes & PPV Events",
  "Full Electronic Program Guide (EPG)",
  "Advanced Anti-Freeze Cloud Server Infrastructure",
  "Free VPN Compatibility Built-in",
  "Direct 24/7 WhatsApp VIP Technical Support",
];

const plans: Plan[] = [
  {
    id: "3-months",
    name: "3 MONTHS",
    badge: "STARTER",
    price: 35.00,
    durationLabel: "3 Months",
    months: 3,
    savingsBadge: "Save 22%",
    buttonText: "SELECT 3 MONTHS",
  },
  {
    id: "6-months",
    name: "6 MONTHS",
    badge: "VALUE",
    price: 49.99,
    durationLabel: "6 Months",
    months: 6,
    savingsBadge: "Save 44%",
    buttonText: "SELECT 6 MONTHS",
  },
  {
    id: "12-months",
    name: "12 MONTHS",
    badge: "MOST POPULAR",
    price: 69.99,
    durationLabel: "12 Months",
    months: 12,
    savingsBadge: "Save 61%",
    popular: true,
    buttonText: "GET 12 MONTHS",
  },
  {
    id: "24-months",
    name: "24 MONTHS",
    badge: "BEST VALUE",
    price: 120.00,
    durationLabel: "24 Months",
    months: 24,
    savingsBadge: "Save 70%",
    buttonText: "SELECT 24 MONTHS",
  },
];

const includedFeatures = [
  { icon: Tv, title: "+50,000 Live Channels", text: "Explore global IPTV channels across sports, news, documentaries, and premium entertainment." },
  { icon: MonitorSmartphone, title: "200,000+ VODs", text: "Enjoy cinema blockbusters, daily updated TV series, and multi-audio tracks." },
  { icon: Zap, title: "Anti-Freeze Technology", text: "Cloud server load balancing ensures 99.9% uptime and zero buffering during peak hours." },
  { icon: Headphones, title: "24/7 Support", text: "Dedicated technical assistance available on WhatsApp around the clock." },
  { icon: Sparkles, title: "Instant Activation", text: "Login credentials and setup guides dispatched immediately upon payment." },
  { icon: CreditCard, title: "TV Guide (EPG)", text: "Complete electronic program guide with 7-day catchup and event reminders." },
];

const billingQuestions = [
  { question: "1. Which payment methods can I use?", answer: "We support Credit/Debit Cards, PayPal, Bitcoin, and Crypto (USDT). Contact support if you need assistance during checkout." },
  { question: "2. Is my payment protected?", answer: "Yes, all transactions are processed through encrypted 256-bit SSL gateways for maximum security." },
  { question: "3. Will my subscription renew automatically?", answer: "No automatic charges. We will send you a renewal reminder before your plan expires so you remain in total control." },
  { question: "4. Can I change my plan or number of connections?", answer: "Yes! Simply contact our support team on WhatsApp with your account details to add connections or upgrade your plan." },
];

export default function PricingPageContent() {
  const [devices, setDevices] = useState(1);
  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);
  const monthlyPrice = (plan: Plan) => ((plan.price * devices) / plan.months).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the Smootv ${plan.name} plan with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/447882781998?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Page Header */}
        <header className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/25 px-4 py-1 mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Gift className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">
              TRANSPARENT PLANS &amp; PRICING
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F8FAFC]">
            SMOOTV <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">SUBSCRIPTION PLANS</span>
          </h1>
          <p className="mx-auto mt-6 text-base sm:text-lg text-[#CBD5E1] font-normal leading-relaxed max-w-2xl">
            Choose your Smootv subscription plan. Enjoy bigger savings on 6-month and 12-month packages with simultaneous multi-device connection options.
          </p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <Tv className="h-4 w-4 text-amber-400" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#CBD5E1]">Select Number of Devices</p>
          </div>
          <div className="inline-flex rounded-full border border-white/10 p-1.5 bg-[#0B0D14]">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  key={count}
                  onClick={() => setDevices(count)}
                  className={`rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold transition-all uppercase tracking-wide ${
                    selected
                      ? "btn-primary-smootv"
                      : "text-[#CBD5E1] hover:text-white"
                  }`}
                >
                  {count} Device{count > 1 ? "s" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl p-6 text-left transition-all duration-300 ${
                plan.popular
                  ? "smootv-featured-card md:scale-105 z-10"
                  : "smootv-card"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="block text-amber-400 font-extrabold uppercase tracking-widest text-xs">
                  {plan.badge}
                </span>
                {plan.popular && (
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-black text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <div className="pb-6">
                <h3 className="text-2xl font-black text-[#F8FAFC] uppercase mb-4">{plan.name}</h3>
                
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-black tracking-tight text-white">${priceFor(plan)}</span>
                  <span className="text-xs text-[#CBD5E1] font-medium">/ {plan.durationLabel}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="inline-flex rounded-full bg-amber-500/10 border border-amber-500/25 px-3 py-1">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                      JUST ${monthlyPrice(plan)} / MONTH
                    </span>
                  </div>
                  {plan.savingsBadge && (
                    <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      {plan.savingsBadge}
                    </span>
                  )}
                </div>
              </div>

              <div className="my-4 border-t border-white/10" />

              <ul className="my-4 flex-grow space-y-3">
                {commonFeatures.map((featureText, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                    <span>
                      {featureText.replace('{devices}', devices.toString()).replace('{s}', devices > 1 ? 's' : '')}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => handleOrder(plan)}
                  className={`w-full py-4 text-xs font-extrabold uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "btn-primary-smootv"
                      : "btn-secondary-smootv"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Free Trial Banner */}
        <div className="mx-auto mt-16 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-[#0B0D14] p-6 border border-amber-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Gift className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white uppercase">Want to test Smootv first?</h3>
              <p className="text-xs text-[#CBD5E1]">Request a free trial pass to evaluate our 4K servers on your device.</p>
            </div>
          </div>
          <a
            href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20pass%20for%20Smootv."
            target="_blank"
            rel="noreferrer"
            className="btn-primary-smootv px-8 py-3 text-xs uppercase tracking-wider whitespace-nowrap font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.25)]"
          >
            GET FREE TRIAL
          </a>
        </div>

        {/* Features Grid */}
        <section className="mt-28">
          <div className="text-center mb-14">
            <span className="inline-block py-1 px-4 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              INCLUDED WITH ALL PLANS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#F8FAFC]">
              Everything You Need for <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Ultimate IPTV Streaming</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="smootv-card p-6 rounded-2xl flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-base">{title}</h3>
                <p className="text-[#CBD5E1] text-xs leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Billing FAQ */}
        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-3xl font-black text-white uppercase">Billing FAQ</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {billingQuestions.map((item) => (
              <div className="smootv-card p-6 rounded-xl space-y-2" key={item.question}>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  {item.question}
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
}
