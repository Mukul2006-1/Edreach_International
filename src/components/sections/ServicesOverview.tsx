import Link from "next/link";
import { services } from "@/lib/content";
import { Section, SectionLabel, FadeIn, Card } from "@/components/ui";

export function ServicesOverview() {
  return (
    <Section id="services" className="bg-bg-base" grid>
      <FadeIn>
        <SectionLabel>What We Do</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="display-text text-4xl sm:text-5xl font-semibold text-ink-900 leading-tight max-w-xl">
            Four Integrated Services.<br />
            <em className="not-italic text-ink-300">One Seamless Engagement.</em>
          </h2>
          <p className="text-ink-500 max-w-sm leading-relaxed text-sm lg:text-base">
            One team. One accountable partner. Every service coordinated toward the same outcome.
          </p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map((service, i) => (
          <FadeIn key={service.id} delay={i * 80}>
            <Card accent="blue" className="group h-full flex flex-col relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-azure-700 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-full" />
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-azure-100 border border-azure-500/20 flex items-center justify-center text-xl flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-ink-900 leading-tight">{service.title}</p>
                  <p className="text-xs text-ink-300 mt-1">{service.tagline}</p>
                </div>
              </div>
              <p className="text-sm text-ink-500 leading-relaxed flex-grow">{service.problem}</p>
              <Link href={`/services#${service.id}`}
                className="inline-flex items-center gap-1.5 text-azure-700 hover:text-azure-600 text-xs font-medium mt-6 group-hover:gap-2.5 transition-all duration-200">
                Learn More <span>→</span>
              </Link>
            </Card>
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
