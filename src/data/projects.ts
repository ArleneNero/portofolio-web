import type { Project } from '../types/project';

/** Projects transcribed from the previous public ArleneNero/portofolio case studies.
 * To add or edit a project, change this file only. Project covers/slides use the old repo's
 * published image URLs; replace with locally hosted files at any time. */
const OLD_PORTFOLIO_ASSETS = 'https://raw.githubusercontent.com/ArleneNero/portofolio/main/';
const media = (src: string, alt: string, caption?: string) => ({ src: OLD_PORTFOLIO_ASSETS + src, alt, ...(caption ? { caption } : {}) });

export const projects: Project[] = [
  {
    id: "project-coordinated-buzzer-detection", slug: "coordinated-buzzer-detection", title: "Coordinated Buzzer Detection (IGRS)",
    category: "Machine Learning · Research", year: "2026", order: 1, status: 'published', featured: true,
    summary: "Detecting coordinated behavior on X during the Steam IGRS controversy.", description: "Machine-learning case study using coordination signals and network analysis to classify possible coordinated buzzer activity.",
    problem: "Distinguishing coordinated accounts from ordinary participation requires signals beyond isolated posts.", solution: "Engineered semantic, lexical, temporal, and interaction-network features; compared an XGBoost classifier with heuristic rules.",
    stack: ["Python","XGBoost","SHAP","SBERT","Gephi","Network Analysis"],
    cover: media("img/buzzer.jpg", "Coordinated Buzzer Detection (IGRS) project cover"),
    gallery: [media("img/buzzer/slide-1.png", "Coordinated Buzzer Detection (IGRS) slide 1", "Slide 1"), media("img/buzzer/slide-2.png", "Coordinated Buzzer Detection (IGRS) slide 2", "Slide 2"), media("img/buzzer/slide-3.png", "Coordinated Buzzer Detection (IGRS) slide 3", "Slide 3"), media("img/buzzer/slide-4.png", "Coordinated Buzzer Detection (IGRS) slide 4", "Slide 4"), media("img/buzzer/slide-5.png", "Coordinated Buzzer Detection (IGRS) slide 5", "Slide 5"), media("img/buzzer/slide-6.png", "Coordinated Buzzer Detection (IGRS) slide 6", "Slide 6"), media("img/buzzer/slide-7.png", "Coordinated Buzzer Detection (IGRS) slide 7", "Slide 7"), media("img/buzzer/slide-8.png", "Coordinated Buzzer Detection (IGRS) slide 8", "Slide 8"), media("img/buzzer/slide-9.png", "Coordinated Buzzer Detection (IGRS) slide 9", "Slide 9"), media("img/buzzer/slide-10.png", "Coordinated Buzzer Detection (IGRS) slide 10", "Slide 10"), media("img/buzzer/slide-11.png", "Coordinated Buzzer Detection (IGRS) slide 11", "Slide 11"), media("img/buzzer/slide-12.png", "Coordinated Buzzer Detection (IGRS) slide 12", "Slide 12"), media("img/buzzer/slide-13.png", "Coordinated Buzzer Detection (IGRS) slide 13", "Slide 13"), media("img/buzzer/slide-14.png", "Coordinated Buzzer Detection (IGRS) slide 14", "Slide 14"), media("img/buzzer/slide-15.png", "Coordinated Buzzer Detection (IGRS) slide 15", "Slide 15"), media("img/buzzer/slide-16.png", "Coordinated Buzzer Detection (IGRS) slide 16", "Slide 16"), media("img/buzzer/slide-17.png", "Coordinated Buzzer Detection (IGRS) slide 17", "Slide 17"), media("img/buzzer/slide-18.png", "Coordinated Buzzer Detection (IGRS) slide 18", "Slide 18")],
    links: {"slides":"https://github.com/ArleneNero/portofolio/blob/main/IGRS_Buzzer_Canva%20(4).pptx"},
  },
  {
    id: "project-flood-disaster-extraction", slug: "flood-disaster-extraction", title: "Flood Disaster Extraction in Sumatra",
    category: "NLP · Information Extraction", year: "2026", order: 2, status: 'published', featured: false,
    summary: "Extracting flood locations, dates, causes and casualties from Indonesian tweets.", description: "Rule-based NLP pipeline with scanner, parser, translator, evaluator and region gazetteer.",
    problem: "Disaster reports in free-form social media text are difficult to structure consistently.", solution: "Used BIO tagging, geographic gazetteers and rules for location, time, causes and casualties.",
    stack: ["Python","Regex","NER / BIO Tagging","Gazetteer"],
    cover: media("img/banjir.jpg", "Flood Disaster Extraction in Sumatra project cover"),
    gallery: [],
    links: {"report":"https://github.com/ArleneNero/portofolio/blob/main/Data_Portofolio/Laporan%20Proyek%20UAS%20NLP%20(1).pdf"},
  },
  {
    id: "project-sentiment-analysis", slug: "sentiment-analysis", title: "Sentiment Analysis: Jokowi Fake Degree Controversy",
    category: "NLP · Sentiment Analysis", year: "2026", order: 3, status: 'published', featured: false,
    summary: "Indonesian-language X sentiment study using Naive Bayes and KSI Lexicon.", description: "Course research comparing lexicon-based classification and Naive Bayes on 979 cleaned tweets.",
    problem: "Public discussion includes noisy language and mixed sentiment that makes classification difficult.", solution: "Applied tweet preprocessing, entropy and term-frequency analysis, annotation and lexicon/model comparison.",
    stack: ["Python","Naive Bayes","KSI Lexicon","Text Mining","Entropy Analysis"],
    cover: media("img/sentimen.jpg", "Sentiment Analysis: Jokowi Fake Degree Controversy project cover"),
    gallery: [],
    links: {"report":"https://github.com/ArleneNero/portofolio/blob/main/Data_Portofolio/Ijazah%20Palsu%20Jokowi.pdf"},
  },
  {
    id: "project-retail-crisis-recovery", slug: "retail-crisis-recovery", title: "Retail Crisis & Recovery",
    category: "Data Analysis · Visualization", year: "2026", order: 4, status: 'published', featured: false,
    summary: "Post-crisis retail recovery analysis; Top 100 in DQLab × UjiKompetensi hackathon.", description: "Time-series retail data study using moving averages, growth indices, product growth and market basket analysis.",
    problem: "Decision makers need to identify meaningful recovery trends instead of relying on noisy daily sales.", solution: "Smoothed sales data, identified rising-star products and explored bundling via association rules.",
    stack: ["Python","Pandas","Matplotlib","Market Basket Analysis"],
    cover: media("img/retail.jpg", "Retail Crisis & Recovery project cover"),
    gallery: [media("img/slides/slide-1.jpg", "Retail Crisis & Recovery slide 1", "Slide 1"), media("img/slides/slide-2.jpg", "Retail Crisis & Recovery slide 2", "Slide 2"), media("img/slides/slide-3.jpg", "Retail Crisis & Recovery slide 3", "Slide 3"), media("img/slides/slide-4.jpg", "Retail Crisis & Recovery slide 4", "Slide 4"), media("img/slides/slide-5.jpg", "Retail Crisis & Recovery slide 5", "Slide 5"), media("img/slides/slide-6.jpg", "Retail Crisis & Recovery slide 6", "Slide 6"), media("img/slides/slide-7.jpg", "Retail Crisis & Recovery slide 7", "Slide 7"), media("img/slides/slide-8.jpg", "Retail Crisis & Recovery slide 8", "Slide 8"), media("img/slides/slide-9.jpg", "Retail Crisis & Recovery slide 9", "Slide 9")],
    links: {"report":"https://github.com/ArleneNero/portofolio/blob/main/Data_Portofolio/PPT-Hackathon.pdf"},
  },
  {
    id: "project-hydro-chain-ai-protocol", slug: "hydro-chain-ai-protocol", title: "Hydro-Chain AI Protocol",
    category: "AI · IoT · Research Proposal", year: "2026", order: 5, status: 'published', featured: false,
    summary: "PKM-GFT concept for measuring and managing AI data-center water footprints.", description: "Group-led research proposal combining IoT monitoring, blockchain-based Digital Water Credits and AI.",
    problem: "Water consumption linked to data centers is difficult to monitor and communicate transparently.", solution: "Proposed a three-layer monitoring architecture and a five-year roadmap based on a literature review.",
    stack: ["IoT","Blockchain","Artificial Intelligence","Literature Review"],
    cover: media("img/pkm/pkm-01.jpg", "Hydro-Chain AI Protocol project cover"),
    gallery: [media("img/pkm/pkm-01.jpg", "Hydro-Chain AI Protocol slide 1", "Slide 1"), media("img/pkm/pkm-02.jpg", "Hydro-Chain AI Protocol slide 2", "Slide 2"), media("img/pkm/pkm-03.jpg", "Hydro-Chain AI Protocol slide 3", "Slide 3"), media("img/pkm/pkm-04.jpg", "Hydro-Chain AI Protocol slide 4", "Slide 4"), media("img/pkm/pkm-05.jpg", "Hydro-Chain AI Protocol slide 5", "Slide 5"), media("img/pkm/pkm-06.jpg", "Hydro-Chain AI Protocol slide 6", "Slide 6"), media("img/pkm/pkm-07.jpg", "Hydro-Chain AI Protocol slide 7", "Slide 7"), media("img/pkm/pkm-08.jpg", "Hydro-Chain AI Protocol slide 8", "Slide 8"), media("img/pkm/pkm-09.jpg", "Hydro-Chain AI Protocol slide 9", "Slide 9"), media("img/pkm/pkm-10.jpg", "Hydro-Chain AI Protocol slide 10", "Slide 10"), media("img/pkm/pkm-11.jpg", "Hydro-Chain AI Protocol slide 11", "Slide 11"), media("img/pkm/pkm-12.jpg", "Hydro-Chain AI Protocol slide 12", "Slide 12"), media("img/pkm/pkm-13.jpg", "Hydro-Chain AI Protocol slide 13", "Slide 13"), media("img/pkm/pkm-14.jpg", "Hydro-Chain AI Protocol slide 14", "Slide 14")],
    links: {"report":"https://github.com/ArleneNero/portofolio/blob/main/Data_Portofolio/PKM-GFT_2026.pdf"},
  },
  {
    id: "project-nusantara-museum", slug: "nusantara-museum", title: "Nusantara Museum 3D",
    category: "Web 3D · AI", year: "2026", order: 6, status: 'published', featured: false,
    summary: "Interactive virtual museum introducing Indonesian cultural heritage.", description: "Exploratory 3D museum built with React Three Fiber and an AI Historian chatbot.",
    problem: "Digital heritage experiences can lack engaging navigation and contextual explanations.", solution: "Combined an explorable 3D environment, cultural zones and a Gemini-powered curator.",
    stack: ["React","Three.js","React Three Fiber","Node.js","Gemini API","Docker"],
    cover: media("img/museum.jpg", "Nusantara Museum 3D project cover"),
    gallery: [],
    links: {"video":"https://drive.google.com/file/d/1Yz5195NhR6RrNzu5cxKh3KMTSQcq8OVW/view?usp=drive_link"},
  },
  {
    id: "project-warkop-umkm-digitalization", slug: "warkop-umkm-digitalization", title: "Warkop UMKM Digitalization",
    category: "Community Project · Web", year: "2025", order: 7, status: 'published', featured: false,
    summary: "Digital presence and QR menu access for a local coffee shop.", description: "Team-led community project building a Google Sites profile and improving Google Maps business visibility.",
    problem: "Small businesses often lack discoverable, low-cost digital information for customers.", solution: "Developed a business information site, QR-linked menu access and business profile optimization.",
    stack: ["Google Sites","QR Code","Google Business Profile","Local SEO"],
    cover: media("img/umkm.jpg", "Warkop UMKM Digitalization project cover"),
    gallery: [],
    links: {"video":"https://drive.google.com/file/d/1xkQ6zLQMVEwJKD39G8sV3dGT_Ud91NPx/view?usp=drive_link"},
  }
];
