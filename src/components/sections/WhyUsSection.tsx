import { whyUs } from "@/lib/content";
import { Section, SectionLabel, FadeIn, Card } from "@/components/ui";

export function WhyUsSection() {
  return (
    <Section>
      <FadeIn>
        <div className="text-center mb-16">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="display-text text-4xl sm:text-5xl font-semibold text-ink-900 mt-4 mb-6 leading-tight">
            Not a Consultant. Not a Fixer.<br />
            <em className="not-italic text-ink-300">A Partner Who Owns the Outcome.</em>
          </h2>
          <p className="text-ink-500 max-w-2xl mx-auto leading-relaxed">
            There are generalist consultants. There are local agents. There are legal firms.
            We are none of those — and all of them, working as one accountable team.
          </p>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyUs.map((item, i) => (
          <FadeIn key={item.title} delay={i * 70}>
            <Card className="h-full bg-bg-surface hover:bg-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-jade-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-jade-600 text-xs">✓</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900">{item.title}</h3>
              </div>
              <p className="text-sm text-ink-500 leading-relaxed">{item.description}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
