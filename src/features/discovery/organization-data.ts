export interface AdminOrg {
  name: string;
  type: "government" | "regulator" | "academic" | "parastatal";
  description: string;
}

export interface BusinessPath {
  registrationSteps: string;
  timeline: string;
  keyContacts: string;
  taxIncentives: string;
  visaPolicy: string;
  legalFramework: string;
}

export interface CountryAdminData {
  countryCode: string;
  countryName: string;
  organizations: AdminOrg[];
  businessPath?: BusinessPath;
}

const typeMeta: Record<string, { label: string; icon: string }> = {
  government: { label: "Government & Ministry", icon: "🏛️" },
  regulator: { label: "Regulatory Body", icon: "⚖️" },
  academic: { label: "Academic & Research", icon: "🎓" },
  parastatal: { label: "Parastatal & Agency", icon: "🏗️" },
};

const defaultBusinessPath: BusinessPath = {
  registrationSteps: "Register with the national company registry. Obtain tax identification number. Register for social security. Apply for sector-specific licences.",
  timeline: "2–6 weeks depending on business type and sector.",
  keyContacts: "Ministry of Commerce / Company Registry / Investment Promotion Agency.",
  taxIncentives: "Varies by country — typically includes reduced corporate tax rates for tech startups, R&D tax credits, and VAT exemptions on digital services.",
  visaPolicy: "Most African countries offer startup visas, tech talent permits, or digital nomad programmes. Processing times vary.",
  legalFramework: "Company law, data protection act, e-commerce regulations, and AI ethics guidelines apply.",
};

const allData: Record<string, CountryAdminData> = {
  MU: {
    countryCode: "MU",
    countryName: "Mauritius",
    businessPath: {
      registrationSteps: "Register online via the Companies and Business Registration Integrated System (CBRIS). Obtain Business Registration Number (BRN) and VAT registration simultaneously.",
      timeline: "1–3 business days for company registration. Full operational licence within 2 weeks.",
      keyContacts: "Economic Development Board (EDB) / Mauritius Revenue Authority / Companies Division.",
      taxIncentives: "15% corporate tax rate. 8-year tax holiday for tech companies in innovation clusters. R&D tax credit up to 200%. No capital gains tax.",
      visaPolicy: "Premium Visa (1 year renewable) for remote workers. Occupation Permit for professionals with a job offer. Investor Permit for business founders.",
      legalFramework: "Companies Act 2001. Data Protection Act 2017. The Cybersecurity and Cybercrime Act. Smart Mauritius masterplan for AI governance.",
    },
    organizations: [
      { name: "Ministry of Information Technology, Communication and Innovation", type: "government", description: "Leading digital transformation and AI policy development for the Republic of Mauritius." },
      { name: "National Computer Board", type: "regulator", description: "ICT regulatory authority overseeing cybersecurity, data protection, and technology standards." },
      { name: "Data Protection Office", type: "regulator", description: "Independent supervisory authority enforcing the Data Protection Act 2017." },
      { name: "University of Mauritius — AI Research Lab", type: "academic", description: "Flagship public university with dedicated AI and machine learning research programmes." },
      { name: "Mauritius Research and Innovation Council", type: "parastatal", description: "State agency funding and coordinating research, innovation, and technology commercialisation." },
      { name: "Economic Development Board", type: "parastatal", description: "Investment promotion agency facilitating tech sector growth and international partnerships." },
      { name: "Mauritius Africa Fintech Hub", type: "parastatal", description: "Public-private initiative positioning Mauritius as a continental fintech and AI gateway." },
      { name: "Mauritius Standards Bureau", type: "regulator", description: "National standards body covering AI ethics, data quality, and technology certification." },
    ],
  },
  KE: {
    countryCode: "KE",
    countryName: "Kenya",
    organizations: [
      { name: "Ministry of Information, Communications and the Digital Economy", type: "government", description: "Cabinet ministry driving Kenya's digital economy agenda and AI strategy." },
      { name: "Communications Authority of Kenya", type: "regulator", description: "ICT sector regulator overseeing telecommunications, broadcasting, and cybersecurity." },
      { name: "Office of the Data Protection Commissioner", type: "regulator", description: "Independent authority enforcing the Data Protection Act and AI governance frameworks." },
      { name: "University of Nairobi — AI Centre of Excellence", type: "academic", description: "Leading research centre for AI, machine learning, and data science in East Africa." },
      { name: "Kenya Institute of Curriculum Development", type: "government", description: "Government agency integrating AI and digital literacy into national education curriculum." },
      { name: "Konza Technopolis Development Authority", type: "parastatal", description: "State corporation developing Kenya's flagship smart city and technology hub." },
      { name: "Kenya National Innovation Agency", type: "parastatal", description: "Government agency fostering innovation, tech incubation, and AI startup ecosystems." },
      { name: "Strathmore University — @iLabAfrica", type: "academic", description: "Research and innovation centre focused on ICT for development, AI, and cybersecurity." },
    ],
  },
  NG: {
    countryCode: "NG",
    countryName: "Nigeria",
    organizations: [
      { name: "Federal Ministry of Communications, Innovation and Digital Economy", type: "government", description: "Lead ministry for Nigeria's digital transformation, AI policy, and technology regulation." },
      { name: "National Information Technology Development Agency", type: "regulator", description: "IT development and regulatory agency overseeing Nigeria's technology ecosystem." },
      { name: "Nigeria Data Protection Commission", type: "regulator", description: "Independent regulatory body for data privacy, AI ethics, and digital rights." },
      { name: "National Universities Commission", type: "government", description: "Regulatory agency overseeing university education and AI research programmes." },
      { name: "University of Lagos — AI and Data Science Lab", type: "academic", description: "Leading research group advancing AI, NLP, and data-driven solutions for Africa." },
      { name: "National Centre for Artificial Intelligence and Robotics", type: "parastatal", description: "Federal research institute developing AI capabilities for defence, security, and development." },
      { name: "Nigerian Communications Commission", type: "regulator", description: "Telecommunications regulator enabling broadband infrastructure for AI and digital services." },
      { name: "Galaxy Backbone Limited", type: "parastatal", description: "State-owned ICT infrastructure company providing connectivity and cloud services." },
    ],
  },
  ZA: {
    countryCode: "ZA",
    countryName: "South Africa",
    organizations: [
      { name: "Department of Communications and Digital Technologies", type: "government", description: "National department responsible for ICT policy, digital transformation, and AI strategy." },
      { name: "Independent Communications Authority of South Africa", type: "regulator", description: "Regulatory authority for telecommunications, broadcasting, and digital services." },
      { name: "Information Regulator South Africa", type: "regulator", description: "Independent body enforcing POPIA and overseeing AI data governance." },
      { name: "University of Cape Town — AI Research Group", type: "academic", description: "Premier AI research unit advancing deep learning, computer vision, and ethical AI." },
      { name: "Council for Scientific and Industrial Research", type: "parastatal", description: "Africa's leading research and development organisation with dedicated AI capabilities." },
      { name: "South African AI Association", type: "parastatal", description: "Industry body promoting AI adoption, standards, and skills development across sectors." },
      { name: "Stellenbosch University — MIH Media Lab", type: "academic", description: "Interdisciplinary research lab focusing on AI, interactive media, and human-computer interaction." },
      { name: "Technology Innovation Agency", type: "parastatal", description: "State agency commercialising technology research and supporting AI startups." },
    ],
  },
  EG: {
    countryCode: "EG",
    countryName: "Egypt",
    organizations: [
      { name: "Ministry of Communications and Information Technology", type: "government", description: "Lead ministry driving Egypt's digital transformation and national AI strategy." },
      { name: "National Telecom Regulatory Authority", type: "regulator", description: "Telecommunications and ICT sector regulatory authority." },
      { name: "Egyptian Data Protection Authority", type: "regulator", description: "Data privacy regulator enforcing Law No. 151 of 2020 on personal data protection." },
      { name: "Cairo University — AI and Data Science Centre", type: "academic", description: "Flagship research centre advancing AI education and applied research." },
      { name: "Information Technology Industry Development Agency", type: "parastatal", description: "State agency developing Egypt's IT industry and AI export capabilities." },
      { name: "National Institute for Artificial Intelligence", type: "parastatal", description: "Governmental body coordinating AI research, innovation, and international cooperation." },
      { name: "Egyptian Space Agency", type: "government", description: "National space programme leveraging AI for satellite data analysis and remote sensing." },
      { name: "Technology Innovation and Entrepreneurship Centre", type: "parastatal", description: "Incubation hub supporting AI and deep-tech startups." },
    ],
  },
  MA: {
    countryCode: "MA",
    countryName: "Morocco",
    organizations: [
      { name: "Ministry of Digital Transition and Administration Reform", type: "government", description: "Lead ministry for digital economy, AI strategy, and e-government transformation." },
      { name: "National Agency for Telecommunications Regulation", type: "regulator", description: "Telecoms and digital services regulatory authority." },
      { name: "National Commission for the Control of Personal Data", type: "regulator", description: "Data protection authority overseeing AI and privacy compliance." },
      { name: "Mohammed VI Polytechnic University — AI Institute", type: "academic", description: "Premier research university with dedicated AI and data science institute." },
      { name: "Digital Development Agency", type: "parastatal", description: "State agency implementing Morocco's digital strategy and AI action plan." },
      { name: "Moroccan Foundation for Advanced Science, Innovation and Research", type: "parastatal", description: "Research foundation funding AI, nanotechnology, and innovation projects." },
      { name: "International University of Rabat — AI Lab", type: "academic", description: "Research laboratory focused on AI, IoT, and smart city applications." },
      { name: "Casa Technology Park", type: "parastatal", description: "Technology cluster and incubation hub for digital and AI startups." },
    ],
  },
  RW: {
    countryCode: "RW",
    countryName: "Rwanda",
    organizations: [
      { name: "Ministry of ICT and Innovation", type: "government", description: "Lead ministry driving Rwanda's digital transformation and AI for development agenda." },
      { name: "Rwanda Utility Regulatory Authority", type: "regulator", description: "Regulatory body covering ICT, telecommunications, and digital services." },
      { name: "National Cyber Security Authority", type: "regulator", description: "Cybersecurity regulator ensuring safe digital environment for AI adoption." },
      { name: "Carnegie Mellon University Africa", type: "academic", description: "US-based engineering campus in Kigali offering AI, ML, and data science programmes." },
      { name: "Rwanda Development Board", type: "parastatal", description: "Investment promotion agency positioning Rwanda as Africa's AI and innovation hub." },
      { name: "National Institute of Statistics of Rwanda", type: "government", description: "Statistical office leveraging AI for data-driven policy and national planning." },
      { name: "African Centre for Technology Studies", type: "academic", description: "Research institution exploring AI governance, innovation policy, and technology transfer." },
      { name: "Kigali Innovation City", type: "parastatal", description: "Flagship technology park attracting global AI companies and research centres." },
    ],
  },
  GH: {
    countryCode: "GH",
    countryName: "Ghana",
    organizations: [
      { name: "Ministry of Communications and Digitalisation", type: "government", description: "Lead ministry for ICT policy, digital economy, and AI governance frameworks." },
      { name: "National Communications Authority", type: "regulator", description: "Telecommunications and ICT sector regulatory authority." },
      { name: "Data Protection Commission", type: "regulator", description: "Independent data privacy regulator overseeing AI and digital rights compliance." },
      { name: "University of Ghana — AI Centre", type: "academic", description: "Leading research centre advancing AI education and applied machine learning." },
      { name: "Ghana Innovation Hub", type: "parastatal", description: "Public-private innovation cluster supporting AI startups and digital entrepreneurship." },
      { name: "National Information Technology Agency", type: "parastatal", description: "Government agency implementing e-government and AI-driven public services." },
      { name: "Kwame Nkrumah University of Science and Technology — AI Lab", type: "academic", description: "Research laboratory focusing on AI for agriculture, health, and sustainable development." },
      { name: "Ghana Export Promotion Authority", type: "government", description: "Trade authority using AI for market intelligence and export development." },
    ],
  },
  SN: {
    countryCode: "SN",
    countryName: "Senegal",
    organizations: [
      { name: "Ministry of Digital Economy and Telecommunications", type: "government", description: "Lead ministry for digital strategy, AI policy, and telecommunications infrastructure." },
      { name: "Telecommunications and Posts Regulatory Authority", type: "regulator", description: "ICT and digital services regulatory authority." },
      { name: "Senegalese Data Protection Authority", type: "regulator", description: "Independent authority ensuring data privacy and AI compliance." },
      { name: "Cheikh Anta Diop University — ICT Research Lab", type: "academic", description: "West Africa's leading research university with AI and computational science programmes." },
      { name: "Digital Senegal Agency", type: "parastatal", description: "State agency implementing Senegal's digital transformation and AI readiness roadmap." },
      { name: "African Institute of Mathematical Sciences — Senegal", type: "academic", description: "Research centre advancing AI, data science, and mathematical modelling." },
      { name: "National Agency for Statistics and Demography", type: "government", description: "Statistical office leveraging AI for demographic analysis and policy planning." },
      { name: "Dakar Technology Park", type: "parastatal", description: "Innovation cluster hosting AI startups, digital labs, and incubation programmes." },
    ],
  },
};

export function getAdminData(countryCode: string): CountryAdminData | undefined {
  const entry = allData[countryCode.toUpperCase()];
  if (!entry) return undefined;
  return { ...entry, businessPath: entry.businessPath || defaultBusinessPath };
}

export function getAllAdminData(): CountryAdminData[] {
  return Object.values(allData).map((entry) => ({
    ...entry,
    businessPath: entry.businessPath || defaultBusinessPath,
  }));
}

export { typeMeta };
