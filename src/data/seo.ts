import type { SEOMeta } from '@/types';

export const seoData: Record<string, SEOMeta> = {
  '/': {
    title: 'Diego Emilio Barrera Hernandez | Software Engineer',
    description: 'Portfolio of Diego Emilio Barrera Hernandez, SDE at Amazon specializing in AI, Data Science, and scalable distributed systems',
    ogTitle: 'Diego Emilio Barrera Hernandez | Software Engineer',
    ogDescription: 'SDE at Amazon with expertise in AI, data science, compliance systems, and full-stack development',
    ogImage: '/og-home.png',
    ogUrl: 'https://diegoemilio.dev/',
  },
  '/projects': {
    title: 'Projects | Diego Emilio Barrera Hernandez',
    description: 'Engineering projects spanning KYC compliance, LATAM deployment strategy, AI/ML forecasting, and academic software',
    ogTitle: 'Projects | Diego Emilio Barrera Hernandez',
    ogDescription: 'Real-world projects from Amazon, General Electric, and ITESM with measurable business impact',
    ogImage: '/og-projects.png',
    ogUrl: 'https://diegoemilio.dev/projects',
  },
  '/projects/:slug': {
    title: 'Project Detail | Diego Emilio Barrera Hernandez',
    description: 'In-depth project breakdown using the STAR method, situation, task, action, and result',
    ogTitle: 'Project Detail | Diego Emilio Barrera Hernandez',
    ogDescription: 'Detailed engineering case study with technical decisions, trade-offs, and measurable outcomes',
    ogImage: '/og-project-detail.png',
    ogUrl: 'https://diegoemilio.dev/projects/detail',
  },
  '/blog': {
    title: 'Blog | Diego Emilio Barrera Hernandez',
    description: 'Technical articles on software engineering, AI, and cloud architecture. Coming soon',
    ogTitle: 'Blog | Diego Emilio Barrera Hernandez',
    ogDescription: 'Technical articles and engineering insights. Coming soon',
    ogImage: '/og-blog.png',
    ogUrl: 'https://diegoemilio.dev/blog',
  },
  '/contact': {
    title: 'Contact | Diego Emilio Barrera Hernandez',
    description: 'Get in touch, email, phone, LinkedIn, and GitHub for professional inquiries',
    ogTitle: 'Contact | Diego Emilio Barrera Hernandez',
    ogDescription: 'Reach out for collaboration, opportunities, or just to connect',
    ogImage: '/og-contact.png',
    ogUrl: 'https://diegoemilio.dev/contact',
  },
};
