import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming Languages', proficiency: 'core' },
  { name: 'C++', category: 'Programming Languages', proficiency: 'core' },
  { name: 'TypeScript', category: 'Programming Languages', proficiency: 'core' },
  { name: 'Java', category: 'Programming Languages', proficiency: 'experienced' },
  { name: 'JavaScript', category: 'Programming Languages', proficiency: 'experienced' },
  { name: 'Rust', category: 'Programming Languages', proficiency: 'familiar' },

  // Cloud & Infrastructure
  { name: 'AWS', category: 'Cloud & Infrastructure', proficiency: 'core' },
  { name: 'AWS Lambda', category: 'Cloud & Infrastructure', proficiency: 'experienced' },
  { name: 'CloudFormation', category: 'Cloud & Infrastructure', proficiency: 'experienced' },
  { name: 'Docker', category: 'Cloud & Infrastructure', proficiency: 'experienced' },
  { name: 'Terraform', category: 'Cloud & Infrastructure', proficiency: 'familiar' },
  { name: 'Kubernetes', category: 'Cloud & Infrastructure', proficiency: 'familiar' },

  // AI / Data Science
  { name: 'TensorFlow', category: 'AI / Data Science', proficiency: 'experienced' },
  { name: 'PyTorch', category: 'AI / Data Science', proficiency: 'experienced' },
  { name: 'Pandas', category: 'AI / Data Science', proficiency: 'experienced' },
  { name: 'scikit-learn', category: 'AI / Data Science', proficiency: 'experienced' },
  { name: 'LangChain', category: 'AI / Data Science', proficiency: 'familiar' },

  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 'experienced' },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 'experienced' },
  { name: 'Framer Motion', category: 'Frontend', proficiency: 'familiar' },
  { name: 'HTML/CSS', category: 'Frontend', proficiency: 'experienced' },

  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 'experienced' },
  { name: 'FastAPI', category: 'Backend', proficiency: 'experienced' },
  { name: 'Express', category: 'Backend', proficiency: 'experienced' },
  { name: 'GraphQL', category: 'Backend', proficiency: 'familiar' },

  // Databases
  { name: 'DynamoDB', category: 'Databases', proficiency: 'experienced' },
  { name: 'PostgreSQL', category: 'Databases', proficiency: 'experienced' },
  { name: 'Redis', category: 'Databases', proficiency: 'experienced' },
  { name: 'MongoDB', category: 'Databases', proficiency: 'familiar' },

  // Testing
  { name: 'Vitest', category: 'Testing', proficiency: 'experienced' },
  { name: 'Jest', category: 'Testing', proficiency: 'experienced' },
  { name: 'React Testing Library', category: 'Testing', proficiency: 'experienced' },
  { name: 'Pytest', category: 'Testing', proficiency: 'experienced' },

  // Tools & Workflow
  { name: 'Git', category: 'Tools & Workflow', proficiency: 'experienced' },
  { name: 'CI/CD Pipelines', category: 'Tools & Workflow', proficiency: 'experienced' },
  { name: 'Jira', category: 'Tools & Workflow', proficiency: 'experienced' },
  { name: 'VS Code', category: 'Tools & Workflow', proficiency: 'experienced' },
];
