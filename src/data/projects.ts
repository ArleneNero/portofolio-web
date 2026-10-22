import type { Project } from '../types/project';

/** Projects transcribed from the previous public ArleneNero/portofolio case studies.
 * To add or edit a project, change this file only. Project covers/slides use the old repo's
 * published image URLs; replace with locally hosted files at any time. */
const OLD_PORTFOLIO_ASSETS = 'https://raw.githubusercontent.com/ArleneNero/portofolio/main/';
const media = (src: string, alt: string, caption?: string) => ({ src: OLD_PORTFOLIO_ASSETS + src, alt, ...(caption ? { caption } : {}) });

export const projects: Project[] = [
  {
    id: 'project-xiaomimi-rag', slug: 'xiaomimi-rag',
    title: 'Xiaomimi Matcha — Hybrid RAG Chatbot', category: 'Generative AI · Full-stack Web',
    year: '2026', order: 1, status: 'published', featured: true,
    summary: 'Full-stack Gemini chatbot using hybrid RAG: PDF ingestion, 768-d embeddings and top-5 retrieval.',
    description: 'Built a cafe website and knowledge-grounded assistant with React and Express/TypeScript. The PDF knowledge base is parsed into 22 chunks with 768-dimensional embeddings. Hybrid cosine-similarity and keyword-boosted retrieval selects five context passages for Gemini; API credentials remain server-side, with keyword fallback and out-of-scope response handling.',
    problem: 'Customers ask detailed menu and service questions; a generic LLM may answer without verified store-specific context.',
    solution: 'Designed an end-to-end PDF-to-RAG pipeline, hybrid semantic/keyword retrieval and a guarded Express API that grounds the assistant in approved cafe documents.',
    stack: ['React','TypeScript','Node.js','Express','Gemini API','Hybrid RAG','PDF Parsing'],
    cover: { src: 'projects/xiaomimi-rag/cover.svg', alt: 'Illustrative Xiaomimi Matcha storefront with RAG chatbot UI cover' },
    gallery: [{ src: 'https://raw.githubusercontent.com/ArleneNero/Website-Matcha-berbasis-Chatbot-RAG/main/frontend/public/images/signature-cup.webp', alt: 'Original matcha signature cup product image', caption: 'Product image from original repository, not a UI screenshot' }],
    links: { github: 'https://github.com/ArleneNero/Website-Matcha-berbasis-Chatbot-RAG' },
  },
  {
    id: 'project-hybrid-evidence-engine', slug: 'hybrid-evidence-engine',
    title: 'Hybrid Evidence Engine & Cascade XGBoost', category: 'Machine Learning · NLP Research',
    year: '2026', order: 2, status: 'published', featured: true,
    summary: 'Award-winning NLP/ML research: 85.0% hold-out accuracy, weighted F1 0.852 on mental-health risk signals.',
    description: 'Collaborative 2026 PalComTech research analyzing 1,899 cleaned public X posts with multilingual Sentence-BERT, weighted clinical-evidence features and two-stage Cascade XGBoost. Evaluated on 100 locked hold-out examples from 500 dual-annotated samples (85.0% accuracy, weighted F1 0.852; rule baseline 58.0%). Explainability via SHAP and triage monitoring via Streamlit. Received the team 1st Best Innovation Award. Signals assist professional review; they are not diagnoses.',
    problem: 'Short social posts contain nuanced signals of psychological distress; rule-only screening can miss context, while automated labels must not be mistaken for clinical diagnoses.',
    solution: 'Combined Sentence-BERT, weighted evidence/sentiment features, a Gate→Severity XGBoost cascade, safety-first crisis rules and SHAP explanations in a human-reviewed dashboard; documented limitations of critical-class recall.',
    stack: ['Python','Sentence-BERT','XGBoost','scikit-learn','SHAP','Streamlit'],
    cover: { src: 'https://raw.githubusercontent.com/ArleneNero/dashboard-sistem-deteksi-mental-health/main/data/09_dashboard.png', alt: 'Actual mental-health evidence monitoring dashboard from project repository' },
    gallery: [{ src: 'projects/hybrid-evidence-engine/cover.svg', alt: 'Conceptual architecture visualization of the Hybrid Evidence Engine', caption: 'Illustrative project overview (not a model result)' }],
    links: { github: 'https://github.com/ArleneNero/dashboard-sistem-deteksi-mental-health', demo: 'https://dashboard-mental-health.streamlit.app' },
  },
  {
    id: "project-coordinated-buzzer-detection", slug: "coordinated-buzzer-detection", title: "Coordinated Buzzer Detection (IGRS)",
    category: "Machine Learning · Research", year: "2026", order: 3, status: 'published', featured: true,
    summary: "XGBoost coordination detection on X using SBERT, interaction networks and SHAP explanations.", description: "Machine-learning case study using coordination signals and network analysis to classify possible coordinated buzzer activity.",
    problem: "Distinguishing coordinated accounts from ordinary participation requires signals beyond isolated posts.", solution: "Engineered semantic, lexical, temporal, and interaction-network features; compared an XGBoost classifier with heuristic rules.",
    stack: ["Python","XGBoost","SHAP","SBERT","Gephi","Network Analysis"],
    cover: media("img/buzzer.jpg", "Coordinated Buzzer Detection (IGRS) project cover"),
    gallery: [media("img/buzzer/slide-1.png", "Coordinated Buzzer Detection (IGRS) slide 1", "Slide 1"), media("img/buzzer/slide-2.png", "Coordinated Buzzer Detection (IGRS) slide 2", "Slide 2"), media("img/buzzer/slide-3.png", "Coordinated Buzzer Detection (IGRS) slide 3", "Slide 3"), media("img/buzzer/slide-4.png", "Coordinated Buzzer Detection (IGRS) slide 4", "Slide 4"), media("img/buzzer/slide-5.png", "Coordinated Buzzer Detection (IGRS) slide 5", "Slide 5"), media("img/buzzer/slide-6.png", "Coordinated Buzzer Detection (IGRS) slide 6", "Slide 6"), media("img/buzzer/slide-7.png", "Coordinated Buzzer Detection (IGRS) slide 7", "Slide 7"), media("img/buzzer/slide-8.png", "Coordinated Buzzer Detection (IGRS) slide 8", "Slide 8"), media("img/buzzer/slide-9.png", "Coordinated Buzzer Detection (IGRS) slide 9", "Slide 9"), media("img/buzzer/slide-10.png", "Coordinated Buzzer Detection (IGRS) slide 10", "Slide 10"), media("img/buzzer/slide-11.png", "Coordinated Buzzer Detection (IGRS) slide 11", "Slide 11"), media("img/buzzer/slide-12.png", "Coordinated Buzzer Detection (IGRS) slide 12", "Slide 12"), media("img/buzzer/slide-13.png", "Coordinated Buzzer Detection (IGRS) slide 13", "Slide 13"), media("img/buzzer/slide-14.png", "Coordinated Buzzer Detection (IGRS) slide 14", "Slide 14"), media("img/buzzer/slide-15.png", "Coordinated Buzzer Detection (IGRS) slide 15", "Slide 15"), media("img/buzzer/slide-16.png", "Coordinated Buzzer Detection (IGRS) slide 16", "Slide 16"), media("img/buzzer/slide-17.png", "Coordinated Buzzer Detection (IGRS) slide 17", "Slide 17"), media("img/buzzer/slide-18.png", "Coordinated Buzzer Detection (IGRS) slide 18", "Slide 18")],
    links: {"slides":"https://github.com/ArleneNero/portofolio/blob/main/IGRS_Buzzer_Canva%20(4).pptx"},
  },
  {
    id: 'project-foresight-mrt', slug: 'foresight-mrt',
    title: 'ForeSight — Predictive Crowd Management', category: 'Predictive Analytics · Transportation',
    year: '2026', order: 4, status: 'published', featured: true,
    summary: 'XGBoost passenger-demand forecasts for 13 MRT stations, 15–60 minutes ahead; Top 15 finalist.',
    description: 'ForeSight predicts passenger demand for 13 stations at 15, 30, 45 and 60-minute horizons with XGBoost, incorporating train timetables, weather and event calendars. Out-of-time evaluation on calibrated simulated data produced sMAPE 14.16%; this is not a claim of performance on MRT production data. The prototype dashboard maps forecasts to potential station crowding and operator what-if scenarios. Team project selected as Top 15 Smart Move Challenge MRT Jakarta 2026.',
    problem: 'Transit operators need advance warning of possible crowding to evaluate mitigating actions in time.',
    solution: 'Engineered time-series forecast features and chronological validation, then integrated crowd-risk views, 15–60-minute warning horizons and scenario simulation in a dashboard.',
    stack: ['Python','XGBoost','Pandas','Time-Series Forecasting','React','Dashboard'],
    cover: { src: 'projects/foresight-mrt/cover.svg', alt: 'Illustrative predictive MRT crowd monitoring dashboard cover' },
    gallery: [],
    links: { github: 'https://github.com/ArleneNero/prototype_dashboard_mrt' },
  },
  {
    id: "project-nusantara-museum", slug: "nusantara-museum", title: "Nusantara Museum 3D",
    category: "Web 3D · AI", year: "2026", order: 5, status: 'published', featured: false,
    summary: "Interactive virtual museum introducing Indonesian cultural heritage.", description: "Exploratory 3D museum built with React Three Fiber and an AI Historian chatbot.",
    problem: "Digital heritage experiences can lack engaging navigation and contextual explanations.", solution: "Combined an explorable 3D environment, cultural zones and a Gemini-powered curator.",
    stack: ["React","Three.js","React Three Fiber","Node.js","Gemini API","Docker"],
    cover: media("img/museum.jpg", "Nusantara Museum 3D project cover"),
    gallery: [],
    links: {"video":"https://drive.google.com/file/d/1Yz5195NhR6RrNzu5cxKh3KMTSQcq8OVW/view?usp=drive_link"},
  },
  {
    id: "project-flood-disaster-extraction", slug: "flood-disaster-extraction", title: "Flood Disaster Extraction in Sumatra",
    category: "NLP · Information Extraction", year: "2026", order: 6, status: 'published', featured: false,
    summary: "Extracting flood locations, dates, causes and casualties from Indonesian tweets.", description: "Rule-based NLP pipeline with scanner, parser, translator, evaluator and region gazetteer.",
    problem: "Disaster reports in free-form social media text are difficult to structure consistently.", solution: "Used BIO tagging, geographic gazetteers and rules for location, time, causes and casualties.",
    stack: ["Python","Regex","NER / BIO Tagging","Gazetteer"],
    cover: media("img/banjir.jpg", "Flood Disaster Extraction in Sumatra project cover"),
    gallery: [],
    links: {"report":"https://github.com/ArleneNero/portofolio/blob/main/Data_Portofolio/Laporan%20Proyek%20UAS%20NLP%20(1).pdf"},
  },
  {
    id: "project-sentiment-analysis", slug: "sentiment-analysis", title: "Sentiment Analysis: Jokowi Fake Degree Controversy",
    category: "NLP · Sentiment Analysis", year: "2026", order: 7, status: 'published', featured: false,
    summary: "Indonesian-language X sentiment study using Naive Bayes and KSI Lexicon.", description: "Course research comparing lexicon-based classification and Naive Bayes on 979 cleaned tweets.",
    problem: "Public discussion includes noisy language and mixed sentiment that makes classification difficult.", solution: "Applied tweet preprocessing, entropy and term-frequency analysis, annotation and lexicon/model comparison.",
    stack: ["Python","Naive Bayes","KSI Lexicon","Text Mining","Entropy Analysis"],
    cover: media("img/sentimen.jpg", "Sentiment Analysis: Jokowi Fake Degree Controversy project cover"),
    gallery: [],
    links: {"report":"https://github.com/ArleneNero/portofolio/blob/main/Data_Portofolio/Ijazah%20Palsu%20Jokowi.pdf"},
  },
  {
    id: "project-retail-crisis-recovery", slug: "retail-crisis-recovery", title: "Retail Crisis & Recovery",
    category: "Data Analysis · Visualization", year: "2026", order: 8, status: 'published', featured: false,
    summary: "Post-crisis retail recovery analysis; Top 100 in DQLab × UjiKompetensi hackathon.", description: "Time-series retail data study using moving averages, growth indices, product growth and market basket analysis.",
    problem: "Decision makers need to identify meaningful recovery trends instead of relying on noisy daily sales.", solution: "Smoothed sales data, identified rising-star products and explored bundling via association rules.",
    stack: ["Python","Pandas","Matplotlib","Market Basket Analysis"],
    cover: media("img/retail.jpg", "Retail Crisis & Recovery project cover"),
    gallery: [media("img/slides/slide-1.jpg", "Retail Crisis & Recovery slide 1", "Slide 1"), media("img/slides/slide-2.jpg", "Retail Crisis & Recovery slide 2", "Slide 2"), media("img/slides/slide-3.jpg", "Retail Crisis & Recovery slide 3", "Slide 3"), media("img/slides/slide-4.jpg", "Retail Crisis & Recovery slide 4", "Slide 4"), media("img/slides/slide-5.jpg", "Retail Crisis & Recovery slide 5", "Slide 5"), media("img/slides/slide-6.jpg", "Retail Crisis & Recovery slide 6", "Slide 6"), media("img/slides/slide-7.jpg", "Retail Crisis & Recovery slide 7", "Slide 7"), media("img/slides/slide-8.jpg", "Retail Crisis & Recovery slide 8", "Slide 8"), media("img/slides/slide-9.jpg", "Retail Crisis & Recovery slide 9", "Slide 9")],
    links: {"report":"https://github.com/ArleneNero/portofolio/blob/main/Data_Portofolio/PPT-Hackathon.pdf"},
  }
];
