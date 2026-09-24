import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smootv - Frequently Asked Questions & Complete Help Center",
  description:
    "Have questions about Smootv? Find answers about compatible devices, 4K streaming quality, free trials, channel packages, and automated instant activation.",
  alternates: {
    canonical: "/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
