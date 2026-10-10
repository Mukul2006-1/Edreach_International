import { Metadata } from "next";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl sm:text-5xl font-display font-semibold text-ink-900 mb-8">Privacy Policy</h1>
      <p className="text-sm text-ink-300 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

      <div className="space-y-8 text-ink-500 leading-relaxed">
        <section>
          <h2 className="text-2xl font-display font-semibold text-ink-900 mb-4">1. Introduction</h2>
          <p>
            Welcome to {siteConfig.name}. We are an end-to-end partnership firm for global institutions, specializing in international student recruitment, institutional representation, and market entry in South Asia. We respect your privacy and are committed to protecting the personal data of students, educational institutions, recruitment partners, and visitors to our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold text-ink-900 mb-4">2. Data We Collect</h2>
          <p>Depending on your relationship with us (as a student, partner institution, or recruitment agent), we may collect the following data:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-ink-500">
            <li><strong>Student Data:</strong> Identity information (name, date of birth), academic background, test scores, passports/visas, financial information required for applications, and contact details.</li>
            <li><strong>Institutional Partner Data:</strong> Contact details of university representatives, contract information, academic program details, and market strategy communications.</li>
            <li><strong>Agent Network Data:</strong> Business registration details, compliance information, performance metrics, and contact information of recruitment partners.</li>
            <li><strong>Technical & Usage Data:</strong> IP addresses, browser types, and website usage statistics collected through cookies when you visit our site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold text-ink-900 mb-4">3. How We Use Your Data</h2>
          <p>We use your personal data to provide our international education and B2B services:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-ink-500">
            <li><strong>For Students:</strong> To process university applications, verify documents, provide admissions support, and facilitate the student recruitment journey with our institutional partners.</li>
            <li><strong>For Institutions & Agents:</strong> To manage representation agreements, conduct market research, provide support and training, and coordinate recruitment events and roadshows.</li>
            <li><strong>Compliance & Legal:</strong> To comply with visa/immigration protocols of destination countries and varying local legal requirements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold text-ink-900 mb-4">4. Data Sharing & Third Parties</h2>
          <p>We may share your data with trusted third parties to fulfill our services:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-ink-500">
            <li><strong>Global Institutions:</strong> Student applications are shared with relevant universities and colleges for admission decisions.</li>
            <li><strong>Government Bodies:</strong> Information may be shared with immigration authorities or visa processing centers when facilitating student applications.</li>
            <li><strong>Service Providers:</strong> IT systems, verification agencies, and CRM providers that help us operate our recruitment and partner networks.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold text-ink-900 mb-4">5. Data Security & Retention</h2>
          <p>
            We implement robust security measures to prevent unauthorized access, alteration, or disclosure of your data. We retain personal data only for as long as necessary to fulfill the purposes we collected it for, including any legal, accounting, or reporting requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display font-semibold text-ink-900 mb-4">6. Contact Us</h2>
          <p>
            If you have questions about how we handle your personal data across any of our services, please contact our team at:
          </p>
          <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
            <p className="font-semibold text-ink-900">{siteConfig.name}</p>
            <p>{siteConfig.location}</p>
            <p className="mt-2">Email: <a href={`mailto:${siteConfig.email}`} className="text-azure-600 hover:text-azure-700">{siteConfig.email}</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
