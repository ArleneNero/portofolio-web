import type { Project } from '../types/project';

/**
 * THIS IS THE ONLY FILE TO EDIT WHEN ADDING A PROJECT.
 * Put images in public/projects/<slug>/ and reference them without a leading slash.
 * Set status: 'draft' to hide an entry, and order to sort it.
 */
export const projects: Project[] = [
  {
    id: 'project-taskflow', slug: 'taskflow', title: 'TaskFlow',
    category: 'Web Application', year: '2026', order: 1, status: 'published', featured: true, isSample: true,
    summary: 'Modern project management for teams.',
    description: 'Sample case study representing a clean collaborative workspace.',
    problem: 'Teams can lose track of progress when tasks and milestones are scattered.',
    solution: 'A calmer overview of work, responsibilities, and upcoming deadlines.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    cover: { src: 'projects/taskflow/cover.jpg', alt: 'TaskFlow sample project screenshot from the Figma reference' },
    gallery: [
      { src: 'projects/taskflow/screen-01.svg', alt: 'TaskFlow sample overview interface', caption: 'Project overview concept' },
      { src: 'projects/taskflow/screen-02.svg', alt: 'TaskFlow sample task-board interface', caption: 'Task board concept' },
    ], links: {},
  },
  {
    id: 'project-notehub', slug: 'notehub', title: 'NoteHub',
    category: 'Productivity App', year: '2026', order: 2, status: 'published', isSample: true,
    summary: 'Your notes, organized across devices.',
    description: 'Sample concept for a minimal note-taking interface.',
    problem: 'Useful thoughts often get scattered across notebooks and applications.',
    solution: 'A simple workspace to save, sort, and revisit notes.',
    stack: ['React', 'Firebase', 'Tailwind CSS'],
    cover: { src: 'projects/notehub/cover.jpg', alt: 'NoteHub sample mobile UI screenshot from the Figma reference' },
    gallery: [{ src: 'projects/notehub/screen-01.svg', alt: 'NoteHub sample editor interface', caption: 'Notes editor concept' }],
    links: {},
  },
  {
    id: 'project-sewaqu', slug: 'sewaqu', title: 'SewaQu',
    category: 'Rental Platform', year: '2026', order: 3, status: 'published', isSample: true,
    summary: 'A simpler vehicle booking experience.',
    description: 'Sample layout exploring a practical online vehicle rental flow.',
    problem: 'Finding a suitable vehicle and comparing options can be confusing.',
    solution: 'Make searching, comparing, and booking easier to understand.',
    stack: ['Next.js', 'Supabase', 'Tailwind CSS'],
    cover: { src: 'projects/sewaqu/cover.jpg', alt: 'SewaQu sample vehicle rental web screenshot from the Figma reference' },
    gallery: [{ src: 'projects/sewaqu/screen-01.svg', alt: 'SewaQu sample car listing interface', caption: 'Vehicle discovery concept' }],
    links: {},
  },
];
