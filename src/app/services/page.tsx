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
        title={<>Four Integrated Services.<br /><em className="not-italic text-ink-300">One Accountable Team.</em></>}
        subtitle="We don't hand you off between departments. Every service is connected, managed by one dedicated partner, accountable for the full outcome."
      />

      <Section className="bg-bg-base" grid>
        <div className="space-y-6">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 80}>
              <div
                id={service.id}
                className="bg-white border border-border rounded-2xl p-8 lg:p-12 card-shadow hover:card-shadow-hover hover:border-azure-500/30 transition-all duration-300 scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* Header — full width */}
                  <div className="lg:col-span-3 flex items-start gap-5 pb-8 border-b border-border">
                    <div className="w-14 h-14 rounded-2xl bg-azure-100 border border-azure-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <p className="mono-label mb-1">{`Service 0${i + 1}`}</p>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink-900 leading-tight mb-2">{service.title}</h2>
                      <p className="text-ink-500 text-base">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Problem */}
                  <div>
                    <p className="mono-label mb-4" style={{ color: "#DC2626" }}>The Problem</p>
                    <p className="text-ink-500 leading-relaxed text-sm">{service.problem}</p>
                  </div>

                  {/* What we provide */}
                  <div>
                    <p className="mono-label mb-4">What We Provide</p>
                    <ul className="space-y-2.5">
                      {service.what.map((item) => (
                        <li key={item} className="flex gap-2.5 items-start">
                          <span className="text-azure-700 text-xs mt-1 flex-shrink-0">→</span>
                          <span className="text-ink-500 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <p className="mono-label mb-4" style={{ color: "#059669" }}>Benefits for Your Institution</p>
                    <ul className="space-y-2.5">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-2.5 items-start">
                          <div className="w-4 h-4 rounded-full bg-jade-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-jade-600 text-[9px]">✓</span>
                          </div>
                          <span className="text-ink-500 text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Integration callout */}
      <Section className="bg-white" grid>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Our Integration Model</SectionLabel>
            <h2 className="display-text text-3xl sm:text-4xl font-semibold text-ink-900 mt-4 mb-6">
              Services That Work Together,<br />
              <em className="not-italic text-ink-300">Not in Isolation.</em>
            </h2>
            <p className="text-ink-500 leading-relaxed mb-10">
              Most institutions don't need one service — they need multiple services coordinated seamlessly.
              A university entering India needs legal setup, student recruitment, and potentially training delivery
              — all aligned to the same timeline and strategy. That's exactly what one accountable partner provides.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {services.map((s) => (
                <div key={s.id} className="p-5 bg-bg-muted border border-border rounded-xl text-center hover:border-azure-500/30 hover:bg-azure-50 transition-all">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-xs text-ink-500 leading-snug">{s.title.split("&")[0]}</p>
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
