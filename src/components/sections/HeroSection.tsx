"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// const tags = ["Education Consulting", "Legal & Compliance", "R&D Partnerships", "Training Programs", "Student Recruitment", "End-to-End Ownership"];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);

  const t = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(22px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">

      {/* <Image
        src="/earth4.webp"
        alt=""
        fill
        priority
        className="object-cover opacity-12"
      />

      <div className="absolute inset-0 bg-white/65" /> */}

      {/* Soft glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-azure-100 rounded-full blur-[100px] opacity-70" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[300px] bg-jade-100 rounded-full blur-[80px] opacity-50" />
      </div>

      {/* Decorative rings */}
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none opacity-25">
        <div className="relative w-80 h-80">
          <div className="absolute inset-0 rounded-full border border-azure-700/30 animate-[spin_25s_linear_infinite]" />
          <div className="absolute inset-10 rounded-full border border-azure-600/20 animate-[spin_18s_linear_infinite_reverse]" />
          <div className="absolute inset-20 rounded-full border border-jade-600/15 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-[38%] bg-azure-700/20 rounded-full blur-sm" />
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10 py-20 w-full">
        {/* Badge
        <div style={t(0)} className="inline-flex items-center gap-2 bg-azure-100 border border-azure-500/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 bg-jade-600 rounded-full animate-pulse" />
          <span className="font-mono text-[11px] tracking-widest text-azure-700 uppercase">Now Accepting Global Partners — 2026</span>
        </div> */}

        {/* Badge */}
        <div style={t(0)} className="inline-flex items-center gap-2.5 bg-[#f0f4fa] border border-[#00206d]/10 rounded-full px-5 py-2 mb-8" >
          <span className="w-1.5 h-1.5 bg-[#00206d] rounded-full animate-pulse" />
          <span className="mono-label">
            Now Accepting Global Partners — 2026
          </span>
        </div>

        {/* Headline */}
        <h1 style={t(100)} className="display-text text-5xl sm:text-6xl lg:text-7xl font-bold text-ink-900 leading-[1.05] mb-6 max-w-4xl">
          The End{"\u2212"}to{"\u2212"}End Partner<br />
          For Global Institutions to{" "}<br />
          <span className="shimmer-text">Enter South Asia.</span>
        </h1>

        {/* Sub */}
        <p style={t(200)} className="text-lg sm:text-xl text-ink-500 leading-relaxed mb-10 max-w-2xl">
          From partnership strategy and legal setup to academic recruitment and R&D collaboration —
          we handle every step, so your institution focuses entirely on its mission.
        </p>

        {/* CTAs */}
        <div style={t(300)} className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#009d9b] hover:bg-[#007d7b] text-white font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-btn hover:shadow-btn-hover text-sm">
            Book a Discovery Call <span>→</span>
          </Link>
          <Link href="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-ink-500 hover:text-ink-900 hover:border-border-strong hover:bg-bg-muted rounded-lg transition-all duration-200 text-sm">
            Explore Our Services
          </Link>
        </div>

        {/* Tags */}
        {/* <div style={t(500)} className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-bg-muted border border-border rounded-full font-mono text-[10px] tracking-wider text-ink-300 uppercase">
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
}
