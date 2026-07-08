import { Metadata } from "next";
import { Section, SectionLabel, FadeIn, Card, PageHero } from "@/components/ui";
import { values } from "@/lib/content";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Edreach International — our mission, vision, values, and the team behind India's trusted institutional partnership firm.",
};

const teamMembers = [
  { name: "Deepak Verma", role: "Founder & Managing Director", bio: "7+ years bridging international institutions with India's complex regulatory and academic landscape.", initials: "YN" },
  { name: "Team Member", role: "Head of Legal & Compliance", bio: "Former regulatory counsel with expertise in foreign collaboration agreements and FCRA compliance.", initials: "TM" },
  { name: "Team Member", role: "Director, Education Partnerships", bio: "Built recruitment pipelines for 20+ international universities across India's top student markets.", initials: "TM" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Edreach International"
        title={<>Built for Institutions That<br /><em className="not-italic text-ink-300">Think Long-Term.</em></>}
        subtitle=""
      />

      {/* Story */}
      <Section className="bg-bg-base" grid>
        <FadeIn>
          <h2 className="display-text text-3xl sm:text-4xl font-semibold text-ink-900 mt-4 mb-6 leading-tight text-center">
            Your Trusted Partner in International Education Growth
          </h2>
          <div className="space-y-5 text-lg text-ink-500 leading-7">

            <p>Edreach International is a specialized education consulting and market representation company dedicated to helping universities, colleges, and educational institutions achieve their international recruitment, partnership, and market expansion objectives across South Asia.</p>
            <p>Founded with the vision of providing institutions with value-driven, market-ready solutions, we act as an extension of your international team, supporting sustainable growth through strategic representation, recruitment development, stakeholder engagement, and market intelligence.</p>
            <p>Our passionate team of specialists in International Education, Market Entry Advisory, Human Resources, Taxation, and Compliance brings extensive industry expertise and first-hand market experience. We support institutions in identifying opportunities, navigating complex market dynamics, and building meaningful partnerships that drive long-term success.</p>
            <p>With a strong regional presence and an extensive network of trusted education consultants, schools, counsellors, and industry stakeholders, we help institutions strengthen their brand visibility, enhance student recruitment outcomes, and establish a sustainable presence in emerging education markets.</p>

          </div>
        </FadeIn>
      </Section>

      {/* Mission & Vision */}
      {/* <Section className="bg-white" grid>
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Purpose</SectionLabel>
            <h2 className="display-text text-4xl font-semibold text-ink-900 mt-4">What Drives Us</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn>
            <Card className="h-full border-azure-500/20 bg-azure-50">
              <p className="mono-label mb-5">Mission</p>
              <p className="font-display text-2xl font-medium text-ink-900 leading-snug mb-4">
                "To give every global institution a trusted, expert pathway into India — removing every barrier between their ambition and their results."
              </p>
              <p className="text-sm text-ink-500 leading-relaxed">
                We remove complexity, not just describe it. Every engagement ends with your institution operating effectively in India — not just understanding why it's difficult.
              </p>
            </Card>
          </FadeIn>
          <FadeIn delay={100}>
            <Card className="h-full border-jade-600/20 bg-jade-100/40">
              <p className="mono-label mb-5" style={{ color: "#059669" }}>Vision</p>
              <p className="font-display text-2xl font-medium text-ink-900 leading-snug mb-4">
                "A world where international collaboration with India is seamless, reliable, and built on genuine partnerships — not paperwork and uncertainty."
              </p>
              <p className="text-sm text-ink-500 leading-relaxed">
                India is one of the world's most consequential intellectual and economic partners. We want every institution to access that potential without unnecessary friction.
              </p>
            </Card>
          </FadeIn>
        </div>
      </Section> */}

      {/* Values */}
      {/* <Section className="bg-bg-base" grid>
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="display-text text-4xl font-semibold text-ink-900 mt-4">How We Work</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 80}>
              <Card className="h-full text-center">
                <div className="w-10 h-10 rounded-full bg-azure-100 border border-azure-500/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-azure-700 font-mono text-sm font-medium">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink-900 mb-3">{v.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{v.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section> */}

      {/* Approach */}
      {/* <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="display-text text-3xl sm:text-4xl font-semibold text-ink-900 mt-4 mb-6 leading-tight">
              Boutique Firm.<br /><em className="not-italic text-ink-300">International Standard.</em>
            </h2>
            <div className="space-y-4 text-ink-500 leading-relaxed text-sm">
              <p>We deliberately remain a focused, boutique firm. Not because we lack ambition — but because the institutions we serve deserve senior attention, not handoffs to junior staff.</p>
              <p>Every client engagement is managed at the principal level. You work directly with the people who designed your strategy and who understand every nuance of your institution's goals.</p>
              <p>We hold ourselves to the standards of the world's best institutional service firms while maintaining the local expertise that only a deeply India-rooted team can provide.</p>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="space-y-4">
              {[
                { title: "Senior-led, always", desc: "You engage with our principals — not account managers who relay messages." },
                { title: "Scope clarity before work begins", desc: "Deliverables, timelines, and success metrics agreed in writing before we start." },
                { title: "No offshore hand-offs", desc: "Your work stays with our team. We do not outsource to unknown third parties." },
                { title: "Honest about limitations", desc: "We only take engagements we're confident we can deliver. We say so upfront." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-bg-muted border border-border rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-jade-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-jade-600 text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-ink-900 mb-1">{item.title}</p>
                    <p className="text-sm text-ink-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section> */}

      {/* Team */}
      {/* <Section className="bg-bg-base" grid>
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Our Team</SectionLabel>
            <h2 className="display-text text-4xl font-semibold text-ink-900 mt-4">The People Behind the Partnership</h2>
            <p className="text-ink-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              A focused team of institutional specialists — deeply India-rooted, globally minded.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <FadeIn key={member.name + i} delay={i * 100}>
              <Card className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-azure-100 border border-azure-500/20 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-lg font-semibold text-azure-700">{member.initials}</span>
                </div>
                <p className="font-display text-lg font-semibold text-ink-900 mb-1">{member.name}</p>
                <p className="text-sm font-medium text-ink-500 mb-4 tracking-wide">{member.role}</p>
                <p className="text-sm text-ink-500 leading-relaxed">{member.bio}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section> */}

      <CtaSection />
    </>
  );
}
