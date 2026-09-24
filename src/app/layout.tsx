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
  title: "Smootv - #1 Premium 4K IPTV Service | 50,000+ Channels & VOD",
  description: "Stream 50,000+ live 4K channels, PPV sports & 200,000+ movies on Smootv. Anti-freeze server technology, instant automated activation & 24/7 support. Start today!",
  metadataBase: new URL("https://www.smootv.top"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/icon.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-icon.png?v=2",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Smootv - #1 Premium 4K IPTV Service | 50,000+ Channels & VOD",
    description: "Stream 50,000+ live 4K channels, PPV sports & 200,000+ movies on Smootv. Anti-freeze server technology, instant automated activation & 24/7 support. Start today!",
    url: "https://www.smootv.top",
    siteName: "Smootv",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smootv - #1 Premium 4K IPTV Service | 50,000+ Channels & VOD",
    description: "Stream 50,000+ live 4K channels, PPV sports & 200,000+ movies on Smootv. Anti-freeze server technology, instant automated activation & 24/7 support. Start today!",
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
      <body className="global-grid-bg text-[#F8FAFC] min-h-screen flex flex-col antialiased selection:bg-amber-500 selection:text-black">
        {/* Header Navigation */}
        <Navbar />

        <div className="flex-grow flex flex-col">{children}</div>

        {/* Footer */}
        <footer className="w-full mt-auto border-t border-amber-500/15 bg-[#07080C]">
          <div className="max-w-[1400px] mx-auto px-6 py-16 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
              
              {/* Brand Column */}
              <div className="lg:col-span-2 space-y-4">
                <Link href="/" className="inline-block">
                  <BrandLogo />
                </Link>
                <p className="text-sm text-[#CBD5E1] max-w-sm leading-relaxed">
                  Smootv is a leading global IPTV platform providing high-bitrate live television, 4K sports, and VOD entertainment with 99.9% server stability.
                </p>
                <div className="pt-2 text-xs text-[#8E98A8]">
                  © 2026 Smootv (www.smootv.top). All rights reserved.
                </div>
              </div>

              {/* Product Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Product</h3>
                <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
                  <li><Link href="/pricing" className="hover:text-amber-400 transition-colors">Plans &amp; Pricing</Link></li>
                  <li><Link href="/channels" className="hover:text-amber-400 transition-colors">Channel List</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-amber-400 transition-colors">How It Works</Link></li>
                  <li><Link href="/reseller" className="hover:text-amber-400 transition-colors">Reseller Panel</Link></li>
                </ul>
              </div>

              {/* Support Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Support</h3>
                <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
                  <li><Link href="/installation" className="hover:text-amber-400 transition-colors">Install Guide</Link></li>
                  <li><Link href="/faq" className="hover:text-amber-400 transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
                  <li>
                    <a 
                      href="https://wa.me/447882781998" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>WhatsApp Support</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company & Legal Column */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Company</h3>
                <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
                  <li><Link href="/blog" className="hover:text-amber-400 transition-colors">Blog &amp; Guides</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/refund-policy" className="hover:text-amber-400 transition-colors">Refund Policy</Link></li>
                  <li><Link href="/dmca" className="hover:text-amber-400 transition-colors">DMCA Disclaimer</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </footer>

        {/* Global Floating WhatsApp Support Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
