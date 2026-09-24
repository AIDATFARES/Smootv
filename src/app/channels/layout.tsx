import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smootv - 50,000+ Live IPTV Channels Lineup & 4K Sports Schedule",
  description: "Explore the complete Smootv channel list. Over 50,000 live channels & 200,000+ VODs from 150+ countries. Stream Premier League, NFL, UFC PPV in buffer-free 4K!",
  alternates: {
    canonical: "/channels",
  },
  openGraph: {
    title: "Smootv - 50,000+ Live IPTV Channels Lineup & 4K Sports Schedule",
    description: "Explore the complete Smootv channel list. Over 50,000 live channels & 200,000+ VODs from 150+ countries. Stream Premier League, NFL, UFC PPV in buffer-free 4K!",
    url: "https://www.smootv.top/channels",
    siteName: "Smootv",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
