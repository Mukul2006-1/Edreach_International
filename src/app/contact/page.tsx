"use client";
import { useState } from "react";
import { Section, SectionLabel, FadeIn, PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/content";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", organization: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const subject = encodeURIComponent(`Website Inquiry: ${form.name} from ${form.organization}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.organization}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    
    setLoading(false);
    setSubmitted(true);
  };

  const inputCls = "w-full bg-bg-muted border border-border rounded-lg px-4 py-3 text-ink-900 text-sm placeholder:text-ink-100 focus:outline-none focus:border-azure-600 focus:bg-white transition-all";

  return (
    <>
      <PageHero
        label="Contact"
        title={<>Let's Build Your Growth Story Together<br /></>}
        subtitle="Whether you're looking to enter the South Asian market, expand your recruitment footprint, or strengthen your institutional partnerships, our team is ready to help."
      />

      <Section className="bg-bg-base" grid>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form — left col */}
          <div className="lg:col-span-3">
            <FadeIn>
              {submitted ? (
                <div className="bg-white border border-jade-600/20 rounded-2xl p-12 text-center card-shadow">
                  <div className="w-14 h-14 bg-jade-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-jade-600 text-2xl">✓</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-ink-900 mb-3">Message Received</h3>
                  <p className="text-ink-500 leading-relaxed">
                    Thank you for reaching out. We'll review your message and respond within 24 hours
                    with specific, relevant thinking for your institution's goals.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8 lg:p-10 space-y-5 card-shadow">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      {/* <label className="mono-label block mb-2">Your Name *</label> */}
                      <input type="text" name="name" required placeholder="Your Name (Dr. Jane Smith)" value={form.name} onChange={handleChange} className={inputCls} />
                    </div>
                    <div>
                      {/* <label className="mono-label block mb-2">Organization *</label> */}
                      <input type="text" name="organization" required placeholder="Organization : University of Melbourne" value={form.organization} onChange={handleChange} className={inputCls} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      {/* <label className="mono-label block mb-2">Email Address *</label> */}
                      <input type="email" name="email" required placeholder="Email Address : j.smith@university.edu" value={form.email} onChange={handleChange} className={inputCls} />
                    </div>
                    {/* <div>
                      <label className="mono-label block mb-2">Country</label>
                      <select name="country" value={form.country} onChange={handleChange} className={inputCls + " cursor-pointer"}>
                        <option value="">Select country</option>
                        {["India", "Nepal", "Bangladesh", "Sri Lanka", "Bhutan", "United Arab Emirates", "Other"].map(c => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div> */}
                  </div>

                  <div>
                    {/* <label className="mono-label block mb-2">What Are You Trying to Achieve in South Asia? *</label> */}
                    <textarea name="message" required rows={5} placeholder="Briefly describe your institution's goals, timeline, and any specific challenges you're facing..." value={form.message} onChange={handleChange} className={inputCls + " resize-none"} />
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full py-3.5 bg-[#009d9b] hover:bg-[#007d7b] disabled:opacity-60 text-white font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-btn hover:shadow-btn-hover text-sm">
                    {loading ? "Sending..." : "Send Message — We Respond Within 24 Hours"}
                  </button>

                  {/* <p className="text-xs text-ink-100 text-center">
                    No sales pressure. No generic pitch deck. Just a focused conversation about your goals.
                  </p> */}
                </form>
              )}
            </FadeIn>
          </div>

          {/* Sidebar — right col */}
          <div className="lg:col-span-2 space-y-5">
            <FadeIn delay={100}>
              <div className="bg-white border border-border rounded-2xl p-7 card-shadow">
                <p className="mono-label mb-4">Get in Touch</p>
                <a href={`mailto:${siteConfig.email}`} className="font-display text-lg text-azure-700 hover:text-azure-600 transition-colors">
                  {siteConfig.email}
                </a>
                <p className="text-sm text-ink-500 mt-2 leading-relaxed">For time-sensitive enquiries. We aim to respond within 24 hours.</p>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="bg-white border border-border rounded-2xl p-7 card-shadow">
                <p className="mono-label mb-4">Location</p>
                <p className="font-display text-lg text-ink-900">{siteConfig.location}</p>
                <p className="text-sm text-ink-500 mt-2 leading-relaxed">
                  We serve institutions globally and conduct most initial conversations via video call for your convenience.
                </p>
              </div>
            </FadeIn>

            {/* <FadeIn delay={200}>
              <div className="bg-white border border-border rounded-2xl p-7 card-shadow">
                <p className="mono-label mb-4">Follow Our Work</p>
                <div className="space-y-3">
                  {[{ href: siteConfig.linkedin, label: "LinkedIn", icon: "in", name: `LinkedIn — ${siteConfig.name}` }, { href: siteConfig.twitter, label: "X/Twitter", icon: "𝕏", name: `X — @${siteConfig.name.toLowerCase()}` }].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-ink-500 hover:text-azure-700 transition-colors text-sm group">
                      <div className="w-8 h-8 rounded-lg bg-bg-muted border border-border flex items-center justify-center text-xs group-hover:border-azure-500/40 group-hover:bg-azure-50 transition-all">
                        {s.icon}
                      </div>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn> */}
          </div>

        </div>
      </Section>
    </>
  );
}
