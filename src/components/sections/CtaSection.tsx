import Link from "next/link";
import { FadeIn } from "@/components/ui";

export function CtaSection() {
  return (
    <section className="py-24 px-6 bg-[#00206d] relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }} />
      {/* Glow blobs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-white/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn>
          <p className="font-mono text-[11px] tracking-widest uppercase text-white/60 mb-5 flex items-center justify-center gap-2">
            <span className="w-5 h-px bg-white/40 inline-block" />
            Start the Conversation
          </p>
          <h2 className="display-text text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
            Ready to Explore What's<br />Possible in South Asia?
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            A 30-minute discovery call costs you nothing — and could define your
            institution's next decade in South Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#009d9b] font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-sm">
              Book a Discovery Call →
            </Link>
            <Link href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-lg transition-all text-sm font-medium">
              Explore Services
            </Link>
          </div>
          {/* <p className="text-white/40 text-xs mt-6 italic">
            No sales pressure. No generic pitch deck. Just a direct conversation about your institution's specific goals.
          </p> */}
        </FadeIn>
      </div>
    </section>
  );
}
