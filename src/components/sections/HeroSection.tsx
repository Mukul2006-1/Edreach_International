"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

      {/* Soft glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-azure-100 rounded-full blur-[100px] opacity-70" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[300px] bg-jade-100 rounded-full blur-[80px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-20 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 lg:justify-between">
        
        {/* Left Hand Side: Text Content */}
        <div className="flex-1 max-w-3xl lg:max-w-[55%]">
          {/* Headline */}
          <h1 style={t(100)} className="display-text text-5xl sm:text-6xl lg:text-7xl font-bold text-ink-900 leading-[1.05] mb-6">
            The End{"\u2212"}to{"\u2212"}End Partner<br />
            For Global Institutions to{" "}<br />
            <span className="shimmer-text">Enter South Asia.</span>
          </h1>

          {/* Sub */}
          <p style={t(200)} className="text-lg sm:text-xl text-ink-500 leading-relaxed mb-10 max-w-xl">
            From partnership strategy to academic recruitment and R&D collaboration —
            we handle every step, so your institution focuses entirely on its mission.
          </p>

          {/* CTAs */}
          <div style={t(300)} className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-0">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#009d9b] hover:bg-[#007d7b] text-white font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-btn hover:shadow-btn-hover text-sm">
              Book a Discovery Call <span>→</span>
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-ink-500 hover:text-ink-900 hover:border-border-strong hover:bg-bg-muted rounded-lg transition-all duration-200 text-sm">
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Right Hand Side: Image Space */}
        <div className="flex-1 w-full flex justify-center lg:justify-end lg:-mt-8" style={t(400)}>
          <div className="w-full max-w-2xl aspect-[4/3] lg:aspect-[3/2] rounded-2xl relative overflow-hidden shadow-xl border border-border">
            <Image 
              src="/website_pic.png"
              alt="Hero image"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
