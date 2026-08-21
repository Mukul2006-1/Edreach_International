import { whyUs } from "@/lib/content";
import { Section, SectionLabel, FadeIn, Card } from "@/components/ui";

export function WhyUsSection() {
  return (
    <Section className="bg-bg-base" grid>
      <FadeIn>
        <div className="text-center mb-16">
          <SectionLabel>Why Partner with Edreach</SectionLabel>
          <h2 className="display-text text-4xl sm:text-5xl font-semibold text-ink-900 mt-4 mb-6 leading-tight">
            Your Trusted Partner for<br />
            <em className="not-italic text-ink-300">Global Institutional Representation.</em>
          </h2>
          <p className="text-ink-500 max-w-2xl mx-auto leading-relaxed">
            We bring specialized knowledge, strategic connections, and dedicated support to maximize your international growth.
          </p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyUs.map((item, i) => (
          <FadeIn key={item.title} delay={i * 80}>
            <Card className="h-full border-border hover:border-azure-500/30 transition-all duration-500 ease-out flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#f0f4fa] border border-[#00206d]/10 flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-900 mb-3">{item.title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{item.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
