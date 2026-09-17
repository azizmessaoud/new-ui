/* Terminal Slate dossier: Framer petrol/amber system with a recruiter-first hero. */
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { certificates, cvUrl, profile, projects, recruiter, skills, experiences, volunteering } from "@/lib/portfolioData";

const navItems = [
  ["Work", "work"],
  ["Experience", "experience"],
  ["Method", "method"],
  ["Contact", "contact"],
] as const;

const NeuralField = lazy(() => import("@/components/NeuralField"));

const skillList = Object.values(skills).flat();
const plannedCerts = certificates.filter((cert) => cert.status === "planned");
const earnedCerts = certificates.filter((cert) => cert.status !== "planned");
const flagshipProjects = projects.filter((project) => project.featured);
const supportingProjects = projects.filter((project) => !project.featured);

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "flagship" | "supporting">("all");
  const [animationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAnimationPaused(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const visibleFlagship = useMemo(
    () => (filter === "supporting" ? [] : flagshipProjects),
    [filter],
  );
  const visibleSupporting = useMemo(
    () => (filter === "flagship" ? [] : supportingProjects),
    [filter],
  );

  return (
    <div className="site-shell">
      <div className="site-network">
        <p className="sr-only">Decorative background animation. It can be paused with the control in the status bar.</p>
        <Suspense fallback={null}><NeuralField paused={animationPaused} /></Suspense>
      </div>
      <header className="topbar">
        <button className="brand-lockup" onClick={() => scrollToId("top")} aria-label="Back to top">
          <span className="brand-am" aria-hidden="true">AM</span>
          <span className="brand-name">AZIZ MESSAOUD</span>
        </button>
        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => { scrollToId(id); setMenuOpen(false); }}>{label}</button>
          ))}
          <a href={cvUrl} target="_blank" rel="noreferrer" className="nav-cv">View CV <Download size={14} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <div className="status-bar">
        <span className="live-dot" />
        <p>Seeking a 2027 PFE internship · Data Science · AI/ML Engineering · Ariana, Tunisia</p>
        <button className="animation-toggle" type="button" aria-pressed={animationPaused} onClick={() => setAnimationPaused((paused) => !paused)}>
          {animationPaused ? "Play animation" : "Pause animation"}
        </button>
      </div>

      <main>
        <section id="top" className="hero-section container">
          <div className="hero-copy">
            <p className="section-index">01 / Identity</p>
            <h1>I build practical AI systems from messy data.</h1>
            <p className="hero-lede">
              Aziz Messaoud is a Data Science Engineering student at ESPRIT. Hiring managers can verify internships, three flagship cases, and a CV from this first screen.
            </p>
            <div className="hero-actions">
              <Button className="signal-button" asChild>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </Button>
              <a className="text-link" href={cvUrl} target="_blank" rel="noreferrer">
                <Download size={15} /> Download CV
              </a>
            </div>
            <div className="proof-grid">
              {recruiter.proofs.map((proof) => (
                <button key={proof.anchor} className="proof-chip" onClick={() => scrollToId(proof.anchor)}>
                  <span className="mono-label">{proof.label}</span>
                  <p>{proof.note}</p>
                </button>
              ))}
            </div>
            <p className="hero-internships">
              Internships: Sopra HR Software · FlyRank AI · Banque de Tunisie{" "}
              <button type="button" className="inline-jump" onClick={() => scrollToId("experience")}>Jump to experience</button>
            </p>
          </div>
          <aside className="hero-proof">
            <span className="proof-label">/ Current direction</span>
            <ol className="proof-chain">
              <li><span>01</span> Data Science</li>
              <li><span>02</span> Machine Learning</li>
              <li><span>03</span> AI Engineering</li>
              <li><span>04</span> Production systems</li>
            </ol>
            <div className="hero-note">
              <span className="mono-label">01</span>
              <p>AI research is the method: hypothesis, experiment, baseline, evaluation, analysis.</p>
            </div>
          </aside>
        </section>

        <section id="work" className="work-section container section-block">
          <div className="section-heading">
            <div>
              <p className="section-index">02 / Selected work</p>
              <h2>Proof over promises.</h2>
            </div>
            <p className="section-intro">Flagship cases show the path from data and model decisions to working systems—with stated outcomes, not inflated claims.</p>
          </div>
          <div className="filter-row" role="tablist" aria-label="Project filters">
            {([["all", "All work"], ["flagship", "Flagship cases"], ["supporting", "Supporting work"]] as const).map(([value, label]) => (
              <button key={value} role="tab" aria-selected={filter === value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>{label}</button>
            ))}
          </div>
          <div className="case-list">
            {visibleFlagship.map((project) => (
              <motion.article
                key={project.title}
                id={project.id}
                className="case-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
              >
                <div>
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary} {project.details}</p>
                  <div className="project-links">
                    <a className="project-link" href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel={project.link.startsWith("http") ? "noreferrer" : undefined}>
                      {project.linkLabel} <ExternalLink size={14} />
                    </a>
                    {(project.paperLink || project.secondaryLink) && (
                      <a className="project-link" href={(project.paperLink || project.secondaryLink)!} target="_blank" rel="noreferrer">
                        {project.paperLabel ?? project.secondaryLabel ?? "Read paper"} <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="outcome-panel">
                  <span className="mono-label">Measurable outcome</span>
                  <p>{project.outcome}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
          {visibleSupporting.length > 0 && (
            <div className="support-grid">
              {visibleSupporting.map((project) => (
                <article key={project.title} className="support-card">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ExternalLink size={14} /></a>
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="experience" className="exp-section section-block">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-index">03 / Experience</p>
                <h2>Internships, not slogans.</h2>
              </div>
              <p className="section-intro">HR document processing, applied ML, and IT support.</p>
            </div>
            <div className="exp-grid">
              {experiences.map((exp, index) => (
                <article className="exp-item" key={`${exp.company}-${exp.period}`}>
                  <div className="exp-header">
                    <span className="exp-number">0{index + 1}</span>
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="exp-company">{exp.company} · {exp.period}</p>
                    </div>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                  <ul className="exp-desc">{exp.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="method" className="approach-section section-block">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-index">04 / Method</p>
                <h2>From signal to system.</h2>
              </div>
            </div>
            <div className="approach-grid">
              <div className="approach-step"><span>01</span><h3>Frame</h3><p>Turn an ambiguous goal into a measurable research or product question.</p></div>
              <div className="approach-step"><span>02</span><h3>Build</h3><p>Use models, APIs, agents, and interfaces that fit the actual constraints.</p></div>
              <div className="approach-step"><span>03</span><h3>Evaluate</h3><p>Compare against a baseline, document the metric, and make the limitation visible.</p></div>
              <div className="approach-step"><span>04</span><h3>Explain</h3><p>Leave behind a case another person can inspect, reproduce, and challenge.</p></div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section container section-block">
          <div className="about-grid">
            <div>
              <p className="section-index">05 / About</p>
              <h2>Curious by default. Rigorous by practice.</h2>
              <p className="about-copy la-quote">Aziz Messaoud is a Data Science student at ESPRIT in Tunisia focused on practical AI systems, machine learning, NLP, and AI engineering.</p>
              <p className="about-copy">I am a Computer Engineering student specializing in Data Science. My direction follows a clear progression from data science foundations and machine learning to AI engineering, production systems, and agentic workflows.</p>
              <p className="about-copy">I am strengthening probability and statistics, algorithms, system design, microservices, and MLOps while continuing to build practical projects in NLP, generative AI, document intelligence, search intelligence, and analytics.</p>
            </div>
            <div className="skill-panel">
              <span className="mono-label">/ Working toolkit</span>
              <div className="skill-cloud">{skillList.map((skill) => <span key={skill}>{skill}</span>)}</div>
              <div className="about-facts">
                <dl>
                  <div className="fact-row"><dt>Education</dt><dd>Data Science Engineering<br />ESPRIT · Expected 2027</dd></div>
                  <div className="fact-row"><dt>Focus</dt><dd>AI Systems · ML Engineering · NLP</dd></div>
                  <div className="fact-row"><dt>Location</dt><dd>{profile.location}</dd></div>
                  <div className="fact-row"><dt>Languages</dt><dd>Arabic · French · English</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section id="volunteering" className="vol-section section-block">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-index">06 / Volunteering</p>
                <h2>Research, clubs, chapters.</h2>
              </div>
              <p className="section-intro">Research contribution, clubs, and IEEE chapters.</p>
            </div>
            <div className="exp-grid">
              {volunteering.map((item, index) => (
                <article className="exp-item" key={item.org}>
                  <div className="exp-header">
                    <span className="exp-number">0{index + 1}</span>
                    <div>
                      <h3>{item.org}</h3>
                      <p className="exp-company">{item.role} · {item.period}</p>
                    </div>
                    {item.link && <a className="vol-link" href={item.link} target="_blank" rel="noreferrer">{item.linkLabel ?? "Link"} <ExternalLink size={13} /></a>}
                  </div>
                  <p className="exp-desc">{item.summary}</p>
                  <div className="vol-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="cert-section section-block">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-index">07 / Certifications</p>
                <h2>Learning, indexed.</h2>
              </div>
              <p className="section-intro">A living record of the foundations supporting the work—not a substitute for the work itself.</p>
            </div>
            <div className="planned-cert-row">
              <p className="planned-label">Next</p>
              <div className="planned-cert-list">
                {plannedCerts.map((cert) => (
                  <div className="cert-item planned" key={cert.title}>
                    <span className="cert-badge">Planned</span>
                    <div>
                      <h3>{cert.title}</h3>
                      <p>{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cert-grid">
              {earnedCerts.map((cert, index) => {
                const content = (
                  <>
                    <span className="cert-number">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{cert.title}</h3>
                      <p>{cert.issuer} · {cert.year}</p>
                    </div>
                    {cert.link ? <ArrowUpRight size={15} /> : null}
                  </>
                );
                return cert.link ? (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-item" key={cert.title}>{content}</a>
                ) : (
                  <div className="cert-item" key={cert.title}>{content}</div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-block">
          <div className="container contact-inner">
            <div>
              <p className="section-index">08 / Contact</p>
              <h2>Have a real problem worth investigating?</h2>
              <p className="contact-copy">I am looking for a PFE where I can contribute to a serious Data Science, ML engineering, AI engineering, agentic AI, or research project. Hybrid or remote.</p>
              <Button className="signal-button hire-button" asChild>
                <a href={`mailto:${profile.email}`}>I want to hire Aziz</a>
              </Button>
            </div>
            <div className="contact-card">
              <a href={`mailto:${profile.email}`} className="contact-email">{profile.email} <ArrowUpRight size={18} /></a>
              <div className="contact-links">
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
                <a href={profile.links.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
                <a href={`mailto:${profile.email}`}><Mail size={16} /> Email</a>
                <a href={profile.links.kaggle} target="_blank" rel="noreferrer"><span className="platform-icon">K</span> Kaggle</a>
                <a href={profile.links.leetcode} target="_blank" rel="noreferrer"><span className="platform-icon">LC</span> LeetCode</a>
                <a href={profile.links.codeforces} target="_blank" rel="noreferrer"><span className="platform-icon">CF</span> Codeforces</a>
                <a href={profile.links.zindi} target="_blank" rel="noreferrer"><span className="platform-icon">Z</span> Zindi</a>
                <a href={profile.links.devpost} target="_blank" rel="noreferrer"><span className="platform-icon">D</span> Devpost</a>
              </div>
              <p className="contact-location"><MapPin size={15} /> {profile.location} · Hybrid or remote</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <span>© 2026 Aziz Messaoud</span>
        <span>Data Science Engineering · ESPRIT</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
