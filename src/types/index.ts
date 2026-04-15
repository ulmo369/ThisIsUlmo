export interface Project {
  slug: string;
  featured: boolean;
  techStack: string[];
  repoUrl?: string;
  diagramPlaceholder?: boolean;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  period: string;
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
  id: string;
  institution: string;
  degree: string;
}

export interface Award {
  id: string;
  year?: string;
}

export interface PersonalInfo {
  sports: string[];
  books: string[];
  games: string[];
  music: string[];
}
