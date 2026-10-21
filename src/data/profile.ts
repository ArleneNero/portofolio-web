import type { Profile } from '../types/content';

export const profile: Profile = {
  name: 'ISI NAMA',
  intro: "Hi, I'm",
  headline: 'I build digital things that look good, work well, and make a meaningful difference.',
  bio: 'An Information Systems student interested in Machine Learning, Natural Language Processing and useful software. I enjoy turning ideas into approachable digital products while continuing to learn.',
  location: 'Indonesia',
  availability: 'OPEN FOR PROJECTS & OPPORTUNITIES',
  // Figma's portrait is a SAMPLE photo, not the owner's real image.
  photo: 'profile/portrait-placeholder.jpg',
  // Add profile/cv.pdf and set cv: 'profile/cv.pdf' when the real CV exists.
  cv: undefined,
  // Set a real address to enable contact by email.
  email: undefined,
  stats: [
    { value: 'AI / NLP', label: 'Areas of interest' },
    { value: 'Web + Mobile', label: 'What I build' },
    { value: 'Always', label: 'Learning & exploring' },
  ],
  socials: [{ label: 'GitHub', url: 'https://github.com/ArleneNero' }],
};
