import Link from "next/link";
import { services } from "@/lib/content";
import { Section, SectionLabel, FadeIn, Card } from "@/components/ui";
import { h2 } from "framer-motion/client";

export function ServicesOverview() {
  return (
    <Section id="services" className="bg-bg-base" grid>
      <FadeIn>
        <SectionLabel>What We Do</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="display-text text-4xl sm:text-5xl font-semibold text-ink-900 leading-tight max-w-xl">
            Many Integrated Services.<br />
            <em className="not-italic text-ink-300">One Accountable Team.</em>
          </h2>
          <p className="text-ink-500 max-w-sm leading-relaxed text-sm lg:text-base">
            We don't hand you off between departments. Every service is connected, managed by one dedicated partner, accountable for the full outcome.
          </p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <FadeIn key={service.id} delay={i * 80}>
            <div className="bg-white border border-border rounded-2xl p-8 card-shadow hover:card-shadow-hover hover:border-[#009d9b]/30 transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#009d9b] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
              <div className="w-14 h-14 rounded-2xl bg-[#f0f4fa] border border-[#00206d]/10 flex items-center justify-center text-2xl mb-6">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-900 leading-tight mb-4">{service.title}</h3>
              <p className="text-ink-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">{service.description}</p>
              
              <Link href={`/services#${service.id}`}
                className="inline-flex items-center gap-1.5 text-[#009d9b] hover:text-[#007d7b] text-sm font-medium mt-2 group-hover:gap-2.5 transition-all duration-200">
                Learn More <span>→</span>
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={400}>
        <div className="mt-10 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 px-7 py-3 border border-border text-ink-500 hover:text-ink-900 hover:border-border-strong hover:bg-bg-muted rounded-lg transition-all text-sm font-medium">
            View Full Service Details →
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
