// ============================================================
// SITE CONTENT — Edit this file to update all website content
// ============================================================

export const siteConfig = {
  name: "EdReach International",
  tagline: "",
  description:
    "India's dedicated end-to-end partnership firm for global institutions. From strategy and legal setup to academic recruitment and R&D collaboration.",
  email: "connect@edreachinternational.com",
  location: "Unit 309, 3rd Floor, Tower-A, SAS Tower Sector 38, Gurugram – 122001 Haryana, India",
  linkedin: "https://linkedin.com/company/edreachinternational",
  twitter: "https://twitter.com/edreachinternational",
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Our Edge", href: "/edge" },
  // { label: "Contact", href: "/contact" },
];

type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  list?: string[];
};

export const services: Service[] = [
  {
    id: "student-recruitment",
    icon: "🎓",
    title: "International Student Recruitment",
    description: "We connect institutions with qualified and genuine students through our extensive network of education partners, counsellors, schools, and recruitment channels. Our recruitment strategies focus on quality, compliance, and long-term success."
  },
  {
    id: "institutional-representation",
    icon: "🏛️",
    title: "Institutional Representation",
    description: "Acting as an extension of your international team, we represent your institution in South Asia, increasing brand visibility and engagement with key stakeholders, including students, agents, schools, and industry partners."
  },
  {
    id: "market-entry",
    icon: "🗺️",
    title: "Market Entry & Expansion Strategy",
    description: "For institutions seeking to establish or strengthen their presence in South Asia, we provide market research, competitor analysis, student demand insights, and customized expansion strategies to support informed decision-making."
  },
  {
    id: "agent-network",
    icon: "🤝",
    title: "Agent Network Development & Management",
    description: "We help institutions identify, onboard, train, and manage high-quality recruitment partners. Our team supports the development of strong, compliant, and productive agent networks across key markets."
  },
  {
    id: "admissions-support",
    icon: "🏫",
    title: "Admissions & Application Support",
    description: "From document verification and application processing to application submission and deposit follow-ups, we provide end-to-end admissions support that keeps your recruitment process efficient, accurate and seamless."
  }
  // {
  //   id: "stakeholder-engagement",
  //   icon: "🏫",
  //   title: "School & Stakeholder Engagement",
  //   description: "Building meaningful relationships with schools, counsellors, and educational organizations is essential for long-term success. We facilitate partnerships that enhance brand recognition and student outreach."
  // },
  // {
  //   id: "recruitment-events",
  //   icon: "📅",
  //   title: "Recruitment Events & Roadshows",
  //   description: "Our team plans and executes a wide range of recruitment activities, including:",
  //   list: [
  //     "Education Fairs",
  //     "School Visits",
  //     "Counsellor Workshops",
  //     "Agent Training Sessions",
  //     "Institutional Roadshows",
  //     "Student Information Sessions",
  //     "Webinars & Virtual Events"
  //   ]
  // },
  // {
  //   id: "marketing-brand",
  //   icon: "📈",
  //   title: "Marketing & Brand Development",
  //   description: "We support institutions in enhancing their market presence through targeted marketing campaigns, digital engagement strategies, promotional activities, and localized branding initiatives."
  // },
  // {
  //   id: "market-intelligence",
  //   icon: "📊",
  //   title: "Market Intelligence & Research",
  //   description: "Through continuous market monitoring and analysis, we provide insights into student trends, competitor activities, emerging opportunities, and recruitment performance to help institutions stay ahead in a competitive landscape."
  // },
  // {
  //   id: "strategic-partnerships",
  //   icon: "🔗",
  //   title: "Strategic Partnership Development",
  //   description: "We facilitate collaborations between institutions, schools, pathway providers, industry stakeholders, and education organizations to create mutually beneficial opportunities."
  // }
];

export const values = [
  {
    title: "Clarity",
    description:
      "We never leave you confused about where things stand. Every engagement has clear milestones, progress reports, and a direct line to your partner manager.",
  },
  {
    title: "Integrity",
    description:
      "We protect your institution's reputation as if it were our own. We only take engagements we can genuinely deliver — and we say so upfront.",
  },
  {
    title: "Precision",
    description:
      "Every regulatory detail, every agreement clause, every recruitment touchpoint is handled with care. Nothing falls through the cracks.",
  },
  {
    title: "Partnership",
    description:
      "We succeed when you succeed. We don't optimize for transaction volume — we optimize for outcomes that make you want to grow with us.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    timing: "Week 1",
    description:
      "A focused 30-minute conversation about your institution, your India goals, your timeline, and your constraints. No generic pitch.",
  },
  {
    number: "02",
    title: "Strategic Assessment",
    timing: "Week 2",
    description:
      "We deliver a custom India entry brief: market opportunity, regulatory requirements, recommended approach, and realistic timeline.",
  },
  {
    number: "03",
    title: "Engagement Design",
    timing: "Week 3",
    description:
      "Agreed scope, deliverables, milestones, and success metrics. You approve every detail before work begins.",
  },
  {
    number: "04",
    title: "Execution",
    timing: "Ongoing",
    description:
      "Our team executes with direct access to your dedicated partner manager and structured progress updates throughout.",
  },
  {
    number: "05",
    title: "Review & Scale",
    timing: "Milestone Review",
    description:
      "At every milestone we review outcomes together. Partnerships that deliver, we help you compound and scale.",
  },
];

export const whyUs = [
  { icon: "🌍", title: "Deep Regional Expertise", description: "Our team possesses extensive knowledge of student trends, recruitment channels, institutional positioning, and market dynamics across India and South Asia." },
  { icon: "🤝", title: "Strong Partner Network", description: "We have developed relationships with schools, education consultants, counsellors, training providers, and industry stakeholders, enabling institutions to connect with high-quality recruitment channels." },
  { icon: "🎯", title: "Tailored Market Strategies", description: "Every institution is unique. We create customized recruitment and business development plans based on your objectives, target audience, budget, and timelines." },
  { icon: "🏛️", title: "Dedicated Institutional Support", description: "We provide personalized account management, ensuring your institution receives focused attention and strategic guidance throughout the partnership." },
  { icon: "💼", title: "End-to-End Representation", description: "From market research and partner development to recruitment events and stakeholder engagement, we support institutions at every stage of their international growth journey." },
  { icon: "🌱", title: "Long-Term Partnership Focus", description: "We believe in building sustainable growth rather than short-term results. Our objective is to create long-lasting partnerships that deliver value year after year." }
];
