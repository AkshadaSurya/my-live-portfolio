import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import AkshadaImage from "./assets/Akshada-Home.jpg";
import AkshadaAboutMeImage from "./assets/Akshada-About.jpg";
import "./index.css";

const contentLibrary = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    contact: "Let's Talk",

    heroEyebrow: "FULL-STACK SOFTWARE DEVELOPER",
    heroTitle1: "I build software",
    heroTitle2: "that solves real problems.",
    heroDescription:
      "Computer Science professional with hands-on experience building enterprise applications, ERP systems, APIs, databases and modern web interfaces.",
    heroPrimary: "View My Work",
    heroSecondary: "Download CV",
    heroStatus: "Open to developer opportunities",

    aboutLabel: "01 / ABOUT",
    aboutTitle: "Turning complex ideas into usable software.",
    aboutText1:
      "I'm Akshada Suryawanshi, a Computer Science professional currently pursuing my Master's in Germany. My background combines academic knowledge with practical experience in full-stack software development.",
    aboutText2:
      "I enjoy working across the stack — from building responsive interfaces and REST APIs to designing relational databases and integrating enterprise systems. I care about writing clean, maintainable code that solves real business problems.",
    skillsTitle: "Technical Stack",

    projectsLabel: "02 / PROJECTS",
    projectsTitle: "Selected work",
    projectsDescription:
      "A few projects that represent how I approach software development — from frontend interfaces to backend systems and databases.",

    experienceLabel: "03 / EXPERIENCE",
    experienceTitle: "Where I've worked",

    educationLabel: "04 / EDUCATION",
    educationTitle: "Academic background",

    contactLabel: "05 / CONTACT",
    contactTitle: "Let's build something useful.",
    contactDescription:
      "I'm currently interested in Full-Stack, Software Development, Backend and Werkstudent opportunities in Germany.",
    contactButton: "Get in touch",

    footer: "Designed & built by Akshada Suryawanshi",
  },

  de: {
    navHome: "Startseite",
    navAbout: "Über mich",
    navProjects: "Projekte",
    navExperience: "Erfahrung",
    navEducation: "Ausbildung",
    contact: "Kontakt",

    heroEyebrow: "FULL-STACK SOFTWAREENTWICKLERIN",
    heroTitle1: "Ich entwickle Software",
    heroTitle2: "die echte Probleme löst.",
    heroDescription:
      "Informatikerin mit praktischer Erfahrung in Enterprise-Anwendungen, ERP-Systemen, APIs, Datenbanken und modernen Weboberflächen.",
    heroPrimary: "Projekte ansehen",
    heroSecondary: "CV herunterladen",
    heroStatus: "Offen für neue Entwicklerpositionen",

    aboutLabel: "01 / ÜBER MICH",
    aboutTitle: "Komplexe Ideen in nutzbare Software verwandeln.",
    aboutText1:
      "Ich bin Akshada Suryawanshi und studiere derzeit im Master in Deutschland. Mein Profil verbindet fundierte Informatikkenntnisse mit praktischer Erfahrung in der Full-Stack-Softwareentwicklung.",
    aboutText2:
      "Ich arbeite gerne über den gesamten Stack hinweg – von responsiven Benutzeroberflächen und REST APIs bis hin zu relationalen Datenbanken und Enterprise-Systemen.",
    skillsTitle: "Technischer Stack",

    projectsLabel: "02 / PROJEKTE",
    projectsTitle: "Ausgewählte Projekte",
    projectsDescription:
      "Projekte, die meine Arbeitsweise in Frontend, Backend, APIs und Datenbanken zeigen.",

    experienceLabel: "03 / ERFAHRUNG",
    experienceTitle: "Berufliche Erfahrung",

    educationLabel: "04 / AUSBILDUNG",
    educationTitle: "Akademischer Hintergrund",

    contactLabel: "05 / KONTAKT",
    contactTitle: "Lass uns etwas entwickeln.",
    contactDescription:
      "Ich interessiere mich aktuell für Full-Stack-, Software-Development-, Backend- und Werkstudentenstellen in Deutschland.",
    contactButton: "Kontakt aufnehmen",

    footer: "Designed & entwickelt von Akshada Suryawanshi",
  },
};

const skills = [
  {
    title: "Languages",
    icon: <FaCode />,
    items: ["Java", "Python", "JavaScript", "PHP", "C#", "C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: <FaCode />,
    items: ["React.js", "HTML5", "CSS3", "Responsive UI", "Web Development"],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    items: ["Node.js", "Express.js", "REST APIs", "JSON", "XML"],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    items: ["MySQL", "SQL", "DBeaver", "Database Design"],
  },
  {
    title: "Cloud & Tools",
    icon: <FaCloud />,
    items: ["AWS", "Microsoft Azure", "Git", "GitLab", "Postman"],
  },
];

const projects = [
  {
    number: "01",
    title: "Enterprise ERP Management Platform",
    category: "FULL-STACK / ERP",
    description:
      "Developed modular enterprise ERP components and interactive dashboards for industrial tracking. Integrated backend services and validated REST endpoints using Postman.",
    technologies: ["React.js", "TypeScript", "Node.js", "REST API"],
  },
  {
    number: "02",
    title: "Metro Transit & Ticket Management",
    category: "BACKEND / DATABASE",
    description:
      "Built a Java-based desktop ticket management application with transaction validation, relational database design and structured SQL operations.",
    technologies: ["Java", "SQL", "OOP", "Relational DB"],
  },
  {
    number: "03",
    title: "Digital Beauty Parlour Platform",
    category: "WEB APPLICATION",
    description:
      "Created a responsive appointment booking platform with scheduling conflict detection, MySQL database integration and cloud deployment.",
    technologies: ["PHP", "MySQL", "HTML/CSS", "Render"],
  },
];

const experiences = [
  {
    year: "June 23 - Jan 24",
    company: "Businesscare IT Services Pvt. Ltd., Nashik, India (Remote)",
    role: "Full-Stack Developer Trainee - Development Department",
    description:
      "Spearheaded full-stack development tasks for core enterprise ERP modules within an agile engineering environment. Integrated responsive user interfaces using modern JavaScript frameworks alongside scalable backend components. Architected optimized data schemas and collaborated with cross-functional product teams to deploy features.",
  },
  {
    year: "Apr 22 - Apr 23",
    company: "Catapharma Chemicals Pvt. Ltd., Nashik, India",
    role: "Full-Stack Software Developer",
    description:
      "Architected core enterprise ERP modules using React.js and Node.js to automate business workflows. Developed modular REST APIs and responsive web interfaces to optimize the end-user application UX. Maintained MySQL databases and minimized query latencies using performance tuning via DBeaver. Collaborated with cross-functional stakeholders to gather specifications, ensuring seamless testing and deployment.",
  },
];

const education = [
  {
    year: "Oct 2026 — Present",
    degree: "M.Sc. Computer Science",
    institution: "Technische Hochschule Bingen",
    status: "In Progress",
    url: "https://www.th-bingen.de/en/studium/master/computer-science",
    current: true,
  },
  {
    year: "Oct 2024 — Sept 2026",
    degree: "M.Sc. Computational Modeling & Simulation",
    institution: "Technische Universität Dresden",
    status: "Transferred Track",
    url: "https://tu-dresden.de/ing/informatik/studium/studienangebot/master-studiengaenge/computational-modeling-and-simulation",
  },
  {
    year: "2020 — 2022",
    degree: "Master of Computer Applications",
    institution: "MET's Institute of Engineering, Pune University",
    status: "Completed",
    url: "https://metbkcengg.ac.in/mca/",
  },
  {
    year: "2017 — 2020",
    degree: "Bachelor of Computer Science",
    institution:
      "Ashoka Center for Business and Computer Studies, Pune University",
    status: "Completed",
    url: "https://acbcs.edu.in/pages/courses-b.sc-computer-science-course",
  },
];

function App() {
  const [language, setLanguage] = useState("en");
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const text = contentLibrary[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "experience",
        "education",
        "contact",
      ];

      const position = window.scrollY + 180;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (
          element &&
          position >= element.offsetTop &&
          position < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">
      {/* ================= NAVIGATION ================= */}

      <header className="navbar">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("home")}>
            <span className="brand-mark">AS</span>
            <span className="brand-name">Akshada Suryawanshi</span>
          </button>

          <nav className={`nav-links ${mobileMenu ? "mobile-open" : ""}`}>
            {[
              ["home", text.navHome],
              ["about", text.navAbout],
              ["projects", text.navProjects],
              ["experience", text.navExperience],
              ["education", text.navEducation],
            ].map(([id, label]) => (
              <button
                key={id}
                className={activeSection === id ? "active" : ""}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}

            <button
              className="language-switch"
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
            >
              {language === "en" ? "DE" : "EN"}
            </button>

            <button
              className="nav-contact"
              onClick={() => {
                setMobileMenu(false);
                setShowContact(true);
              }}
            >
              {text.contact}
              <FaArrowRight />
            </button>
          </nav>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <main>
        <section id="home" className="hero">
          <div className="hero-background-grid"></div>

          <div className="hero-content">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="availability">
                <span></span>
                {text.heroStatus}
              </div>

              <p className="eyebrow">{text.heroEyebrow}</p>

              <h1>
                {text.heroTitle1}
                <span>{text.heroTitle2}</span>
              </h1>

              <p className="hero-description">{text.heroDescription}</p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => scrollTo("projects")}
                >
                  {text.heroPrimary}
                  <FaArrowRight />
                </button>

                <a
                  href="/my-live-portfolio/CV_Akshada.pdf"
                  download="Akshada_CV.pdf"
                  className="secondary-button"
                >
                  <FaDownload />
                  {text.heroSecondary}
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/AkshadaSurya"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/akshada-suryawanshi-2462a022a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:akshadasuryawanshi18@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="hero-photo-wrapper">
                <div className="hero-photo-glow"></div>

                <img
                  src={AkshadaImage}
                  alt="Akshada Suryawanshi"
                  className="hero-photo"
                />
              </div>
            </motion.div>
          </div>

          <button
            className="scroll-indicator"
            onClick={() => scrollTo("about")}
          >
            <span></span>
            Scroll to explore
          </button>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="section about-section">
          <div className="section-container">
            <div className="section-heading">
              <span>{text.aboutLabel}</span>
              <div></div>
            </div>

            <div className="about-grid">
              <div className="about-image">
                <div className="image-number">01</div>
                <img src={AkshadaAboutMeImage} alt="Akshada Suryawanshi" />
              </div>

              <div className="about-content">
                <h2>{text.aboutTitle}</h2>

                <p>{text.aboutText1}</p>
                <p>{text.aboutText2}</p>

                <div className="about-highlight">
                  <span>→</span>
                  <strong>
                    Full-Stack Development · Enterprise Software · Backend
                    Systems
                  </strong>
                </div>
              </div>
            </div>

            <div className="skills-area">
              <div className="skills-heading">
                <h3>{text.skillsTitle}</h3>
              </div>

              <div className="skills-grid">
                {skills.map((group) => (
                  <motion.div
                    className="skill-category"
                    key={group.title}
                    whileHover={{ y: -5 }}
                  >
                    <div className="skill-category-icon">{group.icon}</div>

                    <h4>{group.title}</h4>

                    <div className="skill-list">
                      {group.items.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="section projects-section">
          <div className="section-container">
            <div className="section-heading">
              <span>{text.projectsLabel}</span>
              <div></div>
            </div>

            <div className="projects-header">
              <h2>{text.projectsTitle}</h2>
              <p>{text.projectsDescription}</p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.article
                  className={`project-card ${
                    index === 0 ? "featured-project" : ""
                  }`}
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="project-top">
                    <span className="project-number">{project.number}</span>

                    <FaExternalLinkAlt className="project-arrow" />
                  </div>

                  <div className="project-body">
                    <span className="project-category">{project.category}</span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section id="experience" className="section experience-section">
          <div className="section-container">
            <div className="section-heading">
              <span>{text.experienceLabel}</span>
              <div></div>
            </div>

            <div className="experience-header">
              <h2>{text.experienceTitle}</h2>
            </div>

            <div className="experience-list">
              {experiences.map((experience, index) => (
                <motion.article
                  className="experience-item"
                  key={experience.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="experience-year">{experience.year}</div>

                  <div className="experience-dot">
                    <span></span>
                  </div>

                  <div className="experience-content">
                    <div className="experience-company">
                      <FaBriefcase />
                      {experience.company}
                    </div>

                    <h3>{experience.role}</h3>

                    <p>{experience.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}

        <section id="education" className="section education-section">
          <div className="section-container">
            <div className="section-heading">
              <span>{text.educationLabel}</span>
              <div></div>
            </div>

            <div className="education-header">
              <h2>{text.educationTitle}</h2>
            </div>

            <div className="education-list">
              {education.map((item) => (
                <motion.article
                  className={`education-card ${
                    item.current ? "current-education" : ""
                  }`}
                  key={item.degree}
                  whileHover={{ x: 8 }}
                >
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>

                  <div className="education-info">
                    <span className="education-year">{item.year}</span>

                    <h3>{item.degree}</h3>

                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.institution}
                      <FaExternalLinkAlt />
                    </a>
                  </div>

                  <div
                    className={`education-status ${
                      item.current ? "status-current" : ""
                    }`}
                  >
                    {item.status}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section id="contact" className="contact-section">
          <div className="contact-glow"></div>

          <div className="contact-container">
            <span className="contact-label">{text.contactLabel}</span>

            <h2>{text.contactTitle}</h2>

            <p>{text.contactDescription}</p>

            <button
              className="contact-main-button"
              onClick={() => setShowContact(true)}
            >
              {text.contactButton}
              <FaArrowRight />
            </button>

            <div className="contact-email">
              <FaEnvelope />
              <a href="mailto:akshadasuryawanshi18@gmail.com">
                akshadasuryawanshi18@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <span>© {new Date().getFullYear()} Akshada Suryawanshi</span>

        <span>{text.footer}</span>

        <div>
          <a
            href="https://github.com/AkshadaSurya"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/akshada-suryawanshi-2462a022a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>

      {/* ================= CONTACT MODAL ================= */}

      {showContact && (
        <div className="modal-overlay" onClick={() => setShowContact(false)}>
          <motion.form
            className="contact-modal"
            action="https://formspree.io/f/mjybyrdy"
            method="POST"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setShowContact(false)}
            >
              <FaTimes />
            </button>

            <span className="modal-label">GET IN TOUCH</span>

            <h3>Let's talk.</h3>

            <input type="text" name="name" placeholder="Your name" required />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              required
            />

            <button type="submit" className="modal-submit">
              Send Message
              <FaArrowRight />
            </button>
          </motion.form>
        </div>
      )}
    </div>
  );
}

export default App;
