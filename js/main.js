// --- CONTENT DATA ---
const content = {
  hero: {
    name: "Alexandru Ursea",
    claim: "Wirtschaftsinformatik (B.Sc.) Student (IU) | Tech & Business | Vertrieb/Management → IT",
    facts: [
      "📍 Taufkirchen (bei München)",
      "🎓 Wirtschaftsinformatik Student",
      "💼 Sales Professional → IT"
    ],
    buttons: [
      { text: "Projekte ansehen", href: "#projekte", primary: true },
      { text: "Kontakt", href: "#kontakt", primary: false }
    ]
  },
  
  about: {
    text: "Ich bin Wirtschaftsinformatik-Student (IU) mit über zehn Jahren Erfahrung im Vertrieb und Management. Meine Stärke ist die Verbindung aus Business-Verständnis, analytischem Denken und wachsender IT-Kompetenz. Ich arbeite strukturiert, datengetrieben und gerne im Team – mit dem Ziel, Prozesse zu verbessern und messbaren Mehrwert zu schaffen.",
    highlights: [
      "Business & IT verbinden: Prozesse, Daten, Umsetzung",
      "Analytisch & strategisch (Kennzahlen, Marktanalysen)",
      "Teamführung, Recruiting, Schulungsorganisation",
      "Lernstark, zuverlässig, klar in der Kommunikation"
    ]
  },
  
  skills: {
    "Programming": ["Python (Data/CSV/Matplotlib)", "Java (OOP/Tests)", "HTML5 & CSS3 (Responsive)", "JavaScript (Basics)"],
    "Data & Analytics": ["Power BI (Anwendung)", "Excel (Advanced)", "SQL (Grundlagen)", "Datenanalyse"],
    "Tools & Methoden": ["Git & GitHub", "Scrum / Agile (PSM I)", "VS Code", "Jira"],
    "Soft Skills": ["Kommunikation", "Teamführung", "Stakeholder-Management", "Präsentation"]
  },
  
  projects: [
    {
      title: "Personal Portfolio (GitHub Pages)",
      desc: "Diese Website ist mein öffentliches Portfolio: modern, performant und barrierearm. Enthält Projekte, Skills und Werdegang – optimiert für Bewerbungen.",
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      links: [
        { text: "GitHub", url: "https://github.com/AlexandruU19" },
        { text: "Live Demo", url: "#" }
      ]
    },
    {
      title: "Sales KPI Analyzer (Python)",
      desc: "Analyse-Tool, das Verkaufsdaten (CSV) einliest, Kennzahlen berechnet und ein Reporting erzeugt. Fokus auf saubere Datenaufbereitung (Pandas) und Visualisierung (Matplotlib).",
      tech: ["Python", "Pandas", "Matplotlib", "CSV"],
      links: [
        { text: "GitHub", url: "https://github.com/AlexandruU19" }
      ]
    },
    {
      title: "Bewerbungs-Organizer (Automation)",
      desc: "Python-Script zur Automatisierung der Dateiablage von Bewerbungsdokumenten sowie Generierung einer Checkliste. Fokus auf Prozessoptimierung und Effizienz.",
      tech: ["Python", "File I/O", "Automation"],
      links: [
        { text: "GitHub", url: "https://github.com/AlexandruU19" }
      ]
    },
    {
      title: "OOP Inventory Manager (Java)",
      desc: "Konsolen-Applikation nach OOP-Prinzipien zur Verwaltung von Beständen inkl. CRUD-Funktionen. Demonstration von sauberer Architektur und Unit-Tests.",
      tech: ["Java", "OOP", "JUnit", "Clean Code"],
      links: [
        { text: "GitHub", url: "https://github.com/AlexandruU19" }
      ]
    }
  ],
  
  career: [
    {
      role: "B.Sc. Wirtschaftsinformatik",
      company: "IU Internationale Hochschule",
      date: "seit 10/2024",
      details: ["Fernstudium mit Fokus auf Software Engineering und IT-Management", "Vollzeit-Studium"]
    },
    {
      role: "Weiterbildung Programmierung",
      company: "Autodidaktisch / Kurse",
      date: "10/2023 – 05/2024",
      details: ["Fokus auf Python, Java OOP, HTML/CSS", "Vorbereitung auf das Studium"]
    },
    {
      role: "Sales Manager / Verkaufsleiter",
      company: "Reemtsma Cigarettenfabriken GmbH",
      date: "02/2022 – 04/2023",
      details: [
        "Analyse von Marktanteilen und Umsätzen",
        "Strategien zur Optimierung der Vertriebsabläufe",
        "Marktbeobachtung & Wettbewerbsanalysen",
        "Personalplanung & Recruiting",
        "Organisation von Mitarbeiterschulungen"
      ]
    },
    {
      role: "Area Sales Manager / Bezirksleiter",
      company: "Scandinavian Tobacco Group GmbH / Freixenet",
      date: "12/2013 – 01/2022",
      details: [
        "Kundenbetreuung und Beratung",
        "Absatzförderung am Point of Sale",
        "IT-/Reporting-Bezug (Power BI) als Teamspezialist"
      ]
    },
    {
      role: "Warenbereichsleiter Food",
      company: "Kaufland AG",
      date: "08/2009 – 11/2013",
      details: [
        "Sortimentspräsentation & aktionsplanung",
        "Personalführung & -verantwortung",
        "Kennzahlenverantwortung (Umsatz, Abschriften)"
      ]
    }
  ],
  
  certificates: [
    { title: "Professional Scrum Master I (PSM I)", date: "07/2024", grade: "Scrum.org" },
    { title: "Grundlagen der Programmierung (Python)", date: "26.01.2024", grade: "Note 1,0" },
    { title: "Objektorientierte Programmierung (Java)", date: "20.03.2024", grade: "Note 1,0" },
    { title: "Webentwicklung (HTML/CSS)", date: "10.05.2024", grade: "Note 1,0" }
  ],
  
  contact: {
    text: "Ich freue mich über Austausch zu Werkstudentenstellen, Projekten oder Praktika im Bereich Wirtschaftsinformatik.",
    email: "a.ursea@hotmail.de",
    github: "https://github.com/AlexandruU19",
    linkedin: "#"
  }
};

// --- RENDER FUNCTIONS ---

function renderHero() {
  const heroNode = document.getElementById('hero-content');
  const { name, claim, facts, buttons } = content.hero;
  
  const buttonsHtml = buttons.map(btn => 
    `<a href="${btn.href}" class="btn ${btn.primary ? 'btn-primary' : 'btn-secondary'}">${btn.text}</a>`
  ).join('');
  
  const factsHtml = facts.map(fact => 
    `<div class="hero-fact-item"><span>${fact}</span></div>`
  ).join('');
  
  heroNode.innerHTML = `
    <h1 class="hero-name fade-in">${name}</h1>
    <p class="hero-claim fade-in" style="animation-delay: 0.1s">${claim}</p>
    <div class="hero-buttons fade-in" style="animation-delay: 0.2s">${buttonsHtml}</div>
    <div class="hero-facts fade-in" style="animation-delay: 0.3s">${factsHtml}</div>
  `;
}

function renderAbout() {
  const aboutNode = document.getElementById('about-content');
  const highlights = content.about.highlights.map(h => 
    `<div class="highlight-card item-fade">
       <div style="margin-bottom:10px; color:var(--accent-color)">✓</div>
       <div>${h}</div>
     </div>`
  ).join('');
  
  aboutNode.innerHTML = `
    <div class="about-grid">
      <p class="about-text item-fade">${content.about.text}</p>
      <div class="highlights-grid">
        ${highlights}
      </div>
    </div>
  `;
}

function renderSkills() {
  const skillsNode = document.getElementById('skills-content');
  let html = '<div class="skills-grid">';
  
  for (const [category, skills] of Object.entries(content.skills)) {
    const chips = skills.map(skill => `<span class="skill-chip">${skill}</span>`).join('');
    html += `
      <div class="skill-category item-fade">
        <h3>${category}</h3>
        <div class="skill-chips">${chips}</div>
      </div>
    `;
  }
  html += '</div>';
  skillsNode.innerHTML = html;
}

function renderProjects() {
  const projectsNode = document.getElementById('projects-content');
  const html = content.projects.map(p => {
    const techStack = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
    const links = p.links.map(l => 
      `<a href="${l.url}" target="_blank" class="btn btn-secondary btn-sm">${l.text}</a>`
    ).join('');
    
    return `
      <div class="project-card item-fade">
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-tech">${techStack}</div>
          <p class="project-desc">${p.desc}</p>
          <div class="project-links">${links}</div>
        </div>
      </div>
    `;
  }).join('');
  
  projectsNode.innerHTML = `<div class="projects-grid">${html}</div>`;
}

function renderTimeline() {
  const careerNode = document.getElementById('career-content');
  const html = content.career.map(c => {
    const details = c.details.map(d => `<li>${d}</li>`).join('');
    return `
      <div class="timeline-item item-fade">
        <div class="timeline-date">${c.date}</div>
        <h3 class="timeline-title">${c.role}</h3>
        <div class="timeline-company">${c.company}</div>
        <ul class="timeline-list">${details}</ul>
      </div>
    `;
  }).join('');
  
  careerNode.innerHTML = `<div class="timeline">${html}</div>`;
}

function renderCertificates() {
  const certNode = document.getElementById('certificates-content');
  const html = content.certificates.map(c => `
    <div class="cert-card item-fade">
      <div class="cert-title">${c.title}</div>
      <span class="cert-date">${c.date}</span>
      <span class="cert-grade">${c.grade}</span>
    </div>
  `).join('');
  
  certNode.innerHTML = `<div class="certificates-grid">${html}</div>`;
}

function renderContact() {
  const contactNode = document.getElementById('contact-content');
  contactNode.innerHTML = `
    <div class="contact-container item-fade">
      <p class="contact-text">${content.contact.text}</p>
      <div class="contact-links">
        <a href="mailto:${content.contact.email}" class="btn btn-primary">Email Senden</a>
        <a href="${content.contact.github}" target="_blank" class="btn btn-secondary">GitHub</a>
        <a href="${content.contact.linkedin}" target="_blank" class="btn btn-secondary">LinkedIn</a>
      </div>
    </div>
  `;
}

// --- APP INIT & INTERACTIONS ---

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  
  // Set initial theme
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.innerHTML = '🌙'; // Icon for dark mode switch
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.innerHTML = '☀️'; // Icon for light mode switch
  }
  
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleBtn.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => observer.observe(section));
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.item-fade').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
  
  // Add visible class styling dynamically or in CSS
  // Here we inject a small style helper directly if not present
  // But strictly we should keep it in CSS.
  // We'll rely on the CSS having a way to handle this, 
  // or purely JS inline manipulation (which we did above).
  // Better: add class 'is-visible' and style in CSS.
  // For this constrained environment, modifying styles inline in the loop is safe.
  
  document.addEventListener('scroll', () => {
    document.querySelectorAll('.item-fade.visible').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  });
}

function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');
  
  btn.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
  
  // Close menu when clicking link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Render Content
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderCertificates();
  renderContact();
  
  // Update footer year
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Init Interactions
  initTheme();
  initMobileMenu();
  initBackToTop();
  
  // Small delay for scroll spy and reveals to ensure DOM is ready
  setTimeout(() => {
    initScrollSpy();
    initScrollReveal();
  }, 100);
});

