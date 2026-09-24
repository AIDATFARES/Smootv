import { CreditCard, Mail, PlayCircle, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Select Your Smootv Plan",
      description: "Choose your preferred subscription tier (1, 3, 6, 12, or 24 Months) that best fits your household streaming needs.",
      icon: CreditCard,
    },
    {
      number: "02",
      title: "Receive Automated Credentials",
      description: "Get your login credentials, Xtream Codes API key, and M3U playlist link delivered instantly via email and WhatsApp.",
      icon: Mail,
    },
    {
      number: "03",
      title: "Start 4K Streaming",
      description: "Log into your preferred player app (TiviMate, Smarters Pro, IBO) or Smootv Web Player and enjoy live TV instantly.",
      icon: PlayCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative z-10 border-t border-amber-500/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/25 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <span>SIMPLE 3-STEP SETUP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F8FAFC]">
            How <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Smootv</span> Works
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg mt-4">
            Fast, automated subscription setup with instant credentials delivery in under 3 minutes.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="smootv-card p-8 rounded-2xl relative flex flex-col justify-between overflow-hidden group"
              >
                {/* Large Background Step Number (Decorative) */}
                <div aria-hidden="true" className="absolute top-2 right-4 text-7xl font-black text-white/[0.04] group-hover:text-amber-500/10 transition-colors select-none font-mono pointer-events-none">
                  {step.number}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 p-[1px] mb-6 shadow-md">
                    <div className="w-full h-full bg-[#0B0D14] rounded-[11px] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>

                  <div className="text-xs font-mono font-bold text-amber-400 mb-2">STEP {step.number}</div>
                  
                  <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-white/20" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
