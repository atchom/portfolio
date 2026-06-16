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
      showMore: "Show more",
      showLess: "Show less",
      items: [
        {
          role: "Data Registration Assistant (UN Volunteer)",
          company: "UNHCR – Maroua, Cameroon",
          date: "Jan 2023 – Dec 2025",
          missions: [
            "Built ETL pipelines feeding monthly Power BI dashboards to track and visualize refugee arrival trends at the transit center.",
            "Produced site mapping with GIS tools (ArcGIS, QGIS) to keep refugee population locations up to date.",
            "Designed and deployed KoboToolbox electronic forms with skip logic and validation constraints to ensure data quality.",
            "Delivered the monthly dashboard visualizing arrival trends at the transit center.",
            "Handled biometric registration (photos, fingerprints, iris scans) of refugees and asylum seekers.",
            "Managed the section's equipment stock both on premise and in the field.",
            "Maintained IT equipment across the 3 food distribution sites in coordination with WFP."
          ]
        },
        {
          role: "Data Manager Assistant",
          company: "STE HEGBAKOU SARL – Douala, Cameroon",
          date: "Jun 2016 – Oct 2022",
          missions: [
            "Operated daily data sources (SQL Server, PostgreSQL, CSV) to extract, clean, and prepare datasets for decision-making analysis.",
            "Implemented an ELT architecture with Snowflake and dbt: raw data loading followed by in-warehouse transformations.",
            "Extracted, cleaned, and prepared client data to support data specialists in building marketing-mix models.",
            "Produced weekly sales-trend statistics.",
            "Automated a report for the sales team using filters, parameters, and calculated sets that automatically qualify business leads.",
            "Automated leave-letter generation via Power Automate (flow triggered on a SharePoint list, PDF generation from a Word template)."
          ]
        },
        {
          role: "Data Entry Assistant",
          company: "UNHCR – Bertoua, Cameroon",
          date: "2014 – 2016",
          missions: [
            "Entered data on asylum seekers, refugees, and other persons of concern to UNHCR into the ProGres database.",
            "Provided statistics and drafted reports related to registration data, on request."
          ]
        },
        {
          role: "Professional Intern – Completion Department",
          company: "Schlumberger – Douala, Cameroon",
          date: "Sep 2009 – Feb 2010",
          missions: [
            "Managed and maintained the equipment and tools used during completion operations.",
            "Provided on-site technical support during preparation, installation, and operation of completion equipment.",
            "Ensured the availability, security, and performance of business applications (Well Completion Design, stress analysis, field data management)."
          ]
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
          link: "https://github.com/atchom/SIG_Cacao_Cameroun/blob/main/README.md",
          tags: [
            { label: "QGIS", icon: "fa-solid fa-map-location-dot" },
            { label: "Geospatial", icon: "fa-solid fa-globe" },
            { label: "Data Cleaning", icon: "fa-solid fa-broom" },
            { label: "Python", icon: "fa-brands fa-python" }
          ]
        },
        {
          key: "fleet_management",
          title: "Mobile & Desktop Fleet Management App",
          desc:"Interactive admin dashboard for fleet management: real-time vehicle tracking, delivery monitoring, low-stock alerts, and driver routing, centralizing operational KPIs in a single view.",
          image:
            "images/fleet management .png",
          link: "https://github.com/atchom/Fleet_Management/blob/main/README.md",
          tags: [
            { label: "Power BI", icon: "fa-solid fa-chart-column" },
            { label: "Android", icon: "fa-brands fa-android" },
            { label: "Tracking", icon: "fa-solid fa-route" },
            { label: "Geospatial", icon: "fa-solid fa-location-dot" }
          ]
        },
        {
          key: "predication_app",
          title: "Predication App – Mobile Reporting",
          desc:"Cross-platform mobile app (Flutter + PostgreSQL) to manage preaching reports: real-time dashboard, offline-first sync, secure authentication, and field mapping.",
          image:
            "images/predication_app.png",
          link: "https://github.com/atchom/predication_App/blob/main/README.md",
          tags: [
            { label: "Android", icon: "fa-solid fa-mobile-screen-button" },
            { label: "postgreSQL", icon: "fa-solid fa-database" },
            { label: "Offline sync", icon: "fa-solid fa-rotate" },
            { label: "Dashboard", icon: "fa-solid fa-gauge-high" }
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
      showMore: "Voir plus",
      showLess: "Voir moins",
      items: [
        {
          role: "Data Registration Assistant (Volontaire ONU)",
          company: "HCR – Maroua, Cameroun",
          date: "Janv. 2023 – Déc. 2025",
          missions: [
            "Développement de pipelines ETL pour alimenter des tableaux de bord Power BI mensuels, suivant les tendances d’arrivée des réfugiés au centre de transit.",
            "Production cartographique des sites pour actualiser la localisation des populations réfugiées à l’aide de SIG (ArcGIS, QGIS).",
            "Conception et déploiement de formulaires KoboToolbox avec logiques de saut (skip logic) et contraintes de validation pour garantir la qualité des données.",
            "Production du dashboard mensuel pour visualiser la tendance des arrivées au centre de transit.",
            "Enregistrements biométriques (photos, empreintes digitales, scans d’iris) des réfugiés et demandeurs d’asile.",
            "Gestion du stock du matériel de travail de la section, en premise et sur le terrain.",
            "Maintenance du parc informatique sur les 3 sites de distribution des vivres en coordination avec le PAM."
          ]
        },
        {
          role: "Data Manager Assistant",
          company: "STE HEGBAKOU SARL – Douala, Cameroun",
          date: "Juin 2016 – Oct. 2022",
          missions: [
            "Exploitation quotidienne de sources de données (SQL Server, PostgreSQL, CSV) pour extraire, nettoyer et préparer des jeux de données à des fins d’analyse décisionnelle.",
            "Mise en œuvre d’une architecture ETL avec Snowflake et dbt : chargement des données brutes puis transformations directement dans l’entrepôt.",
            "Extraction, nettoyage et préparation des données client pour aider les spécialistes des données à créer des modèles de mix marketing.",
            "Production hebdomadaire des statistiques sur la tendance des ventes.",
            "Automatisation d’un rapport pour l’équipe commerciale à l’aide de filtres, paramètres et ensembles calculés qualifiant automatiquement les prospects.",
            "Automatisation de la production des lettres de congé via Power Automate (flux déclenché sur liste SharePoint, génération PDF depuis template Word)."
          ]
        },
        {
          role: "Assistant de saisie de données",
          company: "HCR – Bertoua, Cameroun",
          date: "2014 – 2016",
          missions: [
            "Saisie de données concernant les demandeurs d’asile, réfugiés et autres personnes relevant de la compétence du HCR dans la base ProGres.",
            "Fourniture de statistiques et rédaction de rapports liés aux données d’enregistrement, sur demande."
          ]
        },
        {
          role: "Stagiaire professionnel – Service Complétion",
          company: "Schlumberger – Douala, Cameroun",
          date: "Sep. 2009 – Fév. 2010",
          missions: [
            "Gestion et entretien des équipements et outils utilisés lors des opérations de complétion.",
            "Support technique sur site lors de la préparation, l’installation et l’exploitation des équipements de complétion.",
            "Disponibilité, sécurité et performance des applications métiers (Well Completion Design, analyse de contraintes, gestion de données de terrain)."
          ]
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
          title: "SIG_Cmr_Cacao – SIG des bassins cacaoyers camerounais",
          desc:
            "Système d'Information Géographique cartographiant les zones de production de cacao au Cameroun. Collecte, nettoyage et géolocalisation des localités productrices avec cartes interactives.",
          image:
            "images/Map_cmr_SIG.png",
          link: "https://github.com/atchom/SIG_Cacao_Cameroun/blob/main/README.md",
          tags: [
            { label: "QGIS", icon: "fa-solid fa-map-location-dot" },
            { label: "Géospatial", icon: "fa-solid fa-globe" },
            { label: "Nettoyage", icon: "fa-solid fa-broom" },
            { label: "Python", icon: "fa-brands fa-python" }
          ]
        },
        {
          key: "fleet_management",
          title: "App mobile et desktop de gestion de la flotte",
          desc:
            "Tableau de bord administrateur pour la gestion de flotte : suivi des véhicules en temps réel, suivi des livraisons, alertes de stock et routage des chauffeurs, centralisant les KPI opérationnels en une seule vue.",
          image:
            "images/fleet management .png",
          link: "https://github.com/atchom/Fleet_Management/blob/main/README.md",
          tags: [
            { label: "Power BI", icon: "fa-solid fa-chart-column" },
            { label: "Android", icon: "fa-brands fa-android" },
            { label: "Tracking", icon: "fa-solid fa-route" },
            { label: "Géospatial", icon: "fa-solid fa-location-dot" }
          ]
        },
        {
          key: "predication_app",
          title: "Predication App – Application mobile",
          desc:
            "Application mobile multiplateforme (Flutter + PostgreSQL) de gestion des rapports de prédication : dashboard temps réel, synchronisation hors-ligne, authentification sécurisée et cartographie terrain.",
          image:
            "images/predication_app.png",
          link: "https://github.com/atchom/predication_App/blob/main/README.md",
          tags: [
            { label: "Android", icon: "fa-solid fa-mobile-screen-button" },
            { label: "postgreSQl", icon: "fa-solid fa-database" },
            { label: "Sync offline", icon: "fa-solid fa-rotate" },
            { label: "Dashboard", icon: "fa-solid fa-gauge-high" }
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

const MISSIONS_PREVIEW = 3; // missions shown before "Voir plus"

// Recalculate an open accordion panel height (after toggling "Voir plus/moins")
function refreshPanelHeight(panel) {
  if (!panel.classList.contains("open")) return;
  const inner = panel.querySelector(".timeline-panel-inner");
  panel.style.maxHeight = inner.scrollHeight + "px";
}

function createTimeline() {
  const container = document.getElementById("timeline");
  container.innerHTML = "";
  const dict = translations[currentLang].experience;
  const items = dict.items; // already reverse-chronological

  items.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `timeline-item fade-up ${index % 2 === 0 ? "left" : "right"}`;

    const content = document.createElement("div");
    content.className = "timeline-item-content accordion" + (index === 0 ? " open" : "");

    // --- Clickable header ---
    const header = document.createElement("button");
    header.type = "button";
    header.className = "timeline-header";
    header.setAttribute("aria-expanded", index === 0 ? "true" : "false");

    const headText = document.createElement("div");
    headText.className = "timeline-head-text";

    const title = document.createElement("h3");
    title.className = "timeline-title";
    title.textContent = item.role;

    const meta = document.createElement("p");
    meta.className = "timeline-meta";
    meta.textContent = item.company;

    const date = document.createElement("p");
    date.className = "timeline-date";
    date.textContent = item.date;

    headText.appendChild(title);
    headText.appendChild(meta);
    headText.appendChild(date);

    const chevron = document.createElement("span");
    chevron.className = "timeline-chevron";
    chevron.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';

    header.appendChild(headText);
    header.appendChild(chevron);

    // --- Collapsible panel ---
    const panel = document.createElement("div");
    panel.className = "timeline-panel" + (index === 0 ? " open" : "");

    const inner = document.createElement("div");
    inner.className = "timeline-panel-inner";

    const list = document.createElement("ul");
    list.className = "timeline-missions";

    item.missions.forEach((mission, mIndex) => {
      const li = document.createElement("li");
      li.className = "timeline-mission";
      if (mIndex >= MISSIONS_PREVIEW) li.classList.add("mission-hidden");
      const mIcon = document.createElement("i");
      mIcon.className = "fa-solid fa-circle-check";
      const mText = document.createElement("span");
      mText.textContent = mission;
      li.appendChild(mIcon);
      li.appendChild(mText);
      list.appendChild(li);
    });

    inner.appendChild(list);

    // --- "Voir plus / Voir moins" ---
    if (item.missions.length > MISSIONS_PREVIEW) {
      const moreBtn = document.createElement("button");
      moreBtn.type = "button";
      moreBtn.className = "timeline-more-btn";
      const hiddenCount = item.missions.length - MISSIONS_PREVIEW;
      const setLabel = (expanded) => {
        moreBtn.innerHTML =
          (expanded ? dict.showLess : `${dict.showMore} (${hiddenCount})`) +
          ' <i class="fa-solid fa-chevron-down"></i>';
        moreBtn.classList.toggle("expanded", expanded);
      };
      setLabel(false);

      moreBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const expanded = moreBtn.classList.contains("expanded");
        list
          .querySelectorAll(".mission-hidden")
          .forEach((el) => el.classList.toggle("revealed", !expanded));
        setLabel(!expanded);
        refreshPanelHeight(panel);
      });

      inner.appendChild(moreBtn);
    }

    panel.appendChild(inner);

    // --- Toggle behaviour ---
    header.addEventListener("click", () => {
      const isOpen = content.classList.toggle("open");
      panel.classList.toggle("open", isOpen);
      header.setAttribute("aria-expanded", isOpen ? "true" : "false");
      panel.style.maxHeight = isOpen ? inner.scrollHeight + "px" : null;
    });

    content.appendChild(header);
    content.appendChild(panel);

    // --- Central icon (unchanged from original) ---
    const iconWrapper = document.createElement("div");
    iconWrapper.className = "timeline-icon-wrapper";
    const icon = document.createElement("i");
    icon.className = index === 0 ? "fa-solid fa-users" : "fa-solid fa-briefcase";
    iconWrapper.appendChild(icon);

    wrapper.appendChild(content);
    wrapper.appendChild(iconWrapper);
    container.appendChild(wrapper);
  });

  // Set initial height for the default-open first item
  requestAnimationFrame(() => {
    container.querySelectorAll(".timeline-panel.open").forEach(refreshPanelHeight);
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
