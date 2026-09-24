import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smootv - 24/7 Customer Support | WhatsApp & Email Assistance",
  description:
    "Need help with your Smootv subscription or setup? Contact our 24/7 technical team on WhatsApp or email for instant support in under 15 minutes.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
