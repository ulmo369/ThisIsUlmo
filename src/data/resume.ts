import type { ResumeData } from '@/types';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';

export const resumeData: ResumeData = {
  summary:
    'Software Development Engineer at Amazon specializing in AI & Data Science. Computer Technologies Engineer from ITESM with experience building scalable distributed systems, compliance integrations, and ML pipelines. Passionate about solving complex problems through clean architecture and measurable impact.',
  experience,
  education: [
    {
      institution: 'ITESM, Campus Querétaro',
      degree: 'B.S. Computational Technologies Engineering',
      period: 'Graduated Jun 2024',
      description: 'GPA: 94/100 (3.7/4.0). Focus on software engineering, distributed systems, and applied AI.',
    },
    {
      institution: 'ITESM, Campus Querétaro',
      degree: 'Minor in AI and Data Science',
      period: 'Concentration Semester',
      description: 'GPA: 100/100 (4.0/4.0). Specialized coursework in machine learning, neural networks, and data engineering.',
    },
  ],
  skills,
  awards: [
    {
      title: 'VEX National Robotics Championship — 1st Place',
      description: 'Led the programming stage of the robot for team VORTEX, winning the national championship.',
      year: '2024',
    },
    {
      title: 'VEX Robotics World Championship — 33rd of 100',
      description: 'Led the programming stage at the world championship, placing 33rd out of 100 teams globally.',
      year: '2024',
    },
  ],
};
