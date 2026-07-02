// --- Translations -------------------------------------------------

const translations = {
  en: {
    meta: {
      title: "ATCHOM SANDJI DANIEL | Data & Prompt Engineer",
      description:
        "Portfolio of ATCHOM SANDJI DANIEL, Data & Prompt Engineer building end-to-end data platforms: self-hosted databases, real-time services, ETL/ELT, generative AI and BI."
    },
    nav: {
      logo: "ASD • Data & AI",
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Technical Stack",
      contact: "Contact"
    },
    hero: {
      greeting: "From raw data to decisions — and real-time intelligence.",
      title: "Data & Prompt Engineering • Infrastructure & real-time • Generative AI • BI",
      location: "Ndogbong, Douala, Cameroon",
      ctaContact: "Contact me",
      ctaWork: "View my work"
    },
    about: {
      title: "About me",
      p1: "Data & Prompt Engineer with over 5 years of experience, evolving from data analysis, ETL and business intelligence toward building complete data platforms.",
      p2: "My approach is to deliver reliable, end-to-end solutions — from the technical foundation right through to the business decision. I work on high-stakes projects across healthcare, naval and humanitarian sectors, where data must stay available, secure and usable even in demanding conditions. Rigorous and curious, I pair solid data fundamentals with active work on AI to build tools that genuinely simplify their users' day-to-day.",
      email: "Email",
      linkedin: "LinkedIn profile"
    },
    experience: {
      title: "Professional experience",
      hint: "New to the jargon? Hover over the underlined terms for a plain-language definition.",
      showMore: "Show more",
      showLess: "Show less",
      items: [
        {
          role: "Data & Prompt Engineer",
          company: "Freelance · Multi-client engagements",
          companyIcon: "fa-solid fa-user-tie",
          date: "Jan 2026 – Present",
          missions: [
            "Self-hosted and secured database servers (PostgreSQL, MySQL) on dedicated infrastructure: replication, automated backups, monitoring and hardened access.",
            "Deployed real-time services such as LiveKit (video / WebRTC) and Fluxer for live event synchronization, orchestrated through Docker and reverse proxies.",
            "Engineered robust ETL/ELT pipelines and offline-first architectures with deferred sync to keep field apps usable without connectivity.",
            "Integrated generative-AI building blocks — prompt design, RAG and workflow automation — to turn raw data into decisions.",
            "Built ShipDeck, a modular ERP for naval shipyards (quotes, parts management, time and inventory tracking).",
            "Delivered ShellTrack, a seafood traceability platform compliant with DGAL and FDA FSMA 204 standards.",
            "Shipped CareHandover and HomeCareSync, web + mobile healthcare solutions for hospital-discharge coordination and offline-first home care."
          ]
        },
        {
          role: "Data Registration Assistant (UN Volunteer)",
          company: "UNHCR – Maroua, Cameroon",
          companyIcon: "fa-solid fa-people-roof",
          date: "Jan 2023 – Dec 2025",
          missions: [
            "Built ETL pipelines feeding monthly Power BI dashboards to track and visualize refugee arrival trends at the transit center.",
            "Produced site mapping with GIS tools (ArcGIS, QGIS) to keep refugee population locations up to date.",
            "Designed and deployed KoboToolbox electronic forms with skip logic and validation constraints to ensure data quality.",
            "Delivered the monthly dashboard visualizing arrival trends at the transit center.",
            "Handled biometric registration (photos, fingerprints, iris scans) of refugees and asylum seekers using proGres v4, RApp and BIMS.",
            "Managed the section's equipment stock both on premise and in the field.",
            "Maintained IT equipment across the 3 food distribution sites in coordination with WFP."
          ]
        },
        {
          role: "Data Manager Assistant",
          company: "STE HEGBAKOU SARL – Douala, Cameroon",
          companyIcon: "fa-solid fa-building",
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
          companyIcon: "fa-solid fa-people-roof",
          date: "2014 – 2016",
          missions: [
            "Entered data on asylum seekers, refugees, and other persons of concern to UNHCR into the ProGres database.",
            "Provided statistics and drafted reports related to registration data, on request."
          ]
        },
        {
          role: "Professional Intern – Completion Department",
          company: "Schlumberger – Douala, Cameroon",
          companyIcon: "fa-solid fa-oil-well",
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
          link: "https://atchom.github.io/fleet_app",
          tags: [
            { label: "Power BI", icon: "fa-solid fa-chart-column" },
            { label: "Android", icon: "fa-brands fa-android" },
            { label: "Tracking", icon: "fa-solid fa-route" },
            { label: "Geospatial", icon: "fa-solid fa-location-dot" }
          ]
        },
        {
          key: "predication_app",
          title: "predication App – Mobile Reporting",
          desc:"Cross-platform mobile app (Android + PostgreSQL) to manage preaching reports: real-time dashboard, offline-first sync, secure authentication, and field mapping.",
          image:
            "images/predication_app.png",
          link: "https://atchom.github.io/predication_App",
          tags: [
            { label: "Android", icon: "fa-solid fa-mobile-screen-button" },
            { label: "postgreSQL", icon: "fa-solid fa-database" },
            { label: "Offline sync", icon: "fa-solid fa-rotate" },
            { label: "Dashboard", icon: "fa-solid fa-gauge-high" }
          ]
        },
        {
          key: "stock_management",
          title: "Stock & Inventory Management",
          desc:"Enterprise inventory management: real-time tracking of inbound/outbound movements, stock valuation, threshold alerts, and automated multi-warehouse replenishment.",
          image:
            "images/stock_management.png",
          link: "#",
          tags: [
            { label: "Inventory", icon: "fa-solid fa-boxes-stacked" },
            { label: "Dashboard", icon: "fa-solid fa-gauge-high" },
            { label: "Alerts", icon: "fa-solid fa-bell" },
            { label: "Analytics", icon: "fa-solid fa-chart-column" }
          ]
        },
        {
          key: "carehandover",
          title: "CareHandover — Hospital-to-Home Transition",
          desc:"A web platform for hospital teams and a mobile app for families that structures senior discharge (medications, follow-up appointments, warning signs, emergency contacts) with automated check-ins at D+2, D+7, D+14 and D+30. A B2G2B model sold to regional health authorities to cut costly readmissions.",
          image:
            "images/Carehandover.png",
          link: "#",
          tags: [
            { label: "Healthcare", icon: "fa-solid fa-heart-pulse" },
            { label: "Web + Mobile", icon: "fa-solid fa-laptop-medical" },
            { label: "Care coordination", icon: "fa-solid fa-house-medical" },
            { label: "B2G2B", icon: "fa-solid fa-hospital" }
          ]
        },
        {
          key: "shelltrack",
          title: "ShellTrack — Seafood Traceability & Compliance",
          desc:"Traceability and compliance platform for seafood processing plants: quay-to-shipment tracking via web, mobile and scanners, with automated certified documents compliant with DGAL and FDA FSMA 204 standards. Used across 200+ plants in Atlantic Canada.",
          image:
            "images/Shelltrack.png",
          link: "#",
          tags: [
            { label: "Traceability", icon: "fa-solid fa-barcode" },
            { label: "Web + Mobile", icon: "fa-solid fa-mobile-screen-button" },
            { label: "Compliance", icon: "fa-solid fa-clipboard-check" },
            { label: "Seafood", icon: "fa-solid fa-fish" }
          ]
        },
        {
          key: "homecaresync",
          title: "HomeCareSync — Offline Home Care",
          desc:"Offline-first mobile app for rural home-care aides: vital signs capture, wound photos and notes, and patient e-signature — even without cellular coverage — with automatic sync via vehicle Wi-Fi or back at the office.",
          image:
            "images/homecaresync.png",
          link: "#",
          tags: [
            { label: "Healthcare", icon: "fa-solid fa-heart-pulse" },
            { label: "Offline-first", icon: "fa-solid fa-cloud-arrow-up" },
            { label: "Mobile", icon: "fa-solid fa-mobile-screen-button" },
            { label: "e-Signature", icon: "fa-solid fa-signature" }
          ]
        },
        {
          key: "shipdeck",
          title: "ShipDeck — ERP for Naval Shipyards",
          desc:"Modular ERP for small and mid-size shipyards, an affordable alternative to 500K$ systems: quotes and parts management, time tracking per task and inventory, deployed progressively. Built for Atlantic shipyards (50+ yards).",
          image:
            "images/shipdeck.png",
          link: "#",
          tags: [
            { label: "ERP", icon: "fa-solid fa-diagram-project" },
            { label: "Naval", icon: "fa-solid fa-ship" },
            { label: "Time tracking", icon: "fa-solid fa-clock" },
            { label: "Inventory", icon: "fa-solid fa-boxes-stacked" }
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
        "Need a data platform, real-time service, AI integration, or BI dashboards? I’d be happy to discuss your needs.",
      email: "Email me",
      linkedin: "Connect on LinkedIn"
    },
    footer: {
      text: "© 2026 ATCHOM SANDJI DANIEL – Data & Prompt Engineering"
    }
  },
  fr: {
    meta: {
      title: "ATCHOM SANDJI DANIEL | Data & Prompt Engineer",
      description:
        "Portfolio d’ATCHOM SANDJI DANIEL, Data & Prompt Engineer qui conçoit des plateformes data de bout en bout : bases auto-hébergées, services temps réel, ETL/ELT, IA générative et BI."
    },
    nav: {
      logo: "ASD • Data & AI",
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      stack: "Stack technique",
      contact: "Contact"
    },
    hero: {
      greeting: "De la donnée brute à la décision — et à l'intelligence temps réel.",
      title: "Data & Prompt Engineering • Infrastructure & temps réel • IA générative • BI",
      location: "Ndogbong, Douala, Cameroun",
      ctaContact: "Me contacter",
      ctaWork: "Voir mes réalisations"
    },
    about: {
      title: "À propos de moi",
      p1: "Data & Prompt Engineer avec plus de 5 ans d’expérience, évoluant de l’analyse de données, l’ETL et la business intelligence vers la conception de plateformes data complètes.",
      p2: "Mon approche : livrer des solutions fiables de bout en bout, du socle technique jusqu’à la décision métier. J’interviens sur des projets à forts enjeux — santé, naval, humanitaire — où la donnée doit rester disponible, sécurisée et exploitable, même en conditions exigeantes. Rigoureux et curieux, j’associe une solide culture data à une veille active sur l’IA pour concevoir des outils qui simplifient réellement le quotidien de leurs utilisateurs.",
      email: "Email",
      linkedin: "Profil LinkedIn"
    },
    experience: {
      title: "Expériences professionnelles",
      hint: "Vocabulaire technique ? Survolez les termes soulignés pour une définition en langage simple.",
      showMore: "Voir plus",
      showLess: "Voir moins",
      items: [
        {
          role: "Data & Prompt Engineer",
          company: "Freelance · Missions multi-clients",
          companyIcon: "fa-solid fa-user-tie",
          date: "Janv. 2026 – Aujourd’hui",
          missions: [
            "Auto-hébergement et sécurisation de serveurs de bases de données (PostgreSQL, MySQL) sur infrastructure dédiée : réplication, sauvegardes automatisées, supervision et accès durci.",
            "Déploiement de services temps réel comme LiveKit (visio / WebRTC) et Fluxer pour la synchronisation d’événements en direct, orchestrés via Docker et reverse-proxy.",
            "Conception de pipelines ETL/ELT robustes et d’architectures offline-first à synchronisation différée pour des applications terrain utilisables sans connexion.",
            "Intégration de briques d’IA générative — conception de prompts, RAG et automatisation de workflows — pour transformer la donnée brute en décisions.",
            "Développement de ShipDeck, ERP modulaire pour chantiers navals (devis, gestion des pièces, suivi du temps et des stocks).",
            "Mise en place de ShellTrack, plateforme de traçabilité agroalimentaire conforme aux normes DGAL et FDA FSMA 204.",
            "Livraison de CareHandover et HomeCareSync, solutions santé web + mobile (coordination de sortie d’hôpital, soins à domicile offline-first)."
          ]
        },
        {
          role: "Data Registration Assistant (Volontaire ONU)",
          company: "HCR – Maroua, Cameroun",
          companyIcon: "fa-solid fa-people-roof",
          date: "Janv. 2023 – Déc. 2025",
          missions: [
            "Développement de pipelines ETL pour alimenter des tableaux de bord Power BI mensuels, suivant les tendances d’arrivée des réfugiés au centre de transit.",
            "Production cartographique des sites pour actualiser la localisation des populations réfugiées à l’aide de SIG (ArcGIS, QGIS).",
            "Conception et déploiement de formulaires KoboToolbox avec logiques de saut (skip logic) et contraintes de validation pour garantir la qualité des données.",
            "Production du dashboard mensuel pour visualiser la tendance des arrivées au centre de transit.",
            "Enregistrements biométriques (photos, empreintes digitales, scans d’iris) des réfugiés et demandeurs d’asile via proGres v4, RApp et BIMS.",
            "Gestion du stock du matériel de travail de la section, en premise et sur le terrain.",
            "Maintenance du parc informatique sur les 3 sites de distribution des vivres en coordination avec le PAM."
          ]
        },
        {
          role: "Data Manager Assistant",
          company: "STE HEGBAKOU SARL – Douala, Cameroun",
          companyIcon: "fa-solid fa-building",
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
          companyIcon: "fa-solid fa-people-roof",
          date: "2014 – 2016",
          missions: [
            "Saisie de données concernant les demandeurs d’asile, réfugiés et autres personnes relevant de la compétence du HCR dans la base ProGres.",
            "Fourniture de statistiques et rédaction de rapports liés aux données d’enregistrement, sur demande."
          ]
        },
        {
          role: "Stagiaire professionnel – Service Complétion",
          company: "Schlumberger – Douala, Cameroun",
          companyIcon: "fa-solid fa-oil-well",
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
          link: "https://atchom.github.io/fleet_app/",
          tags: [
            { label: "Power BI", icon: "fa-solid fa-chart-column" },
            { label: "Android", icon: "fa-brands fa-android" },
            { label: "Tracking", icon: "fa-solid fa-route" },
            { label: "Géospatial", icon: "fa-solid fa-location-dot" }
          ]
        },
        {
          key: "predication_app",
          title: "predication App – Application mobile",
          desc:
            "Application mobile multiplateforme (Android + PostgreSQL) de gestion des rapports de prédication : dashboard temps réel, synchronisation hors-ligne, authentification sécurisée et cartographie terrain.",
          image:
            "images/predication_app.png",
          link: "https://atchom.github.io/predication_App/",
          tags: [
            { label: "Android", icon: "fa-solid fa-mobile-screen-button" },
            { label: "postgreSQl", icon: "fa-solid fa-database" },
            { label: "Sync offline", icon: "fa-solid fa-rotate" },
            { label: "Dashboard", icon: "fa-solid fa-gauge-high" }
          ]
        },
        {
          key: "stock_management",
          title: "Gestion des stocks en entreprise",
          desc:
            "Gestion des stocks en entreprise : suivi en temps réel des entrées/sorties, valorisation, alertes de seuil et réapprovisionnement automatisé multi-entrepôts.",
          image:
            "images/stock_management.png",
          link: "#",
          tags: [
            { label: "Inventaire", icon: "fa-solid fa-boxes-stacked" },
            { label: "Dashboard", icon: "fa-solid fa-gauge-high" },
            { label: "Alertes", icon: "fa-solid fa-bell" },
            { label: "Analytique", icon: "fa-solid fa-chart-column" }
          ]
        },
        {
          key: "carehandover",
          title: "CareHandover — Transition hôpital-domicile",
          desc:
            "Plateforme web pour les équipes hospitalières et application mobile pour la famille, qui structure la sortie d'hôpital des aînés (médicaments, rendez-vous de suivi, signes d'alerte, contacts d'urgence) avec des check-ins automatisés à J+2, J+7, J+14 et J+30. Modèle B2G2B vendu aux régies régionales de santé pour réduire les coûteuses réhospitalisations.",
          image:
            "images/Carehandover.png",
          link: "#",
          tags: [
            { label: "Santé", icon: "fa-solid fa-heart-pulse" },
            { label: "Web + Mobile", icon: "fa-solid fa-laptop-medical" },
            { label: "Coordination des soins", icon: "fa-solid fa-house-medical" },
            { label: "B2G2B", icon: "fa-solid fa-hospital" }
          ]
        },
        {
          key: "shelltrack",
          title: "ShellTrack — Traçabilité & conformité fruits de mer",
          desc:
            "Plateforme de traçabilité et de conformité pour les usines de transformation de fruits de mer : suivi du quai à l'expédition via web, mobile et scanners, avec génération automatique de documents certifiés conformes aux normes DGAL et FDA FSMA 204. Déployée dans plus de 200 usines de l'Atlantique canadien.",
          image:
            "images/Shelltrack.png",
          link: "#",
          tags: [
            { label: "Traçabilité", icon: "fa-solid fa-barcode" },
            { label: "Web + Mobile", icon: "fa-solid fa-mobile-screen-button" },
            { label: "Conformité", icon: "fa-solid fa-clipboard-check" },
            { label: "Agroalimentaire", icon: "fa-solid fa-fish" }
          ]
        },
        {
          key: "homecaresync",
          title: "HomeCareSync — Soins à domicile hors-ligne",
          desc:
            "Application mobile hors-ligne pour les aides-soignants en zone rurale : saisie des signes vitaux, photos de plaies et observations, signature électronique du patient — même sans réseau cellulaire — avec synchronisation automatique via le Wi-Fi du véhicule ou au retour au bureau.",
          image:
            "images/homecaresync.png",
          link: "#",
          tags: [
            { label: "Santé", icon: "fa-solid fa-heart-pulse" },
            { label: "Hors-ligne", icon: "fa-solid fa-cloud-arrow-up" },
            { label: "Mobile", icon: "fa-solid fa-mobile-screen-button" },
            { label: "e-Signature", icon: "fa-solid fa-signature" }
          ]
        },
        {
          key: "shipdeck",
          title: "ShipDeck — ERP pour chantiers navals",
          desc:
            "ERP modulaire pour les petits et moyens chantiers navals, alternative abordable aux systèmes à 500 000 $ : devis et gestion des pièces, suivi des heures par tâche et gestion des stocks, déployable progressivement. Pensé pour les chantiers de l'Atlantique (50+ chantiers).",
          image:
            "images/shipdeck.png",
          link: "#",
          tags: [
            { label: "ERP", icon: "fa-solid fa-diagram-project" },
            { label: "Naval", icon: "fa-solid fa-ship" },
            { label: "Suivi des heures", icon: "fa-solid fa-clock" },
            { label: "Stocks", icon: "fa-solid fa-boxes-stacked" }
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
        "Besoin d’une plateforme data, d’un service temps réel, d’une intégration IA ou de tableaux de bord BI ? Discutons de votre besoin.",
      email: "M’écrire",
      linkedin: "Me joindre sur LinkedIn"
    },
    footer: {
      text: "© 2026 ATCHOM SANDJI DANIEL – Data & Prompt Engineering"
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

// --- Glossary: plain-language tooltips for technical terms --------

const GLOSSARY = {
  en: {
    "PostgreSQL": "Open-source database system known for its robustness and reliability.",
    "MySQL": "Widely used database system, popular for web applications.",
    "SQL Server": "Microsoft's enterprise database system.",
    "replication": "A real-time copy of the database on a second server, preventing data loss if one fails.",
    "LiveKit": "Open-source server for real-time video conferencing (built on WebRTC).",
    "WebRTC": "Web technology enabling live audio/video directly in the browser, with no external software.",
    "Fluxer": "Service that synchronizes data in real time across users and devices.",
    "Docker": "Tool that packages an app into an isolated 'container' for reliable, reproducible deployment.",
    "reverse proxies": "Gateway servers that receive requests, handle HTTPS and route them to the right service.",
    "ETL": "Extract, Transform, Load — moving and cleaning data into an analysis-ready warehouse.",
    "ELT": "Extract, Load, Transform — loading raw data first, then transforming it inside the warehouse.",
    "offline-first": "An app designed to work without internet, then sync once the connection returns.",
    "RAG": "AI technique that grounds a model's answers in trusted documents (Retrieval-Augmented Generation).",
    "Snowflake": "Cloud data warehouse for storing and analyzing large data volumes.",
    "dbt": "Tool for transforming data directly inside the warehouse (data build tool).",
    "KoboToolbox": "Form-based data collection platform that also works offline in the field.",
    "Power BI": "Microsoft tool for building dashboards and data visualizations.",
    "GIS": "Geographic Information System: tools for mapping and analyzing location-based data.",
    "ArcGIS": "Professional GIS software suite for mapping and spatial analysis.",
    "QGIS": "Free, open-source GIS software for mapping and spatial analysis.",
    "FDA FSMA 204": "US food-safety rule requiring detailed traceability records for certain foods.",
    "proGres v4": "UNHCR's refugee registration and case-management system (Profile Global Registration System, version 4).",
    "RApp": "UNHCR desktop application (built on RESCO CRM) for rapid registration of displaced people in low- or no-connectivity areas, syncing later with proGres v4 and compatible with BIMS to link biometric data (iris, fingerprints).",
    "BIMS": "UNHCR's Biometric Identity Management System (fingerprints and iris scans), linked to proGres.",
    "ProGres": "UNHCR's registration and case-management database for refugees and persons of concern."
  },
  fr: {
    "PostgreSQL": "Système de base de données open-source réputé pour sa robustesse et sa fiabilité.",
    "MySQL": "Système de base de données très répandu, populaire pour les applications web.",
    "SQL Server": "Système de base de données d'entreprise de Microsoft.",
    "réplication": "Copie en temps réel de la base sur un second serveur, pour éviter toute perte de données en cas de panne.",
    "LiveKit": "Serveur open-source de visioconférence en temps réel (basé sur WebRTC).",
    "WebRTC": "Technologie web permettant l'audio/vidéo en direct dans le navigateur, sans logiciel externe.",
    "Fluxer": "Service de synchronisation des données en temps réel entre plusieurs utilisateurs et appareils.",
    "Docker": "Outil qui empaquette une application dans un « conteneur » isolé, pour un déploiement fiable et reproductible.",
    "reverse-proxy": "Serveur « portier » qui reçoit les requêtes, gère le HTTPS et les dirige vers le bon service.",
    "ETL": "Extract, Transform, Load — déplacer et nettoyer les données vers un entrepôt prêt pour l'analyse.",
    "ELT": "Extract, Load, Transform — charger les données brutes d'abord, puis les transformer dans l'entrepôt.",
    "offline-first": "Application conçue pour fonctionner sans connexion, puis se synchroniser dès le retour du réseau.",
    "RAG": "Technique d'IA qui appuie les réponses d'un modèle sur des documents fiables (Retrieval-Augmented Generation).",
    "Snowflake": "Entrepôt de données dans le cloud, pour stocker et analyser de grands volumes.",
    "dbt": "Outil de transformation des données directement dans l'entrepôt (data build tool).",
    "KoboToolbox": "Plateforme de collecte de données par formulaires, fonctionnant aussi hors ligne sur le terrain.",
    "Power BI": "Outil de Microsoft pour créer des tableaux de bord et des visualisations de données.",
    "SIG": "Système d'Information Géographique : outils de cartographie et d'analyse de données localisées.",
    "ArcGIS": "Suite logicielle SIG professionnelle pour la cartographie et l'analyse spatiale.",
    "QGIS": "Logiciel SIG libre et open-source pour la cartographie et l'analyse spatiale.",
    "FDA FSMA 204": "Réglementation américaine de sécurité alimentaire imposant une traçabilité détaillée de certains aliments.",
    "proGres v4": "Système d'enregistrement et de gestion des cas des réfugiés du HCR (Profile Global Registration System, version 4).",
    "RApp": "Application desktop du HCR (basée sur RESCO CRM) pour l'enregistrement rapide des personnes déplacées dans les zones à faible ou sans connectivité, avec synchronisation ultérieure vers proGres v4 et compatibilité BIMS pour lier les données biométriques (iris, empreintes).",
    "BIMS": "Système de gestion de l'identité biométrique du HCR (empreintes digitales et scans d'iris), relié à proGres.",
    "ProGres": "Base de données d'enregistrement et de gestion des cas des personnes relevant du HCR."
  }
};

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Wrap the first occurrence of each known term in a tooltip span.
function applyGlossary(rawText, glossary) {
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
  const tokens = [];
  let text = rawText;
  terms.forEach((term) => {
    const idx = text.indexOf(term);
    if (idx !== -1) {
      const token = "" + tokens.length + "";
      tokens.push(term);
      text = text.slice(0, idx) + token + text.slice(idx + term.length);
    }
  });
  let html = escapeHtml(text);
  tokens.forEach((term, i) => {
    const span =
      '<span class="term" tabindex="0" role="button" aria-label="' +
      escapeHtml(term) +
      '" data-tip="' +
      escapeHtml(glossary[term]) +
      '">' +
      escapeHtml(term) +
      "</span>";
    html = html.replace("" + i + "", span);
  });
  return html;
}

// Single floating tooltip, positioned near the hovered/focused term.
function initGlossaryTooltips() {
  let tip = document.getElementById("glossary-tooltip");
  if (!tip) {
    tip = document.createElement("div");
    tip.id = "glossary-tooltip";
    tip.className = "glossary-tooltip";
    tip.setAttribute("role", "tooltip");
    document.body.appendChild(tip);
  }

  const show = (el) => {
    tip.textContent = el.getAttribute("data-tip") || "";
    tip.classList.add("visible");
    const r = el.getBoundingClientRect();
    const tr = tip.getBoundingClientRect();
    let left = r.left + r.width / 2 - tr.width / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tr.width - 8));
    let top = r.top - tr.height - 10;
    tip.classList.remove("below");
    if (top < 8) {
      top = r.bottom + 10;
      tip.classList.add("below");
    }
    tip.style.left = left + "px";
    tip.style.top = top + "px";
  };
  const hide = () => tip.classList.remove("visible");

  document.addEventListener("mouseover", (e) => {
    const el = e.target.closest && e.target.closest(".term");
    if (el) show(el);
  });
  document.addEventListener("mouseout", (e) => {
    const el = e.target.closest && e.target.closest(".term");
    if (el) hide();
  });
  document.addEventListener("focusin", (e) => {
    const el = e.target.closest && e.target.closest(".term");
    if (el) show(el);
  });
  document.addEventListener("focusout", hide);
  window.addEventListener("scroll", hide, true);
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
    if (item.companyIcon) {
      const cIcon = document.createElement("i");
      cIcon.className = item.companyIcon + " timeline-company-icon";
      cIcon.setAttribute("aria-hidden", "true");
      meta.appendChild(cIcon);
    }
    const cName = document.createElement("span");
    cName.textContent = item.company;
    meta.appendChild(cName);

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
      mText.innerHTML = applyGlossary(mission, GLOSSARY[currentLang] || {});
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
    icon.className = index === 0 ? "fa-solid fa-laptop-code" : "fa-solid fa-briefcase";
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

const PROJECTS_PER_PAGE = 4;
let currentProjectPage = 1;

function createProjects() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";
  const dict = translations[currentLang];
  const items = dict.projects.items;

  const totalPages = Math.max(1, Math.ceil(items.length / PROJECTS_PER_PAGE));
  if (currentProjectPage > totalPages) currentProjectPage = 1;
  const start = (currentProjectPage - 1) * PROJECTS_PER_PAGE;
  const pageItems = items.slice(start, start + PROJECTS_PER_PAGE);

  pageItems.forEach((project) => {
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

  renderProjectsPagination(totalPages);
  initIntersectionObserver();
}

function renderProjectsPagination(totalPages) {
  const pag = document.getElementById("projects-pagination");
  if (!pag) return;
  pag.innerHTML = "";
  if (totalPages <= 1) return;

  const go = (page) => {
    if (page < 1 || page > totalPages || page === currentProjectPage) return;
    currentProjectPage = page;
    createProjects();
    const section = document.getElementById("projects");
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const makeArrow = (dir, disabled) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "page-btn page-arrow" + (disabled ? " disabled" : "");
    b.innerHTML =
      dir === "prev"
        ? '<i class="fa-solid fa-chevron-left"></i>'
        : '<i class="fa-solid fa-chevron-right"></i>';
    if (!disabled)
      b.addEventListener("click", () => go(currentProjectPage + (dir === "prev" ? -1 : 1)));
    return b;
  };

  pag.appendChild(makeArrow("prev", currentProjectPage === 1));
  for (let p = 1; p <= totalPages; p++) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "page-btn" + (p === currentProjectPage ? " active" : "");
    b.textContent = p;
    b.addEventListener("click", () => go(p));
    pag.appendChild(b);
  }
  pag.appendChild(makeArrow("next", currentProjectPage === totalPages));
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
  initGlossaryTooltips();

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
  const linkedinUrl = "https://www.linkedin.com/in/daniel-atchom-sandji-5667581ba/";
  const link1 = document.getElementById("linkedin-link");
  const link2 = document.getElementById("contact-linkedin");
  if (link1) link1.href = linkedinUrl;
  if (link2) link2.href = linkedinUrl;
});
