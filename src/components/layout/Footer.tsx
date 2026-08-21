import Link from "next/link";
import { siteConfig, navLinks, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <img src="/EdreachLogo_website.png" alt="Edreach International Logo" className="h-14 w-auto object-contain" />
              <span className="font-display text-2xl font-semibold text-[#00206d]">{siteConfig.name}</span>
            </Link>
            <p className="text-ink-300 text-base leading-relaxed max-w-sm">{siteConfig.tagline}</p>
            <p className="text-ink-300 text-base mt-2 max-w-sm leading-relaxed">
              South Asia's dedicated end-to-end partnership firm for global institutions.
            </p>
            {/* <div className="flex gap-3 mt-6">
              {[{ href: siteConfig.linkedin, label: "LinkedIn", text: "in" }, { href: siteConfig.twitter, label: "X", text: "𝕏" }].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-ink-300 hover:text-azure-700 hover:border-azure-500 transition-all text-xs"
                  aria-label={s.label}>{s.text}</a>
              ))}
            </div> */}
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row gap-12 sm:gap-20 lg:gap-32 md:justify-center md:pl-10 lg:pl-16">
            <div className="min-w-[120px]">
              <p className="mono-label mb-5">Company</p>
              <ul className="space-y-3">
                {[...navLinks, { label: "Contact Us", href: "/contact" }].map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-ink-300 hover:text-azure-700 transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="max-w-[260px]">
              <p className="mono-label mb-5">Contact Us</p>
              <div className="flex flex-col gap-6 text-sm text-ink-300">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-azure-700 transition-colors">{siteConfig.email}</a>
                <span className="leading-relaxed">{siteConfig.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-ink-100">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
