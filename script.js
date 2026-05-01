// --- Translations -------------------------------------------------

const translations = {
  en: {
    meta: {
      title: "ATCHOM SANDJI DANIEL | Data Management & BI Portfolio",
      description:
        "Portfolio of ATCHOM SANDJI DANIEL, Data Management professional specializing in ETL, BI, and data warehousing."
    },
    nav: {
      logo: "ASD • Data & BI",
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Technical Stack",
      contact: "Contact"
    },
    hero: {
      greeting: "Turning raw data into clear decisions.",
      title: "Data Management • ETL • Business Intelligence",
      location: "Ndogbong, Douala, Cameroon",
      ctaContact: "Contact me",
      ctaWork: "View my work"
    },
    about: {
      title: "About me",
      p1: "Results-driven Data Management professional with over 5 years of experience in data analysis, ETL processes, and business intelligence.",
      p2: "I design data warehouses, build interactive dashboards, and automate data pipelines to support strategic decision-making, combining SQL, Power BI, and Python with strong analytical skills.",
      email: "Email",
      linkedin: "LinkedIn profile"
    },
    experience: {
      title: "Professional experience",
      items: [
        {
          role: "Data Registration Assistant (UN Volunteer)",
          company: "UNHCR – Maroua, Cameroon",
          date: "Jan 2023 – Dec 2025",
          desc:"Automated data flows (Kobo, ProGres, Excel) into a centralized warehouse, built Power BI dashboards, and produced dynamic maps to support refugee assistance."
        },
        {
          role: "Data Manager Assistant",
          company: "STE HEGBAKOU SARL – Douala, Cameroon",
          date: "Jun 2016 – Oct 2022",
          desc:"Exploited SQL Server, PostgreSQL, and CSV data, implemented an ELT architecture with Snowflake and dbt, and designed star schemas to optimize query performance."
        },
        {
          role: "Data Entry Assistant",
          company: "UNHCR – Bertoua, Cameroon",
          date: "2014 – 2016",
          desc:"Registered asylum seekers in ProGres, cleaned and validated data, and contributed to data quality improvement initiatives."
        },
        {
          role: "Professional Intern – Completion Department",
          company: "Schlumberger – Douala, Cameroon",
          date: "Sep 2009 – Feb 2010",
          desc:"Maintained completion equipment, provided on-site technical support, and contributed to the availability and security of well completion applications."
        }
      ]
    },
    projects: {
      title: "Selected projects",
      items: [
        {
          key: "littoral",
          title: "Littoral Region Analytics – Cameroon",
          desc:"Data analysis and visualization project for the Littoral region of Cameroon, mapping key cities and demographic insights.",
          image:
            "images/Dhis2_LT.png",
          link: "https://github.com/atchom/DHIS2_LT_CMR/blob/main/README.md",
          tags: [
            { label: "QGIS", icon: "fa-solid fa-map-location-dot" },
            { label: "Data Viz", icon: "fa-solid fa-chart-column" },
            { label: "Geospatial", icon: "fa-solid fa-globe" }
          ]
        },
        {
          key: "sig_cmr_cacao",
          title: "Cameroon GIS Cocoa – Cocoa Basins GIS",
          desc:"Geographic Information System mapping cocoa production zones in Cameroon. Collection, cleaning, and geolocalization of production areas with interactive maps",
          image:
            "images/Map_cmr_SIG.png",
          link: "https://github.com/atchom/SIG_Cacao_Cameroun/edit/main/README.md",
          tags: [
            { label: "QGIS", icon: "fa-solid fa-map-location-dot" },
            { label: "Geospatial", icon: "fa-solid fa-globe" },
            { label: "Data Cleaning", icon: "fa-solid fa-broom" },
            { label: "Python", icon: "fa-brands fa-python" }
          ]
        }
      ],
      viewProject: "View project"
    },
    stack: {
      title: "Technical stack",
      frontend: "Data visualization",
      backend: "Data & warehousing",
      tools: "Cloud & tools",
      items: {
        frontend: [
          { label: "Power BI", icon: "fa-solid fa-chart-column" },
          { label: "Excel", icon: "fa-solid fa-table" }
        ],
        backend: [
          { label: "SQL Server", icon: "fa-solid fa-database" },
          { label: "PostgreSQL", icon: "fa-solid fa-database" },
          { label: "MySQL", icon: "fa-solid fa-database" },
          { label: "Snowflake", icon: "fa-solid fa-cloud" },
          { label: "dbt", icon: "fa-solid fa-code-branch" },
          { label: "Python", icon: "fa-brands fa-python" }
        ],
        tools: [
          { label: "QGIS / ArcGIS", icon: "fa-solid fa-map-location-dot" },
          { label: "Kobo Toolbox", icon: "fa-solid fa-mobile-screen" },
          { label: "Data Cleaning", icon: "fa-solid fa-broom" },
          { label: "Predictive Modeling", icon: "fa-solid fa-brain" }
        ]
      }
    },
    contact: {
      title: "Let’s work together",
      subtitle:
        "Looking for support in data management, ETL, or BI dashboards? I’d be happy to discuss your needs.",
      email: "Email me",
      linkedin: "Connect on LinkedIn"
    },
    footer: {
      text: "© 2026 ATCHOM SANDJI DANIEL – Data Management & Business Intelligence"
    }
  },
  fr: {
    meta: {
      title: "ATCHOM SANDJI DANIEL | Gestion de données & BI",
      description:
        "Portfolio d’ATCHOM SANDJI DANIEL, professionnel de la gestion de données spécialisé en ETL, BI et entrepôts de données."
    },
    nav: {
      logo: "ASD • Data & BI",
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      stack: "Stack technique",
      contact: "Contact"
    },
    hero: {
      greeting: "Transformer les données brutes en décisions claires.",
      title: "Gestion de données • ETL • Business Intelligence",
      location: "Ndogbong, Douala, Cameroun",
      ctaContact: "Me contacter",
      ctaWork: "Voir mes réalisations"
    },
    about: {
      title: "À propos de moi",
      p1: "Professionnel de la gestion de données avec plus de 5 ans d’expérience en analyse de données, processus ETL et business intelligence.",
      p2: "Je conçois des entrepôts de données, développe des tableaux de bord interactifs et automatise des pipelines de données pour soutenir la prise de décision, en combinant SQL, Power BI et Python avec une forte capacité d’analyse.",
      email: "Email",
      linkedin: "Profil LinkedIn"
    },
    experience: {
      title: "Expériences professionnelles",
      items: [
        {
          role: "Assistant en enregistrement des données (Volontaire ONU)",
          company: "HCR – Maroua, Cameroun",
          date: "Janv. 2023 – Déc. 2025",
          desc:
            "Automatisation des flux de données (Kobo, ProGres, Excel) vers un entrepôt centralisé, création de tableaux de bord Power BI et production de cartes dynamiques pour appuyer l’assistance aux réfugiés."
        },
        {
          role: "Assistant Data Manager",
          company: "STE HEGBAKOU SARL – Douala, Cameroun",
          date: "Juin 2016 – Oct. 2022",
          desc:
            "Exploitation de données SQL Server, PostgreSQL et CSV, mise en place d’une architecture ELT avec Snowflake et dbt, et conception de schémas en étoile pour optimiser les performances des requêtes."
        },
        {
          role: "Assistant de saisie de données",
          company: "HCR – Bertoua, Cameroun",
          date: "2014 – 2016",
          desc:
            "Enregistrement des demandeurs d’asile dans ProGres, contrôle et nettoyage des données, contribution à l’amélioration de la qualité des données."
        },
        {
          role: "Stagiaire professionnel – Service Complétion",
          company: "Schlumberger – Douala, Cameroun",
          date: "Sep. 2009 – Fév. 2010",
          desc:
            "Maintenance des équipements de complétion, support technique sur site et contribution à la disponibilité et à la sécurité des applications de complétion de puits."
        }
      ]
    },
    projects: {
      title: "Projets sélectionnés",
      items: [
        {
          key: "littoral",
          title:"Analyse Région du Littoral – Cameroun",
          desc:
            "Projet d'analyse et visualisation de données pour la région du Littoral au Cameroun, cartographiant les villes clés et les insights démographiques.",
          image:
            "images/Dhis2_LT.png",
          link: "https://github.com/atchom/DHIS2_LT_CMR/blob/main/README.md",
          tags: [
            { label: "QGIS", icon: "fa-solid fa-map-location-dot" },
            { label: "Data Viz", icon: "fa-solid fa-chart-column" },
            { label: "Géospatial", icon: "fa-solid fa-globe" }
          ]
        },
        {
          key: "sig_cmr_cacao",
          title: "Insights ventes & marketing – Site Volvic",
          desc:
            "Système d'Information Géographique cartographiant les zones de production de cacao au Cameroun. Collecte, nettoyage et géolocalisation des localités productrices avec cartes interactives.",
          image:
            "images/Map_cmr_SIG.png",
          link: "https://github.com/atchom/SIG_Cacao_Cameroun/edit/main/README.md",
          tags: [
            { label: "QGIS", icon: "fa-solid fa-map-location-dot" },
            { label: "Géospatial", icon: "fa-solid fa-globe" },
            { label: "Nettoyage", icon: "fa-solid fa-broom" },
            { label: "Python", icon: "fa-brands fa-python" }
          ]
        }
      ],
      viewProject: "Voir le projet"
    },
    stack: {
      title: "Stack technique",
      frontend: "Visualisation de données",
      backend: "Données & entrepôts",
      tools: "Cloud & outils",
      items: {
        frontend: [
          { label: "Power BI", icon: "fa-solid fa-chart-column" },
          { label: "Excel", icon: "fa-solid fa-table" }
        ],
        backend: [
          { label: "SQL Server", icon: "fa-solid fa-database" },
          { label: "PostgreSQL", icon: "fa-solid fa-database" },
          { label: "MySQL", icon: "fa-solid fa-database" },
          { label: "Snowflake", icon: "fa-solid fa-cloud" },
          { label: "dbt", icon: "fa-solid fa-code-branch" },
          { label: "Python", icon: "fa-brands fa-python" }
        ],
        tools: [
          { label: "QGIS / ArcGIS", icon: "fa-solid fa-map-location-dot" },
          { label: "Kobo Toolbox", icon: "fa-solid fa-mobile-screen" },
          { label: "Nettoyage de données", icon: "fa-solid fa-broom" },
          { label: "Modélisation prédictive", icon: "fa-solid fa-brain" }
        ]
      }
    },
    contact: {
      title: "Travaillons ensemble",
      subtitle:
        "Vous cherchez un support en gestion de données, ETL ou tableaux de bord BI ? Discutons de votre besoin.",
      email: "M’écrire",
      linkedin: "Me joindre sur LinkedIn"
    },
    footer: {
      text: "© 2026 ATCHOM SANDJI DANIEL – Gestion de données & Business Intelligence"
    }
  }
};

// --- Language handling --------------------------------------------

const STORAGE_KEY = "portfolio_lang";

function detectInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && translations[stored]) return stored;

  const browser = navigator.language || navigator.userLanguage || "en";
  if (browser.toLowerCase().startsWith("fr")) return "fr";
  return "en";
}

let currentLang = detectInitialLang();

// --- Apply translations to static elements ------------------------

function applyTranslations() {
  const dict = translations[currentLang];

  // <title> and meta
  document.title = dict.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", dict.meta.description);

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = key.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), dict);
    if (typeof value === "string") {
      // smooth opacity transition
      el.style.opacity = 0;
      requestAnimationFrame(() => {
        el.textContent = value;
        el.style.transition = "opacity 0.2s ease";
        el.style.opacity = 1;
      });
    }
  });
}

// --- Dynamic content: timeline, projects, stack -------------------

function createTimeline() {
  const container = document.getElementById("timeline");
  container.innerHTML = "";
  const items = translations[currentLang].experience.items;

  items.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `timeline-item fade-up ${index % 2 === 0 ? "left" : "right"}`;

    const content = document.createElement("div");
    content.className = "timeline-item-content";

    const iconWrapper = document.createElement("div");
    iconWrapper.className = "timeline-icon-wrapper";
    const icon = document.createElement("i");
    icon.className = index === 0 ? "fa-solid fa-users" : "fa-solid fa-briefcase";
    iconWrapper.appendChild(icon);

    const title = document.createElement("h3");
    title.className = "timeline-title";
    title.textContent = item.role;

    const meta = document.createElement("p");
    meta.className = "timeline-meta";
    meta.textContent = item.company;

    const date = document.createElement("p");
    date.className = "timeline-date";
    date.textContent = item.date;

    const desc = document.createElement("p");
    desc.className = "timeline-desc";
    desc.textContent = item.desc;

    content.appendChild(title);
    content.appendChild(meta);
    content.appendChild(date);
    content.appendChild(desc);

    wrapper.appendChild(content);
    wrapper.appendChild(iconWrapper);
    container.appendChild(wrapper);
  });
}

function createProjects() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";
  const dict = translations[currentLang];
  const items = dict.projects.items;

  items.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card fade-up";

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "project-image-wrapper";

    const img = document.createElement("img");
    img.className = "project-image";
    img.src = project.image;
    img.alt = project.title;

    const overlay = document.createElement("div");
    overlay.className = "project-overlay";

    const overlayIcon = document.createElement("div");
    overlayIcon.className = "project-overlay-icon";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-arrow-up-right-from-square";
    overlayIcon.appendChild(icon);
    overlay.appendChild(overlayIcon);

    imgWrapper.appendChild(img);
    imgWrapper.appendChild(overlay);

    const content = document.createElement("div");
    content.className = "project-content";

    const titleRow = document.createElement("div");
    titleRow.className = "project-title-row";
    const titleIcon = document.createElement("i");
    titleIcon.className = "fa-solid fa-diagram-project";
    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;
    titleRow.appendChild(titleIcon);
    titleRow.appendChild(title);

    const desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = project.desc;

    const tagsWrapper = document.createElement("div");
    tagsWrapper.className = "project-tags";
    project.tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.className = "project-tag";
      const tagIcon = document.createElement("i");
      tagIcon.className = tag.icon;
      const tagLabel = document.createElement("span");
      tagLabel.textContent = tag.label;
      tagEl.appendChild(tagIcon);
      tagEl.appendChild(tagLabel);
      tagsWrapper.appendChild(tagEl);
    });

    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = dict.projects.viewProject + " ";
    const arrow = document.createElement("i");
    arrow.className = "fa-solid fa-arrow-right";
    link.appendChild(arrow);

    content.appendChild(titleRow);
    content.appendChild(desc);
    content.appendChild(tagsWrapper);
    content.appendChild(link);

    card.appendChild(imgWrapper);
    card.appendChild(content);
    container.appendChild(card);
  });
}

function createStack() {
  const container = document.getElementById("stack-grid");
  container.innerHTML = "";
  const dict = translations[currentLang];
  const stack = dict.stack;

  const columns = [
    { key: "frontend", title: stack.frontend },
    { key: "backend", title: stack.backend },
    { key: "tools", title: stack.tools }
  ];

  columns.forEach((col) => {
    const colEl = document.createElement("div");
    colEl.className = "stack-column fade-up";

    const title = document.createElement("h3");
    title.className = "stack-column-title";
    title.textContent = col.title;

    const itemsWrapper = document.createElement("div");
    itemsWrapper.className = "stack-items";

    stack.items[col.key].forEach((item) => {
      const itemEl = document.createElement("div");
      itemEl.className = "stack-item";

      const iconWrapper = document.createElement("div");
      iconWrapper.className = "stack-item-icon";
      const icon = document.createElement("i");
      icon.className = item.icon;
      iconWrapper.appendChild(icon);

      const label = document.createElement("span");
      label.className = "stack-item-label";
      label.textContent = item.label;

      itemEl.appendChild(iconWrapper);
      itemEl.appendChild(label);
      itemsWrapper.appendChild(itemEl);
    });

    colEl.appendChild(title);
    colEl.appendChild(itemsWrapper);
    container.appendChild(colEl);
  });
}

// --- Hero typing animation ----------------------------------------

function startTyping() {
  const el = document.querySelector(".hero-typing");
  if (!el) return;
  const fullText = translations[currentLang].hero.greeting;
  let index = 0;
  el.textContent = "";

  function type() {
    if (index <= fullText.length) {
      el.textContent = fullText.slice(0, index);
      index++;
      setTimeout(type, 60);
    }
  }
  type();
}

// --- Floating technology icons ------------------------------------

function initFloatingIcons() {
  const container = document.querySelector(".hero-floating-icons");
  if (!container) return;
  container.innerHTML = "";

  const techs = [
    { icon: "fa-brands fa-python", color: "#2563eb" },
    { icon: "fa-solid fa-database", color: "#0f766e" },
    { icon: "fa-solid fa-chart-column", color: "#7c3aed" },
    { icon: "fa-solid fa-cloud", color: "#0284c7" },
    { icon: "fa-solid fa-diagram-project", color: "#ea580c" }
  ];

  const count = 8;
  for (let i = 0; i < count; i++) {
    const tech = techs[i % techs.length];
    const el = document.createElement("div");
    el.className = "floating-icon";
    const size = 32 + Math.random() * 18;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.background = tech.color;
    el.style.left = `${10 + Math.random() * 70}%`;
    el.style.top = `${10 + Math.random() * 70}%`;
    el.style.animationDelay = `${Math.random() * 6}s`;

    const icon = document.createElement("i");
    icon.className = tech.icon;
    el.appendChild(icon);
    container.appendChild(el);
  }
}

// --- Intersection Observer for fade-up ----------------------------

function initIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}

// --- Navbar scroll background change ------------------------------

function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = "0 10px 30px rgba(15, 23, 42, 0.08)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
}

// --- Language switcher --------------------------------------------

function initLanguageSwitcher() {
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem(STORAGE_KEY, currentLang);

      buttons.forEach((b) => b.classList.toggle("active", b.dataset.lang === currentLang));

      // Rebuild dynamic content with new language
      createTimeline();
      createProjects();
      createStack();
      applyTranslations();
      startTyping();
      initIntersectionObserver();
    });
  });
}

// --- Smooth scroll for nav links ---------------------------------

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

// --- DOMContentLoaded: order of operations ------------------------

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize UI components
  initNavbarScroll();
  initFloatingIcons();
  initSmoothScroll();

  // 2. Create dynamic elements with initial language values
  createTimeline();
  createProjects();
  createStack();

  // 3. Apply language system
  applyTranslations();
  startTyping();
  initIntersectionObserver();
  initLanguageSwitcher();

  // 4. External links (LinkedIn placeholder)
  const linkedinUrl = "www.linkedin.com/in/daniel-atchom-sandji-5667581ba/"; // à remplacer par ton vrai profil
  const link1 = document.getElementById("linkedin-link");
  const link2 = document.getElementById("contact-linkedin");
  if (link1) link1.href = linkedinUrl;
  if (link2) link2.href = linkedinUrl;
});
