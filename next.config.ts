import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Article 1: Speed requirements
      {
        source: "/blog/iptv-internet-speed-requirements",
        destination: "/blog/iptv-speed-requirements-guide",
        permanent: true,
      },
      {
        source: "/blog/internet-speed-for-iptv",
        destination: "/blog/iptv-speed-requirements-guide",
        permanent: true,
      },
      // Article 2: Firestick apps
      {
        source: "/blog/best-iptv-players-firestick",
        destination: "/blog/best-iptv-apps-firestick",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-apps-firestick-2026",
        destination: "/blog/best-iptv-apps-firestick",
        permanent: true,
      },
      // Article 3: Smart TV apps
      {
        source: "/blog/best-smart-tv-iptv-apps",
        destination: "/blog/best-smart-tv-iptv-players",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-apps-smart-tv-2026",
        destination: "/blog/best-smart-tv-iptv-players",
        permanent: true,
      },
      // Article 4: Troubleshooting
      {
        source: "/blog/fix-iptv-not-working-troubleshooting",
        destination: "/blog/how-to-fix-iptv-not-working",
        permanent: true,
      },
      {
        source: "/blog/iptv-not-working-2026",
        destination: "/blog/how-to-fix-iptv-not-working",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

