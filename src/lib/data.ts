import type {
  Project,
  ExperienceEntry,
  Skill,
  ContactInfo,
  NavItem,
  SEOMeta,
  ResumeData,
  PersonalInfo,
} from '@/types';

import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { skills } from '@/data/skills';
import { contactInfo } from '@/data/contact';
import { navigationItems } from '@/data/navigation';
import { seoData } from '@/data/seo';
import { resumeData } from '@/data/resume';
import { personalInfo } from '@/data/personal';

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((p) => p.featured);
}

export async function getExperience(): Promise<ExperienceEntry[]> {
  return experience;
}

export async function getSkills(): Promise<Skill[]> {
  return skills;
}

export async function getContactInfo(): Promise<ContactInfo> {
  return contactInfo;
}

export async function getNavigation(): Promise<NavItem[]> {
  return navigationItems;
}

export async function getSEOMeta(route: string): Promise<SEOMeta> {
  return seoData[route] ?? seoData['/'];
}

export async function getResumeData(): Promise<ResumeData> {
  return resumeData;
}

export async function getPersonalInfo(): Promise<PersonalInfo> {
  return personalInfo;
}
