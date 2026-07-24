// --- Translations -------------------------------------------------

const translations = {
  en: {
    meta: {
      title: "ATCHOM SANDJI DANIEL | Data Engineer",
      description:
        "Portfolio of ATCHOM SANDJI DANIEL, data engineer based in Douala, Cameroon. I build data pipelines, offline-first mobile apps, and BI dashboards."
    },
    nav: {
      logo: "ASD • Data Engineer",
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stack: "Tech I work with",
      contact: "Contact"
    },
    hero: {
      greeting: "Data engineer — I build tools that work when the network doesn't.",
      title: "Data pipelines • Offline-first mobile apps • BI dashboards",
      location: "Ndogbong, Douala, Cameroon",
      ctaContact: "Contact me",
      ctaWork: "View my work"
    },
    about: {
      title: "About me",
      p1: "I'm a data engineer based in Douala, Cameroon. Over the last 7+ years I've worked on data pipelines, BI dashboards, and offline-first mobile apps for humanitarian and private-sector clients.",
      p2: "Most of my work happens where the internet drops mid-report — refugee camps with the HCR, small businesses in Cameroon, field sites with limited connectivity. I work with SQL, Python, PostgreSQL, MySQL, Power BI, dbt, Snowflake, and QGIS/ArcGIS. I'm exploring generative AI and RAG, and I'm honest about what I know and what I don't.",
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
          role: "Freelance Data Engineer",
          company: "Freelance · Multiple clients",
          companyIcon: "fa-solid fa-user-tie",
          date: "Jan 2026 – Present",
          missions: [
            "I self-host PostgreSQL and MySQL servers for clients: replication, daily backups, monitoring, SSH-only access.",
            "I'm building an AI-assisted medical pre-consultation tool with real-time communication channels, containerized with Docker.",
            "I build ETL/ELT pipelines and offline-first architectures with deferred sync, for apps that need to work without connectivity.",
            "I'm exploring RAG and prompt engineering on small client projects — still learning, not production-grade at scale yet.",
            "I built ShipDeck, a modular ERP for small naval shipyards (quotes, parts, time tracking, inventory).",
            "I built ShellTrack, a seafood traceability platform with documents aligned with DGAL and FDA FSMA 204 standards.",
            "I built CareHandover and HomeCareSync, web + mobile healthcare apps (hospital discharge coordination, offline home care)."
          ]
        },
        {
          role: "UN Volunteer — Data Registration Assistant",
          company: "HCR – Maroua, Cameroon",
          companyIcon: "fa-solid fa-people-roof",
          date: "Jan 2023 – Dec 2025",
          missions: [
            "I ran the registration database at the Maroua transit center (proGres v4, RApp, BIMS): biometric enrolment (photos, fingerprints, iris) for asylum seekers and refugees.",
            "I built Power BI dashboards for WFP food distribution across 3 sites — used monthly to track refugee arrival trends.",
            "I designed KoboToolbox forms with skip logic and validation rules for field surveys.",
            "I produced GIS maps (QGIS, ArcGIS) to keep refugee population locations current as people moved.",
            "I managed the section's stock of field and IT equipment, used not just by our team but by colleagues from other sections. I tracked items, planned reorders, and coordinated with logistics and WFP.",
            "I built a small internal tool to track this stock: items in and out, low-stock alerts, and reorder suggestions."
          ]
        },
        {
          role: "Data Manager Assistant",
          company: "STE HEGBAKOU SARL – Douala, Cameroon",
          companyIcon: "fa-solid fa-building",
          date: "Jun 2016 – Oct 2022",
          missions: [
            "I worked daily on SQL Server and PostgreSQL: extracted, cleaned, and prepared datasets for the commercial team.",
            "I built the team's Power BI sales dashboard.",
            "I automated the leave-letter workflow: Power Automate triggered by a SharePoint list, generates a PDF from a Word template.",
            "I migrated a manual Excel reporting process to a Snowflake + dbt ELT setup."
          ]
        },
        {
          role: "Data Entry Assistant",
          company: "HCR – Bertoua, Cameroon",
          companyIcon: "fa-solid fa-people-roof",
          date: "2014 – 2016",
          missions: [
            "I entered asylum seeker and refugee records into proGres.",
            "I pulled statistics on request and drafted short reports for the field office."
          ]
        },
        {
          role: "Intern — Completion Department",
          company: "Schlumberger – Douala, Cameroon",
          companyIcon: "fa-solid fa-oil-well",
          date: "Sep 2009 – Feb 2010",
          missions: [
            "IT support for completion operations: I maintained Well Completion Design, stress analysis, and field data management apps.",
            "I set up equipment on site during completion jobs."
          ]
        }
      ]
    },
    projects: {
      title: "Selected projects",
      items: [
        {
          key: "stock_management",
          title: "Stock & Equipment Tracking — HCR Maroua",
          desc:"I built a small stock tracking tool during my time at UNHCR Maroua. Our section's equipment — field gear and IT hardware — was used not just by our team but by colleagues from other sections, so tracking got messy. The tool I built let us see what came in, what went out, alert us when stock was running low, and suggest reorder quantities.",
          image:
            "images/stock_management.png",
          link: "#",
          tags: [
            { label: "Inventory", icon: "fa-solid fa-boxes-stacked" },
            { label: "Internal Tool", icon: "fa-solid fa-screwdriver-wrench" },
            { label: "Alerts", icon: "fa-solid fa-bell" },
            { label: "UNHCR", icon: "fa-solid fa-people-roof" }
          ]
        },
        {
          key: "amec",
          title: "AMEC — Teachers' Association App",
          desc:"I built AMEC for the Cameroon Teachers' Association. They had 10 different activities running in parallel — savings groups, banking, a building project, an agricultural cooperative — all managed in Excel spreadsheets. I made one app for Android & iOS that handles all of them. The treasurers work offline during their weekly meetings and the data syncs when they get back to the office.",
          image:
            "images/amec2.jpg",
          link: "#projects",
          tags: [
            { label: "Android", icon: "fa-brands fa-android" },
            { label: "Riverpod", icon: "fa-solid fa-water" },
            { label: "Drift / SQLite", icon: "fa-solid fa-database" },
            { label: "PostgreSQL", icon: "fa-solid fa-server" }
          ]
        },
        {
          key: "fleet_management",
          title: "Fleet Management — Mobile & Desktop",
          desc:"I built this for a transport company that wanted to see where their trucks were, which deliveries were running late, and which trucks needed fuel. The dashboard shows everything in one place, with alerts for low stock and basic route suggestions.",
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
          key: "sig_cmr_cacao",
          title: "Cameroon Cocoa GIS — Production Zones",
          desc:"I mapped cocoa production zones in Cameroon with QGIS. I collected data from cooperatives, cleaned the addresses, and put everything on interactive maps. Useful for NGOs and buyers who need to locate the production areas.",
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
          key: "littoral",
          title: "Littoral Region Analytics — Cameroon",
          desc:"I analyzed demographic and health data for the Littoral region of Cameroon. I mapped the cities, checked health facility coverage, and built visual dashboards for regional planners.",
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
          key: "predication_app",
          title: "PrédiTrack — Preaching Reports",
          desc:"Cross-platform mobile app (Android + PostgreSQL) for Jehovah's Witnesses Assemblies. Manages monthly preaching reports, works offline, syncs when the network is back. Real-time dashboard for Assembly overseers.",
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
          key: "arkivio",
          title: "ARKIVIO — Smart Document Archive",
          desc:"I built ARKIVIO to help people keep their important documents — IDs, contracts, receipts — without losing them. You scan a paper, the app recognizes what type of document it is, and stores it. You can search by keyword or by meaning ('find my contracts'). The AI assistant answers questions about your documents and shows where it found the answer. Sensitive numbers are masked automatically.",
          image:
            "images/Arkivio.png",
          link: "#projects",
          tags: [
            { label: "Android", icon: "fa-brands fa-android" },
            { label: "PostgreSQL", icon: "fa-solid fa-database" },
            { label: "RAG / AI", icon: "fa-solid fa-robot" },
            { label: "Semantic Search", icon: "fa-solid fa-magnifying-glass" }
          ]
        },
        {
          key: "carehandover",
          title: "CareHandover — Hospital-to-Home",
          desc:"Web platform for hospital teams + mobile app for families. Structures senior discharge (medications, follow-ups, warning signs, emergency contacts) with automated check-ins at D+2, D+7, D+14, D+30. Designed to reduce readmissions through structured follow-up.",
          image:
            "images/Carehandover.png",
          link: "#",
          tags: [
            { label: "Healthcare", icon: "fa-solid fa-heart-pulse" },
            { label: "Web + Mobile", icon: "fa-solid fa-laptop-medical" },
            { label: "Care coordination", icon: "fa-solid fa-house-medical" }
          ]
        },
        {
          key: "shelltrack",
          title: "ShellTrack — Seafood Traceability",
          desc:"Traceability and compliance platform for seafood processing. Tracks products from quay to shipment, generates documents aligned with DGAL and FDA FSMA 204 standards.",
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
          desc:"I built HomeCareSync for home-care aides working in rural areas with no network. They take vital signs, photograph wounds, and get the patient's e-signature on the visit — all offline. When they get back to the office Wi-Fi, everything syncs.",
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
          desc:"I built ShipDeck for a small naval shipyard in Douala. They were tracking quotes, parts, and time in spreadsheets, and losing track of jobs. I built them a simple ERP for under $5K, when off-the-shelf shipyard software starts at $500K. They use it for quotes, parts catalog, time per task, and inventory.",
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
      title: "Tech I work with",
      frontend: "BI & visualization",
      backend: "Data & databases",
      tools: "Mobile, cloud & tools",
      items: {
        frontend: [
          { label: "Power BI", icon: "fa-solid fa-chart-column" },
          { label: "DAX", icon: "fa-solid fa-chart-line" },
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
          { label: "Flutter", icon: "fa-solid fa-mobile-screen" },
          { label: "Drift / SQLite", icon: "fa-solid fa-database" },
          { label: "Supabase", icon: "fa-solid fa-server" },
          { label: "Docker", icon: "fa-brands fa-docker" },
          { label: "QGIS / ArcGIS", icon: "fa-solid fa-map-location-dot" },
          { label: "KoboToolbox", icon: "fa-solid fa-mobile-screen" },
          { label: "Power Automate", icon: "fa-solid fa-bolt" },
          { label: "SharePoint", icon: "fa-solid fa-share-nodes" }
        ]
      }
    },
    contact: {
      title: "Let's talk",
      subtitle:
        "Looking for a data engineer for pipelines, dashboards, or offline-first mobile apps? Get in touch.",
      email: "Email me",
      linkedin: "Connect on LinkedIn"
    },
    footer: {
      text: "© 2026 ATCHOM SANDJI DANIEL — Data Engineer, Douala, Cameroon"
    }
  },
  fr: {
    meta: {
      title: "ATCHOM SANDJI DANIEL | Data Engineer",
      description:
        "Portfolio d'ATCHOM SANDJI DANIEL, data engineer basé à Douala, Cameroun. Je conçois des pipelines data, des applications mobiles offline-first et des dashboards BI."
    },
    nav: {
      logo: "ASD • Data Engineer",
      home: "Accueil",
      about: "À propos",
      experience: "Expériences",
      projects: "Projets",
      stack: "Stack technique",
      contact: "Contact"
    },
    hero: {
      greeting: "Data engineer — je conçois des outils qui marchent quand le réseau lâche.",
      title: "Pipelines data • Apps mobiles offline-first • Dashboards BI",
      location: "Ndogbong, Douala, Cameroun",
      ctaContact: "Me contacter",
      ctaWork: "Voir mes réalisations"
    },
    about: {
      title: "À propos de moi",
      p1: "Je suis data engineer, basé à Douala au Cameroun. Sur les 7+ dernières années, j'ai travaillé sur des pipelines data, des dashboards BI et des applications mobiles offline-first, pour des clients humanitaires et privés.",
      p2: "Mon travail se passe là où le réseau lâche en plein milieu d'un rapport : camps de réfugiés avec le HCR, PME au Cameroun, sites terrain à connectivité limitée. J'utilise SQL, Python, PostgreSQL, MySQL, Power BI, dbt, Snowflake et QGIS/ArcGIS. J'explore l'IA générative et le RAG, en restant honnête sur ce que je maîtrise et ce que je suis en train d'apprendre.",
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
          role: "Freelance — Data Engineer",
          company: "Freelance · Multi-clients",
          companyIcon: "fa-solid fa-user-tie",
          date: "Janv. 2026 – Aujourd’hui",
          missions: [
            "J'auto-héberge des serveurs PostgreSQL et MySQL pour mes clients : réplication, sauvegardes quotidiennes, supervision, accès SSH uniquement.",
            "Je construis un outil de pré-consultation médicale assistée par IA, avec canaux de communication temps réel, conteneurisé avec Docker.",
            "Je conçois des pipelines ETL/ELT et des architectures offline-first à synchronisation différée, pour des apps qui doivent fonctionner sans réseau.",
            "J'explore le RAG et le prompt engineering sur de petits projets clients — encore en phase d'apprentissage, pas en production à grande échelle.",
            "J'ai conçu ShipDeck, ERP modulaire pour petits chantiers navals (devis, pièces, suivi du temps, stocks).",
            "J'ai conçu ShellTrack, plateforme de traçabilité produits de la mer avec documents alignés DGAL et FDA FSMA 204.",
            "J'ai conçu CareHandover et HomeCareSync, apps santé web + mobile (coordination de sortie d'hôpital, soins à domicile offline-first)."
          ]
        },
        {
          role: "Volontaire ONU — Assistant enregistrement données",
          company: "HCR – Maroua, Cameroun",
          companyIcon: "fa-solid fa-people-roof",
          date: "Janv. 2023 – Déc. 2025",
          missions: [
            "J'ai géré la base d'enregistrement au centre de transit de Maroua (proGres v4, RApp, BIMS) : enrolment biométrique (photos, empreintes, iris) pour les demandeurs d'asile et réfugiés.",
            "J'ai conçu des dashboards Power BI pour la distribution des vivres du PAM sur 3 sites — utilisés mensuellement pour suivre les tendances d'arrivée.",
            "J'ai conçu des formulaires KoboToolbox avec logiques de saut et validation pour les enquêtes terrain.",
            "J'ai produit des cartes SIG (QGIS, ArcGIS) pour actualiser la localisation des populations réfugiées au fil des mouvements.",
            "J'ai géré le stock de matériel terrain et informatique de la section — utilisé non seulement par notre équipe mais aussi par des collègues d'autres sections. Suivi des articles, planification des réapprovisionnements, coordination avec la logistique et le PAM.",
            "J'ai construit un petit outil interne pour suivre ce stock : entrées/sorties, alertes de stock bas, suggestions de réapprovisionnement."
          ]
        },
        {
          role: "Assistant Data Manager",
          company: "STE HEGBAKOU SARL – Douala, Cameroun",
          companyIcon: "fa-solid fa-building",
          date: "Juin 2016 – Oct. 2022",
          missions: [
            "J'ai travaillé quotidiennement sur SQL Server et PostgreSQL : extraction, nettoyage, préparation des données pour l'équipe commerciale.",
            "J'ai conçu le dashboard des ventes (Power BI) pour l'équipe commerciale.",
            "J'ai automatisé le workflow des lettres de congé : Power Automate déclenché par liste SharePoint, génère un PDF depuis un template Word.",
            "J'ai migré un reporting Excel manuel vers une architecture ELT Snowflake + dbt."
          ]
        },
        {
          role: "Assistant saisie de données",
          company: "HCR – Bertoua, Cameroun",
          companyIcon: "fa-solid fa-people-roof",
          date: "2014 – 2016",
          missions: [
            "J'ai saisi les dossiers des demandeurs d'asile et réfugiés dans proGres.",
            "J'ai sorti des statistiques à la demande et rédigé de courts rapports pour le bureau terrain."
          ]
        },
        {
          role: "Stagiaire — Service Complétion",
          company: "Schlumberger – Douala, Cameroun",
          companyIcon: "fa-solid fa-oil-well",
          date: "Sept. 2009 – Fév. 2010",
          missions: [
            "Support IT des opérations de complétion : j'ai maintenu les apps Well Completion Design, analyse de contraintes et field data management.",
            "J'ai installé les équipements sur site lors des jobs de complétion."
          ]
        }
      ]
    },
    projects: {
      title: "Projets sélectionnés",
      items: [
        {
          key: "stock_management",
          title: "Suivi de stock et matériel — HCR Maroua",
          desc:
            "J'ai construit un petit outil de suivi de stock pendant ma mission au HCR Maroua. Le matériel de notre section — équipement terrain et informatique — était utilisé non seulement par notre équipe mais aussi par des collègues d'autres sections, donc le suivi devenait compliqué. L'outil que j'ai construit nous permettait de voir les entrées et sorties, de nous alerter quand le stock baissait, et de suggérer les quantités à recommander.",
          image:
            "images/stock_management.png",
          link: "#",
          tags: [
            { label: "Inventaire", icon: "fa-solid fa-boxes-stacked" },
            { label: "Outil interne", icon: "fa-solid fa-screwdriver-wrench" },
            { label: "Alertes", icon: "fa-solid fa-bell" },
            { label: "HCR", icon: "fa-solid fa-people-roof" }
          ]
        },
        {
          key: "amec",
          title: "AMEC — App de gestion associative",
          desc:
            "J'ai construit AMEC pour l'Amicale des Enseignants du Cameroun. Ils avaient 10 activités en parallèle — tontines, banque, projet immobilier, coopérative agricole — toutes gérées dans des fichiers Excel. J'ai fait une seule app pour Android & iOS qui gère tout. Les trésoriers travaillent offline pendant leurs réunions hebdomadaires, et les données se synchronisent quand ils rentrent au bureau.",
          image:
            "images/amec2.jpg",
          link: "#projects",
          tags: [
            { label: "Android", icon: "fa-brands fa-android" },
            { label: "Riverpod", icon: "fa-solid fa-water" },
            { label: "Drift / SQLite", icon: "fa-solid fa-database" },
            { label: "PostgreSQL", icon: "fa-solid fa-server" }
          ]
        },
        {
          key: "fleet_management",
          title: "App mobile et desktop de gestion de flotte",
          desc:
            "J'ai construit ça pour une entreprise de transport qui voulait voir où étaient ses camions, quelles livraisons étaient en retard, et quels camions avaient besoin de carburant. Le dashboard montre tout au même endroit, avec des alertes pour les stocks bas et des suggestions de tournées.",
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
          key: "sig_cmr_cacao",
          title: "SIG Cacao Cameroun — Zones de production",
          desc:
            "J'ai cartographié les zones de production de cacao au Cameroun avec QGIS. J'ai collecté les données des coopératives, nettoyé les adresses, et tout mis sur des cartes interactives. Utile pour les ONG et les acheteurs qui doivent localiser les zones de production.",
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
          key: "littoral",
          title:"Analyse Région du Littoral – Cameroun",
          desc:
            "J'ai analysé des données démographiques et sanitaires pour la région du Littoral au Cameroun. J'ai cartographié les villes, vérifié la couverture des centres de santé, et construit des dashboards visuels pour les planificateurs régionaux.",
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
          key: "predication_app",
          title: "PrédiTrack — Rapports de prédication",
          desc:
            "J'ai construit PrédiTrack pour les Assemblées des Témoins de Jéhovah. Chaque mois, les proclamateurs remplissent des rapports de leur activité de prédication. Avec l'app, ils peuvent le faire depuis leur téléphone même sans réseau. Le responsable d'Assemblée voit les chiffres consolidés en temps réel.",
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
          key: "arkivio",
          title: "ARKIVIO — Archives documentaires intelligentes",
          desc:
            "J'ai construit ARKIVIO pour aider les gens à garder leurs documents importants — pièces d'identité, contrats, reçus — sans les perdre. Tu scannes un papier, l'app reconnaît le type de document et le stocke. Tu peux chercher par mot-clé ou par sens (« trouve mes contrats »). L'assistant IA répond à des questions sur tes documents et montre d'où vient la réponse. Les numéros sensibles sont masqués automatiquement.",
          image:
            "images/Arkivio.png",
          link: "#projects",
          tags: [
            { label: "Android", icon: "fa-brands fa-android" },
            { label: "PostgreSQL", icon: "fa-solid fa-database" },
            { label: "RAG / IA", icon: "fa-solid fa-robot" },
            { label: "Recherche sémantique", icon: "fa-solid fa-magnifying-glass" }
          ]
        },
        {
          key: "carehandover",
          title: "CareHandover — Transition hôpital-domicile",
          desc:
            "J'ai construit CareHandover parce que la sortie d'hôpital, c'est là où ça se passe mal pour les personnes âgées. Ils rentrent avec une liste de médicaments et de rendez-vous, et en 2 semaines la moitié sont de retour aux urgences. L'app envoie des messages de check-in à la famille à J+2, J+7, J+14, J+30 — les semaines critiques après la sortie.",
          image:
            "images/Carehandover.png",
          link: "#",
          tags: [
            { label: "Santé", icon: "fa-solid fa-heart-pulse" },
            { label: "Web + Mobile", icon: "fa-solid fa-laptop-medical" },
            { label: "Coordination des soins", icon: "fa-solid fa-house-medical" }
          ]
        },
        {
          key: "shelltrack",
          title: "ShellTrack — Traçabilité produits de la mer",
          desc:
            "J'ai construit ShellTrack pour un client de transformation de produits de la mer qui exporte vers les USA. Il avait besoin de documents de traçabilité pour être conforme à FDA FSMA 204. Le système suit chaque lot depuis l'arrivée du poisson au quai jusqu'à l'expédition, avec les documents générés automatiquement.",
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
            "J'ai construit HomeCareSync pour des aides-soignants en zone rurale sans réseau. Ils prennent les signes vitaux, photographient les plaies, et récupèrent la signature électronique du patient pendant la visite — tout offline. Quand ils rentrent au bureau et se connectent au Wi-Fi, tout se synchronise.",
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
            "J'ai construit ShipDeck pour un petit chantier naval à Douala. Ils suivaient leurs devis, pièces et heures dans des tableurs, et perdaient la trace des chantiers. Je leur ai construit un ERP simple pour moins de 5 000 $, alors que les logiciels du marché commencent à 500 000 $. Ils l'utilisent pour les devis, le catalogue pièces, le temps par tâche et les stocks.",
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
      frontend: "BI & visualisation",
      backend: "Données & bases",
      tools: "Mobile, cloud & outils",
      items: {
        frontend: [
          { label: "Power BI", icon: "fa-solid fa-chart-column" },
          { label: "DAX", icon: "fa-solid fa-chart-line" },
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
          { label: "Flutter", icon: "fa-solid fa-mobile-screen" },
          { label: "Drift / SQLite", icon: "fa-solid fa-database" },
          { label: "Supabase", icon: "fa-solid fa-server" },
          { label: "Docker", icon: "fa-brands fa-docker" },
          { label: "QGIS / ArcGIS", icon: "fa-solid fa-map-location-dot" },
          { label: "KoboToolbox", icon: "fa-solid fa-mobile-screen" },
          { label: "Power Automate", icon: "fa-solid fa-bolt" },
          { label: "SharePoint", icon: "fa-solid fa-share-nodes" }
        ]
      }
    },
    contact: {
      title: "Travaillons ensemble",
      subtitle:
        "Vous cherchez un data engineer pour des pipelines, dashboards ou apps mobiles offline-first ? Contactez-moi.",
      email: "M'écrire",
      linkedin: "Me joindre sur LinkedIn"
    },
    footer: {
      text: "© 2026 ATCHOM SANDJI DANIEL — Data Engineer, Douala, Cameroun"
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
