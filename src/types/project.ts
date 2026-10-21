export type MediaAsset = { src: string; alt: string; caption?: string };
export type Project = {
  id: string; slug: string; title: string; category: string; year: string;
  summary: string; description: string; problem: string; solution: string;
  stack: string[]; cover: MediaAsset; gallery: MediaAsset[];
  links?: { demo?: string; github?: string; report?: string; video?: string; slides?: string };
  featured?: boolean; order: number; status: 'published' | 'draft'; isSample?: boolean;
};
