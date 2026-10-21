export type MediaAsset = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  cover: MediaAsset;
  gallery: MediaAsset[];
  links?: { demo?: string; github?: string };
  featured?: boolean;
  order: number;
  status: 'published' | 'draft';
  /** True for demonstration entries. Do not imply this is a real achievement. */
  isSample?: boolean;
};
