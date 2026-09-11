import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import BrandLogo from "@/components/ui/BrandLogo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "area69iptv | #1 Premium 4K IPTV Subscription Service 2026",
  description: "Experience premium IPTV streaming with area69iptv. Access 50,000+ live international channels, 200,000 VOD movies, and live 4K sports with anti-freeze server technology and instant automated setup.",
  metadataBase: new URL("https://www.area69iptv4k.shop"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "area69iptv | #1 Premium 4K IPTV Subscription Service 2026",
    description: "Experience premium IPTV streaming with area69iptv. Access 50,000+ live international channels, 200,000 VOD movies, and live 4K sports with anti-freeze server technology and instant automated setup.",
    url: "https://www.area69iptv4k.shop",
    siteName: "area69iptv",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "area69iptv | #1 Premium 4K IPTV Subscription Service 2026",
    description: "Experience premium IPTV streaming with area69iptv. Access 50,000+ live international channels, 200,000 VOD movies, and live 4K sports with anti-freeze server technology and instant automated setup.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head />
      <body className="global-grid-bg text-[#F8FAFC] min-h-screen flex flex-col antialiased selection:bg-cyan-500 selection:text-black">
        {/* Header Navigation */}
        <Navbar />

        <div className="flex-grow flex flex-col">{children}</div>

        {/* Footer */}
        <footer className="w-full mt-auto border-t border-white/[0.08] bg-[#05070D]">
          <div className="max-w-[1400px] mx-auto px-6 py-16 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
              
              {/* Brand Column */}
              <div className="lg:col-span-2 space-y-4">
                <Link href="/" className="inline-block">
                  <BrandLogo />
                </Link>
                <p className="text-sm text-[#CBD5E1] max-w-sm leading-relaxed">
                  area69iptv is a leading global IPTV platform providing high-bitrate live television, 4K sports, and VOD entertainment with 99.9% server stability.
                </p>
                <div className="pt-2 text-xs text-[#94A3B8]">
                  © 2026 area69iptv (www.area69iptv4k.shop). All rights reserved.
                </div>
              </div>

              {/* Product Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Product</h3>
                <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
                  <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">Plans &amp; Pricing</Link></li>
                  <li><Link href="/channels" className="hover:text-cyan-400 transition-colors">Channel List</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</Link></li>
                  <li><Link href="/reseller" className="hover:text-cyan-400 transition-colors">Reseller Panel</Link></li>
                </ul>
              </div>

              {/* Support Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Support</h3>
                <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
                  <li><Link href="/installation" className="hover:text-cyan-400 transition-colors">Install Guide</Link></li>
                  <li><Link href="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
                  <li>
                    <a 
                      href="https://wa.me/447882781998" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>WhatsApp Support</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company & Legal Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Company</h3>
                <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
                  <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog &amp; Guides</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/refund-policy" className="hover:text-cyan-400 transition-colors">Refund Policy</Link></li>
                  <li><Link href="/dmca" className="hover:text-cyan-400 transition-colors">DMCA Disclaimer</Link></li>
                </ul>
              </div>

            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4">
              <div>High Performance 4K Cloud Streaming Infrastructure</div>
              <div className="flex items-center gap-4">
                <Link href="/privacy-policy" className="text-[#94A3B8] hover:text-white transition-colors">Privacy</Link>
                <Link href="/refund-policy" className="text-[#94A3B8] hover:text-white transition-colors">Refunds</Link>
                <Link href="/dmca" className="text-[#94A3B8] hover:text-white transition-colors">DMCA</Link>
              </div>
            </div>
          </div>
        </footer>

        <WhatsAppButton />
      </body>
    </html>
  );
}
