import Link from "next/link";
import { processSteps } from "@/lib/content";
import { Section, SectionLabel, FadeIn } from "@/components/ui";

export function ProcessSection() {
  return (
    <Section className="bg-bg-base" grid>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <FadeIn>
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="display-text text-4xl sm:text-5xl font-semibold text-ink-900 mt-4 mb-6 leading-tight">
            A Structured Partnership,<br />
            <em className="not-italic text-ink-300">Not Open-Ended.</em>
          </h2>
          <p className="text-ink-500 leading-relaxed mb-8">
            You always know exactly where things stand. Every milestone agreed upfront.
            No black boxes, no scope creep, no surprises.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-azure-700 hover:bg-azure-600 text-white font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-btn hover:shadow-btn-hover text-sm">
            Start With a Discovery Call →
          </Link>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-azure-700 via-jade-600/50 to-transparent" />
          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 90}>
                <div className="flex gap-6 pb-8 relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-azure-700 flex items-center justify-center z-10 shadow-sm">
                    <span className="font-mono text-[10px] text-azure-700 font-medium">{step.number}</span>
                  </div>
                  <div className="pt-1.5">
                    <p className="font-mono text-[10px] text-jade-600 tracking-widest uppercase mb-1">{step.timing}</p>
                    <h3 className="font-display text-lg font-semibold text-ink-900 mb-1.5">{step.title}</h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
