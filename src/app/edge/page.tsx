import { Metadata } from "next";
import { Section, FadeIn, Card, PageHero } from "@/components/ui";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
    title: "Our Edge",
    description: "Discover the Edreach International advantage — deep regional expertise, tailored strategies, and end-to-end representation.",
};

const edges = [
  { icon: "🌍", title: "Deep Regional Expertise", description: "Our team possesses extensive knowledge of student trends, recruitment channels, institutional positioning, and market dynamics across India and South Asia." },
  { icon: "🤝", title: "Strong Partner Network", description: "We have developed relationships with schools, education consultants, counsellors, training providers, and industry stakeholders, enabling institutions to connect with high-quality recruitment channels." },
  { icon: "🎯", title: "Tailored Market Strategies", description: "Every institution is unique. We create customized recruitment and business development plans based on your objectives, target audience, budget, and timelines." },
  { icon: "🏛️", title: "Dedicated Institutional Support", description: "We provide personalized account management, ensuring your institution receives focused attention and strategic guidance throughout the partnership." },
  { icon: "💼", title: "End-to-End Representation", description: "From market research and partner development to recruitment events and stakeholder engagement, we support institutions at every stage of their international growth journey." },
  { icon: "🌱", title: "Long-Term Partnership Focus", description: "We believe in building sustainable growth rather than short-term results. Our objective is to create long-lasting partnerships that deliver value year after year." }
];

export default function EdgePage() {
    return (
        <>
            <PageHero
                label="Why Partner with Edreach"
                title={<>Your Trusted Partner for<br /><em className="not-italic text-ink-300">Global Institutional Representation.</em></>}
                subtitle="We bring specialized knowledge, strategic connections, and dedicated support to maximize your international growth."
            />

            <Section className="bg-bg-base" grid>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {edges.map((edge, i) => (
                        <FadeIn key={edge.title} delay={i * 80}>
                            <Card className="h-full border-border hover:border-azure-500/30 transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-[#f0f4fa] border border-[#00206d]/10 flex items-center justify-center text-2xl mb-6">
                                    {edge.icon}
                                </div>
                                <h3 className="font-display text-xl font-semibold text-ink-900 mb-3">{edge.title}</h3>
                                <p className="text-sm text-ink-500 leading-relaxed">{edge.description}</p>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            <CtaSection />
        </>
    );
}
