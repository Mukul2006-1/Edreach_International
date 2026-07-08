import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Section, SectionLabel, FadeIn, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Edreach International — Your Bridge to South Asia. Built to Last.",
};

const problems = [
  {
    icon: "⚖️",
    title: "Regulatory Complexity",
    quote: '"We didn\'t know which licenses we needed until it was already too late to reverse."',
  },
  {
    icon: "🔗",
    title: "Unreliable Local Networks",
    quote: '"We worked with three consultants before finding someone who actually delivered what they promised."',
  },
  {
    icon: "🧩",
    title: "No End-to-End Ownership",
    quote: '"Every vendor handled one piece. Nobody owned the whole outcome. We were left coordinating chaos."',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Problem Section */}
      <Section>
        <FadeIn>
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="display-text text-4xl sm:text-5xl font-semibold text-ink-900 mt-4 mb-5 leading-tight max-w-3xl">
            Entering South Asia is Complicated.<br />
            <em className="not-italic text-ink-300">Your Existing Partners Know It Too.</em>
          </h2>
          <p className="text-ink-500 max-w-2xl leading-relaxed mb-16">
            Most foreign institutions approach South Asia with genuine ambition — and leave frustrated.
            The problem isn't South Asia. The problem is doing it without a partner who truly knows how to navigate it.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100}>
              <Card className="h-full hover:border-red-200">
                <div className="text-2xl mb-4">{p.icon}</div>
                <h3 className="font-display text-lg font-semibold text-ink-900 mb-3">{p.title}</h3>
                <p className="text-sm text-ink-300 italic leading-relaxed">{p.quote}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <ServicesOverview />
      <WhyUsSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
