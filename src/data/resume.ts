import type { ResumeData } from '@/types';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';

export const resumeData: ResumeData = {
  summary:
    'Software Development Engineer specializing in AI & Data Science with experience building scalable distributed systems at Amazon. Passionate about solving complex problems through clean architecture, measurable impact, and continuous learning.',
  experience,
  education: [
    {
      institution: 'Placeholder University',
      degree: 'B.S. Computer Science',
      period: '2016 – 2020',
      description:
        'Focus on algorithms, distributed systems, and machine learning. Graduated with honors.',
    },
    {
      institution: 'Placeholder Institute',
      degree: 'M.S. Artificial Intelligence',
      period: '2020 – 2022',
      description:
        'Research in NLP and transformer architectures. Published work on domain-specific text classification.',
    },
  ],
  skills,
  awards: [
    {
      title: 'Placeholder Award for Engineering Excellence',
      description: 'Recognized for outstanding technical contributions and cross-team impact.',
      year: '2023',
    },
    {
      title: 'Hackathon Winner',
      description: 'First place in internal hackathon for AI-powered automation tool.',
      year: '2022',
    },
  ],
};
