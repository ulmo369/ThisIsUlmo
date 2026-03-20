import type { SEOMeta } from '@/types';

export const seoData: Record<string, SEOMeta> = {
  '/': {
    title: 'Diego Emilio Barrera Hernandez | Software Engineer',
    description:
      'Premium portfolio of Diego Emilio Barrera Hernandez — Software Development Engineer specializing in AI & Data Science.',
    ogTitle: 'Diego Emilio Barrera Hernandez | Software Engineer',
    ogDescription:
      'Explore the portfolio of a FAANG-level engineer with expertise in AI, cloud infrastructure, and full-stack development.',
    ogImage: '/og-home.png',
    ogUrl: 'https://placeholder.dev/',
  },
  '/projects': {
    title: 'Projects | Diego Emilio Barrera Hernandez',
    description:
      'Featured engineering projects showcasing system design, AI/ML, and cloud infrastructure expertise.',
    ogTitle: 'Projects | Diego Emilio Barrera Hernandez',
    ogDescription:
      'Browse projects demonstrating real-world impact through scalable systems and innovative solutions.',
    ogImage: '/og-projects.png',
    ogUrl: 'https://placeholder.dev/projects',
  },
  '/projects/:slug': {
    title: 'Project Detail | Diego Emilio Barrera Hernandez',
    description:
      'In-depth project breakdown using the STAR method — situation, task, action, and result.',
    ogTitle: 'Project Detail | Diego Emilio Barrera Hernandez',
    ogDescription:
      'Detailed engineering case study with technical decisions, trade-offs, and measurable outcomes.',
    ogImage: '/og-project-detail.png',
    ogUrl: 'https://placeholder.dev/projects/detail',
  },
  '/blog': {
    title: 'Blog | Diego Emilio Barrera Hernandez',
    description:
      'Engineering blog — articles and insights on software development, AI, and cloud architecture. Coming soon.',
    ogTitle: 'Blog | Diego Emilio Barrera Hernandez',
    ogDescription:
      'Technical articles and engineering insights. Coming soon.',
    ogImage: '/og-blog.png',
    ogUrl: 'https://placeholder.dev/blog',
  },
  '/contact': {
    title: 'Contact | Diego Emilio Barrera Hernandez',
    description:
      'Get in touch — email, LinkedIn, and GitHub links for professional inquiries.',
    ogTitle: 'Contact | Diego Emilio Barrera Hernandez',
    ogDescription:
      'Reach out for collaboration, opportunities, or just to connect.',
    ogImage: '/og-contact.png',
    ogUrl: 'https://placeholder.dev/contact',
  },
};
