import { Metadata } from "next";
import { Section, SectionLabel, FadeIn, Card, PageHero } from "@/components/ui";
import { services } from "@/lib/content";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Services",
  description: "End-to-end services for global institutions entering India: education consulting, training, R&D partnerships, and legal advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title={<>Many Integrated Services.<br /><em className="not-italic text-ink-300">One Accountable Team.</em></>}
        subtitle="We don't hand you off between departments. Every service is connected, managed by one dedicated partner, accountable for the full outcome."
      />

      <Section className="bg-bg-base" grid>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 80}>
              <div
                id={service.id}
                className="bg-white border border-border rounded-2xl p-8 card-shadow hover:card-shadow-hover hover:border-[#009d9b]/30 transition-all duration-300 scroll-mt-24 h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#f0f4fa] border border-[#00206d]/10 flex items-center justify-center text-2xl mb-6">
                  {service.icon}
                </div>
                <h2 className="font-display text-xl font-semibold text-ink-900 leading-tight mb-4">{service.title}</h2>
                <p className="text-ink-500 text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>

                {service.list && (
                  <ul className="space-y-2.5 mt-2">
                    {service.list.map((item) => (
                      <li key={item} className="flex gap-2.5 items-start">
                        <span className="text-[#009d9b] text-xs mt-1 flex-shrink-0">→</span>
                        <span className="text-ink-500 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Integration callout */}
      <Section className="bg-white" grid>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel>Our Integration Model</SectionLabel>
            <h2 className="display-text text-3xl sm:text-4xl font-semibold text-ink-900 mt-4 mb-6">
              Services That Work Together,<br />
              <em className="not-italic text-ink-300">Not in Isolation.</em>
            </h2>
            <p className="text-ink-500 leading-relaxed mb-10 max-w-3xl mx-auto">
              Most institutions don't need one service — they need multiple services coordinated seamlessly.
              A university entering India needs legal setup, student recruitment, and potentially training delivery
              — all aligned to the same timeline and strategy. That's exactly what one accountable partner provides.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
              {services.map((s) => (
                <div key={s.id} className="p-5 bg-bg-muted border border-border rounded-xl text-center hover:border-[#009d9b]/30 hover:bg-[#f0f4fa] transition-all">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-xs text-ink-500 leading-snug">{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      <CtaSection />
    </>
  );
}
