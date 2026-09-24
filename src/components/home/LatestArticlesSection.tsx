import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, BookOpen } from "lucide-react";

export default function LatestArticlesSection() {
  // Select the 3 newest articles
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 relative z-10 border-t border-amber-500/10 bg-[#07080C]/70 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/25 mb-4 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SMOOTV GUIDES &amp; NEWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight mb-4">
            Latest IPTV <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">Articles &amp; Tutorials</span>
          </h2>
          <p className="text-[#CBD5E1] text-base sm:text-lg">
            Stay up to date with the latest Smootv guides, streaming optimization tips, and device installation insights.
          </p>
        </div>

        <div className={`grid gap-8 mb-14 ${displayPosts.length === 1 ? 'grid-cols-1 max-w-lg mx-auto' : displayPosts.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} aria-label={`Read guide: ${post.title}`}>
              <article className="smootv-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="h-48 relative overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={post.title}
                    src={post.coverImage || "/Smootv-internet-speed-guide-hero.webp"}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0B0D14] to-transparent"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#0B0D14]/90 backdrop-blur-md text-amber-400 rounded-full text-xs font-extrabold border border-amber-500/30">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-snug text-[#F8FAFC] group-hover:text-amber-300 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#CBD5E1] text-xs sm:text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {post.description}
                  </p>
                  <div className="mt-auto text-[#CBD5E1] text-xs font-medium flex items-center justify-between border-t border-white/5 pt-4">
                    <span>{post.date}</span>
                    <span className="flex items-center text-amber-400 group-hover:translate-x-1 transition-transform font-bold text-xs">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="btn-secondary-smootv px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>View All IPTV Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
