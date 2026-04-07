export interface Project {
  slug: string;
  title: string;
  description: string;
  featured: boolean;
  techStack: string[];
  repoUrl?: string;
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  metrics?: string[];
  diagramPlaceholder?: boolean;
  engineeringHighlights: {
    decisions: string[];
    tradeoffs: string[];
    constraints: string[];
    scalability: string[];
  };
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  metrics: string[];
  isPrimary: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: 'core' | 'experienced' | 'familiar';
}

export type SkillCategory =
  | 'Programming Languages'
  | 'Cloud & Infrastructure'
  | 'AI / Data Science'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'Testing'
  | 'Tools & Workflow'
  | 'Languages'
  | 'Methodologies';

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export type Theme = 'dark' | 'light';

export interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

export interface SEOMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Award {
  title: string;
  description: string;
  year?: string;
}

export interface PersonalInfo {
  sports: string[];
  books: string[];
  games: string[];
  music: string[];
  personality: string;
}
