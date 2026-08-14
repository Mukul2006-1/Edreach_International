"use client";
import { useEffect, useRef, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

export function FadeIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={className}
      style={{ opacity: 0, transform: "translateY(18px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
      {children}
    </div>
  );
}

export function Section({ children, className, id, grid }: { children: ReactNode; className?: string; id?: string; grid?: boolean }) {
  return (
    <section id={id} className={clsx("py-24 px-6 relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto relative z-10">{children}</div>
    </section>
  );
}

export function SectionLabel({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <p className="mono-label mb-4 flex items-center gap-2" style={color ? { color } : undefined}>
      <span className="w-5 h-px bg-[#009d9b] inline-block" />
      {children}
    </p>
  );
}

export function Button({ href, onClick, children, variant = "primary", className, type = "button", disabled }:
  { href?: string; onClick?: () => void; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string; type?: "button" | "submit" | "reset"; disabled?: boolean }) {
  const base = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200";
  const variants = {
    primary:   "bg-[#009d9b] hover:bg-[#007d7b] text-white hover:-translate-y-0.5 shadow-btn hover:shadow-btn-hover",
    secondary: "border border-border text-ink-500 hover:border-border-strong hover:text-ink-900 hover:bg-bg-muted",
    ghost: "text-azure-700 hover:text-azure-600 underline underline-offset-4",
  };
  const cls = clsx(base, variants[variant], disabled && "opacity-50 pointer-events-none", className);
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cls} disabled={disabled}>{children}</button>;
}

export function Card({ children, className, hover = true, accent }: { children: ReactNode; className?: string; hover?: boolean; accent?: "blue" | "green" }) {
  const accents = { blue: "hover:border-azure-500/40", green: "hover:border-jade-600/30" };
  return (
    <div className={clsx(
      "bg-white border border-border rounded-2xl p-8 transition-all duration-300 card-shadow",
      hover && "hover:-translate-y-1 hover:card-shadow-hover",
      accent && accents[accent],
      className
    )}>
      {children}
    </div>
  );
}

export function Divider() {
  return <div className="w-full h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />;
}

export function PageHero({ label, title, subtitle }: { label: string; title: ReactNode; subtitle: string }) {
  return (
    <section className="pt-40 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-azure-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <FadeIn><SectionLabel>{label}</SectionLabel></FadeIn>
        <FadeIn delay={100}>
          <h1 className="display-text text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink-900 mt-4 mb-6">{title}</h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg text-ink-500 leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
        </FadeIn>
      </div>
    </section>
  );
}
