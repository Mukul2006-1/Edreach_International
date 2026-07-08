"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/content";
import clsx from "clsx";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-azure-700 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-white rounded-sm rotate-45" />
            </div>
            <span className="font-display text-xl font-semibold text-ink-900 tracking-tight">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={clsx(
                "text-sm font-medium transition-colors duration-200",
                pathname === link.href ? "text-azure-700" : "text-ink-500 hover:text-ink-900"
              )}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-2 px-5 py-2.5 bg-azure-700 hover:bg-azure-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-btn hover:shadow-btn-hover">
              Book a Call →
            </Link>
          </div>

          <button className="md:hidden p-2 text-ink-500 hover:text-ink-900" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-5 space-y-1.5">
              <span className={clsx("block h-0.5 bg-current rounded transition-all duration-300", menuOpen ? "rotate-45 translate-y-2" : "")} />
              <span className={clsx("block h-0.5 bg-current rounded transition-all duration-300", menuOpen ? "opacity-0" : "")} />
              <span className={clsx("block h-0.5 bg-current rounded transition-all duration-300", menuOpen ? "-rotate-45 -translate-y-2" : "")} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={clsx("fixed inset-0 z-40 md:hidden transition-all duration-300", menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
        <div className="absolute inset-0 bg-white/97 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-display text-3xl font-semibold text-ink-900 hover:text-azure-700 transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-4 px-8 py-3 bg-azure-700 text-white font-medium rounded-lg text-lg shadow-btn">
            Book a Call →
          </Link>
        </div>
      </div>
    </>
  );
}
