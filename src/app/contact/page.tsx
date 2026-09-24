"use client";

import { Mail, MessageCircle, ArrowRight, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex-grow pt-28 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative z-10">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-400 font-bold text-xs tracking-widest uppercase mb-6 border border-amber-500/25 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          24/7 SMOOTV SUPPORT CENTER
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#F8FAFC]">
          Get in Touch with <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Smootv</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#CBD5E1]">
          We are here to assist with subscription setup, device configuration, or channel inquiries. Send us a message and our technical team will respond quickly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="smootv-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-4 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="font-bold text-xl text-white mb-2">Email Support</h2>
            <p className="text-xs text-[#CBD5E1] mb-6">For general inquiries and account assistance.</p>
            <a
              className="text-amber-400 font-bold text-sm hover:underline"
              href="mailto:support@smootv.top"
            >
              support@smootv.top
            </a>
          </div>

          <div className="smootv-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h2 className="font-bold text-xl text-white mb-2">WhatsApp Live Support</h2>
            <p className="text-xs text-[#CBD5E1] mb-6">
              Fastest response time for instant setup help.
            </p>
            <a
              className="text-[#25D366] font-bold text-sm hover:underline flex items-center gap-1.5"
              href="https://wa.me/447882781998?text=Hello,%20I%20need%20support%20for%20Smootv."
              target="_blank"
              rel="noreferrer"
            >
              Start Live Chat <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="smootv-card p-8 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="font-bold text-xl text-white mb-2">Response Time</h2>
            <p className="text-xs text-[#CBD5E1]">
              Average response time: <strong className="text-white">Under 15 minutes</strong> on WhatsApp.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="smootv-card p-8 md:p-12 rounded-2xl h-full">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-6">
              Send Us a Message
            </h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#CBD5E1]" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="bg-[#07080C] border border-white/10 focus:border-amber-400 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none transition-all text-sm"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#CBD5E1]" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="bg-[#07080C] border border-white/10 focus:border-amber-400 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none transition-all text-sm"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#CBD5E1]" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="bg-[#07080C] border border-white/10 focus:border-amber-400 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none transition-all text-sm"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#CBD5E1]" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="bg-[#07080C] border border-white/10 focus:border-amber-400 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none transition-all resize-none text-sm"
                  id="message"
                  name="message"
                  placeholder="Describe your question or setup request..."
                  rows={6}
                ></textarea>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  className="btn-primary-smootv px-8 py-4 text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  type="submit"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
