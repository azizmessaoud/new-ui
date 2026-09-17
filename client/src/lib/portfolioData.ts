/* Site content: projects, internships, volunteering, and certifications. */
export const cvUrl = "https://drive.google.com/file/d/1CKr7-vtf9nOOr2xX-VwpJAJxefnVPbJ0/view?usp=sharing";

export const profile = {
  name: "Aziz Messaoud",
  role: "Data Science Student",
  headline: "Data Science Engineering student at ESPRIT, looking for a 2027 PFE internship.",
  body: "I work on machine learning, NLP, and document pipelines — ranking, extraction, and review workflows with a baseline and a stated limit.",
  availability: "Looking for a 2027 PFE internship in data science, ML engineering, or AI engineering.",
  email: "aziz.messaoud@esprit.tn",
  location: "Ariana, Tunisia",
  links: {
    linkedin: "https://www.linkedin.com/in/azizmessaoud/",
    github: "https://github.com/azizmessaoud/",
    portfolio: "https://azizm.me/",
    kaggle: "https://www.kaggle.com/azizmessaoud",
    leetcode: "https://leetcode.com/u/azizmessaoud/",
    codeforces: "https://codeforces.com/profile/azizmessaoud",
    zindi: "https://zindi.org/users/azizmessaoud",
    devpost: "https://devpost.com/azizmessaoud",
  },
};

export interface Project {
  number: string;
  id?: string;
  title: string;
  eyebrow: string;
  summary: string;
  details: string;
  outcome: string;
  tags: string[];
  linkLabel: string;
  link: string;
  paperLink?: string;
  paperLabel?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
  status: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    number: "01",
    id: "case-flyrank",
    title: "FlyRank Search Intelligence",
    eyebrow: "Applied ML",
    summary: "A fixed-budget review queue for deciding which pages to inspect first using anonymized search data.",
    details: "I defined the proxy label, compared it with a transparent baseline, trained a gradient-boosted-tree model, and evaluated the top-50 review queue with Precision@50.",
    outcome: "The repository reports a Precision@50 improvement from approximately 0.24 with the baseline to approximately 0.74 with the learned ranking model.",
    tags: ["Python", "Feature engineering", "GBDT", "Precision@50", "Search"],
    linkLabel: "Read case study",
    link: "https://azizmessaoud.github.io/flyrank/paper/",
    secondaryLabel: "View code",
    secondaryLink: "https://github.com/azizmessaoud/flyrank",
    status: "Research prototype",
    featured: true,
  },
  {
    number: "02",
    id: "case-alia",
    title: "ALIA",
    eyebrow: "AI engineering",
    summary: "An AI-powered medical sales-training system with a real-time browser avatar and automated debrief generation.",
    details: "I owned the browser-based TalkingHead.js / Three.js avatar fallback and the standalone PPTX debrief agent. Note: Source code is NDA protected by Vital Laboratories Tunisia.",
    outcome: "Internal synthetic-session testing produced clean decks scoring 97–99/100 in visual QA. Real trainer deployment remains future work.",
    tags: ["Three.js", "WebSockets", "TalkingHead.js", "Python", "Groq LLM"],
    linkLabel: "Request details",
    link: "mailto:aziz.messaoud@esprit.tn",
    status: "NDA Protected / Prototype",
    featured: true,
  },
  {
    number: "03",
    id: "case-hr",
    title: "HR Document Intelligence",
    eyebrow: "Data science",
    summary: "A local-first pipeline that extracts, normalizes, validates, and routes heterogeneous HR documents for human review.",
    details: "The system combines OCR, canonical schema mapping, deterministic business rules, confidence signals, and evidence-backed anomaly flags before downstream HR integration.",
    outcome: "A working local end-to-end prototype was demonstrated with synthetic data. OCR quality and production accuracy still require broader validation.",
    tags: ["Python", "OCR", "NLP", "FastAPI", "Validation"],
    linkLabel: "View code",
    link: "https://github.com/azizmessaoud/hr-anomaly-scaffold",
    status: "Working prototype",
    featured: true,
  },
  {
    number: "04",
    title: "Breast Cancer ML",
    eyebrow: "Supporting project",
    summary: "A reproducible machine-learning proof of concept covering preprocessing, model comparison, and API scaffolding.",
    details: "A technical project for demonstrating a full evaluation and deployment path. It is not a clinically validated diagnostic system.",
    outcome: "A public repository documents the pipeline and implementation boundary.",
    tags: ["Scikit-learn", "PCA", "SVM", "MLP", "Flask", "Docker"],
    
    linkLabel: "View code",
    link: "https://github.com/azizmessaoud/breast-cancer-ml",
    status: "Proof of concept",
    featured: false,
  },
  {
    number: "05",
    title: "ClusterCrew Analytics",
    eyebrow: "Supporting project",
    summary: "Interactive healthcare analytics dashboards and business-intelligence reporting.",
    details: "A visual analytics project centered on decision-ready dashboards and clear communication of operational data.",
    outcome: "Live demo available.",
    tags: ["Power BI", "Data visualization", "Healthcare BI"],
    
    linkLabel: "Live demo",
    link: "https://clustercrew-analytics.onrender.com/overview",
    status: "Live demo",
    featured: false,
  },
  {
    number: "06",
    title: "InnoTravel",
    eyebrow: "Supporting project",
    summary: "A multi-platform travel-management system built with Java, JavaFX, Symfony, and MySQL.",
    details: "A full-stack academic project covering planning, booking, synchronization, and REST API integration.",
    outcome: "Public source repository available.",
    tags: ["JavaFX", "Symfony", "MySQL", "REST API"],
    
    linkLabel: "View code",
    link: "https://github.com/oumaymasaddouri/InnoTravel-PiDev-Symfony.git",
    status: "Academic project",
    featured: false,
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  link?: string;
  status?: "earned" | "planned";
}

export const certificates: Certificate[] = [
  { title: "Microsoft Azure AI Fundamentals (AI-900)", issuer: "Microsoft", year: "Planned", status: "planned" },
  { title: "Microsoft Azure Data Fundamentals (DP-900)", issuer: "Microsoft", year: "Planned", status: "planned" },
  { title: "Databricks Academy Accreditation — Generative AI Fundamentals", issuer: "Databricks", year: "2026", link: "https://credentials.databricks.com/ed7432c9-7444-441d-992a-9c19e81acea9#acc.CiyAfHEW" },
  { title: "ML Engineering Internship", issuer: "FlyRank AI", year: "2026", link: "https://internship.flyrank.ai/verify/FR-D11-C2CA8-72DBB?first_name=Aziz" },
  { title: "Neo4j Fundamentals", issuer: "Neo4j", year: "2025", link: "https://graphacademy.neo4j.com/c/19de2cc3-211a-4104-b685-80e20558cc4c" },
  { title: "Elements of AI for Business", issuer: "MinnaLearn", year: "2025", link: "https://courses.minnalearn.com/certificate/en/elements-of-ai-for-business/c1bde2fc-3df9-41cc-903b-f90636bb12a8" },
  { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", year: "2025", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7DA2ADAE20E6DA7233E485DD34299A910811A034BC4E981DACF9118671A3544C" },
  { title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional", issuer: "Oracle", year: "2025", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1FBB758BADED7CB49AE091395139903D4B9D8463109AEBB0C2673FBC880253A9" },
  { title: "Hashgraph Developer", issuer: "The Hashgraph Association", year: "2025", link: "https://badges.parchment.eu/public/assertions/FsCTKOvmS4iU4tCAbMtQmQ?identity__email=aziz.messaoud@esprit.tn" },
  { title: "Introduction to Transformer-Based NLP", issuer: "NVIDIA", year: "2025", link: "https://learn.nvidia.com/certificates?id=ThehODKqTASFT20JoM1-4w" },
  { title: "Getting Started with Deep Learning", issuer: "NVIDIA", year: "2025", link: "https://learn.nvidia.com/certificates?id=eotempvJT_-jMSt2HqvJwg" },
  { title: "Fundamentals of Deep Learning", issuer: "NVIDIA", year: "2025", link: "https://learn.nvidia.com/certificates?id=_2SSDT3sQLis1uAoAh2SNA" },
  { title: "Intermediate Machine Learning", issuer: "Kaggle", year: "2025", link: "https://www.kaggle.com/learn/certification/azizmessaoud2002/intermediate-machine-learning" },
  { title: "Intro to Machine Learning", issuer: "Kaggle", year: "2025", link: "https://www.kaggle.com/learn/certification/azizmessaoud2002/intro-to-machine-learning" },
  { title: "AI Fundamentals with Capstone", issuer: "IBM SkillsBuild", year: "2025", link: "https://www.credly.com/badges/211a4060-9485-4b3a-9fb9-e2d53c08e888/" },
  { title: "Scrum Fundamentals Certified", issuer: "SCRUMstudy", year: "2025", link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1098120" },
];

export const experiences: { role: string; company: string; period: string; location: string; highlights: string[] }[] = [
  {
    role: "AI Intern",
    company: "Sopra HR Software",
    period: "Jul 2026 - Sep 2026",
    location: "Tunis, Tunisia",
    highlights: [
      "Building an HR anomaly detection system to validate payroll files, contracts, and employee records before integration into HR systems.",
      "Developing a document processing pipeline using Docling and RapidOCR to extract structured data from scanned HR documents.",
      "Implementing a FastAPI-based scaffold with validation rules and anomaly flagging for automated quality checks.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "FlyRank AI",
    period: "Jul 2026 - Aug 2026",
    location: "Remote",
    highlights: [
      "Completing structured assignments in applied machine learning, data analysis, experimentation, and evidence-based technical communication.",
      "Applying machine-learning concepts through guided research, practical exercises, and project-based assignments using public or synthetic data.",
      "Producing reproducible, Git-based portfolio deliverables through independent research, experimentation, and iterative feedback.",
    ],
  },
  {
    role: "AI Intern",
    company: "Sopra HR Software",
    period: "Jul 2025 - Aug 2025",
    location: "Tunis, Tunisia",
    highlights: [
      "Developed an NLP-powered HR document-processing pipeline using Python, spaCy, and pdfplumber.",
      "Implemented entity extraction and document parsing workflows for structured HR data.",
      "Automated extraction for an HR document template using Python and regular expressions, enabling batch processing of documents.",
    ],
  },
  {
    role: "IT Support Intern",
    company: "Banque de Tunisie",
    period: "Jun 2023 - Jul 2023",
    location: "Tunisia",
    highlights: [
      "Installed and configured Windows operating systems on company servers under supervision.",
      "Scanned QR codes and manually entered inventory information into the organization's internal system.",
      "Provided technical support by troubleshooting user and system incidents and assisting with routine IT operations.",
    ],
  },
];

export const volunteering: { org: string; period: string; role: string; summary: string; tags: string[]; link?: string; linkLabel?: string }[] = [
  {
    org: "Happy City Index",
    period: "2026",
    role: "Researcher (Tunis)",
    summary: "I was the Tunis researcher for the 2026 Happy City Index. I gathered the city's data and checked it before it was submitted. They list some of the researchers on the Our Team page.",
    tags: ["Urban research", "Data collection", "Quality of life"],
    link: "https://happy-city-index.com/OurTeam",
    linkLabel: "Our Team",
  },
  {
    org: "DeepFlow",
    period: "Oct 2025 - Present",
    role: "Member",
    summary: "Active participant in AI-focused workshops covering RAG systems, vector search, and agentic AI architectures. Engaged in hands-on labs and peer discussions to reinforce practical implementation skills in LLM-based agent workflows.",
    tags: ["Deep Learning", "Machine Learning", "Research"],
    link: "https://www.linkedin.com/company/deepflowesprit/",
    linkLabel: "LinkedIn",
  },
  {
    org: "ATIA Club ESB",
    period: "Dec 2024 - Present",
    role: "Member, Learning Department",
    summary: "Learning department member. I attend AI workshops and study sessions with other ESB students.",
    tags: ["AI & Technology", "Workshops", "Learning"],
  },
  {
    org: "IEEE Chapters",
    period: "Oct 2022 - Dec 2023",
    role: "Member (PES, IAS, Computer Society)",
    summary: "Member of the PES, IAS, and Computer Society chapters. Workshops and student engineering events, 2022–2023.",
    tags: ["IEEE", "Engineering", "Technology"],
  },
];

export const recruiter = {
  seeking: "2027 PFE internship in data science, ML, or AI engineering",
  education: "ESPRIT · Data Science Engineering · expected 2027",
  proofs: [
    { anchor: "case-flyrank", label: "FlyRank Search Intelligence", note: "Precision@50 0.24 → 0.74 vs baseline" },
    { anchor: "case-alia", label: "ALIA", note: "NDA-protected medical sales trainer" },
    { anchor: "case-hr", label: "HR Document Intelligence", note: "OCR + validation pipeline, local-first" },
  ],
};

export const skills: Record<string, string[]> = {
  "Languages": ["Python", "SQL", "R"],
  "ML / AI": ["scikit-learn", "PyTorch", "TensorFlow", "NLP", "LLMs"],
  "Infrastructure": ["FastAPI", "Docker", "Git"],
  "Data": ["Data visualization"],
};
