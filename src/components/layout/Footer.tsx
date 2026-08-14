import Link from "next/link";
import { siteConfig, navLinks, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <img src="/EdreachLogo_website.png" alt="Edreach International Logo" className="h-12 w-auto object-contain" />
              <span className="font-display text-xl font-semibold text-[#00206d]">{siteConfig.name}</span>
            </Link>
            <p className="text-ink-300 text-sm leading-relaxed max-w-xs">{siteConfig.tagline}</p>
            <p className="text-ink-100 text-sm mt-3 max-w-xs leading-relaxed">
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

          <div>
            <p className="mono-label mb-5">Company</p>
            <ul className="space-y-3">
              {[...navLinks, { label: "Contact", href: "/contact" }].map(link => (
                <li key={link.href}><Link href={link.href} className="text-sm text-ink-300 hover:text-azure-700 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label mb-5">Services</p>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.id}><Link href={`/services#${s.id}`} className="text-sm text-ink-300 hover:text-azure-700 transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-ink-100">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-azure-700 transition-colors">{siteConfig.email}</a>
            <br />
            <span>{siteConfig.location}</span>
          </div>
          <p className="text-sm text-ink-100">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
