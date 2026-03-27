import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from '../../public/locales/en/common.json';
import enHero from '../../public/locales/en/hero.json';
import enAbout from '../../public/locales/en/about.json';
import enSkills from '../../public/locales/en/skills.json';
import enExperience from '../../public/locales/en/experience.json';
import enProjects from '../../public/locales/en/projects.json';
import enContact from '../../public/locales/en/contact.json';
import enResume from '../../public/locales/en/resume.json';
import enBlog from '../../public/locales/en/blog.json';
import enSeo from '../../public/locales/en/seo.json';
import enPersonal from '../../public/locales/en/personal.json';

import esCommon from '../../public/locales/es/common.json';
import esHero from '../../public/locales/es/hero.json';
import esAbout from '../../public/locales/es/about.json';
import esSkills from '../../public/locales/es/skills.json';
import esExperience from '../../public/locales/es/experience.json';
import esProjects from '../../public/locales/es/projects.json';
import esContact from '../../public/locales/es/contact.json';
import esResume from '../../public/locales/es/resume.json';
import esBlog from '../../public/locales/es/blog.json';
import esSeo from '../../public/locales/es/seo.json';
import esPersonal from '../../public/locales/es/personal.json';

const resources = {
  en: {
    common: enCommon,
    hero: enHero,
    about: enAbout,
    skills: enSkills,
    experience: enExperience,
    projects: enProjects,
    contact: enContact,
    resume: enResume,
    blog: enBlog,
    seo: enSeo,
    personal: enPersonal,
  },
  es: {
    common: esCommon,
    hero: esHero,
    about: esAbout,
    skills: esSkills,
    experience: esExperience,
    projects: esProjects,
    contact: esContact,
    resume: esResume,
    blog: esBlog,
    seo: esSeo,
    personal: esPersonal,
  },
};

// Initialize i18next with bundled translations and language detection
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: [
      'common', 'hero', 'about', 'skills', 'experience',
      'projects', 'contact', 'resume', 'blog', 'seo', 'personal',
    ],
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
