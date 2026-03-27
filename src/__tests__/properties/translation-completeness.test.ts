// Validates translation key completeness across EN and ES for all namespaces

import enCommon from '../../../public/locales/en/common.json';
import enHero from '../../../public/locales/en/hero.json';
import enAbout from '../../../public/locales/en/about.json';
import enSkills from '../../../public/locales/en/skills.json';
import enExperience from '../../../public/locales/en/experience.json';
import enProjects from '../../../public/locales/en/projects.json';
import enContact from '../../../public/locales/en/contact.json';
import enResume from '../../../public/locales/en/resume.json';
import enBlog from '../../../public/locales/en/blog.json';
import enSeo from '../../../public/locales/en/seo.json';
import enPersonal from '../../../public/locales/en/personal.json';

import esCommon from '../../../public/locales/es/common.json';
import esHero from '../../../public/locales/es/hero.json';
import esAbout from '../../../public/locales/es/about.json';
import esSkills from '../../../public/locales/es/skills.json';
import esExperience from '../../../public/locales/es/experience.json';
import esProjects from '../../../public/locales/es/projects.json';
import esContact from '../../../public/locales/es/contact.json';
import esResume from '../../../public/locales/es/resume.json';
import esBlog from '../../../public/locales/es/blog.json';
import esSeo from '../../../public/locales/es/seo.json';
import esPersonal from '../../../public/locales/es/personal.json';

type TranslationValue = string | Record<string, unknown>;

/** Flatten nested object keys into dot-notation paths */
function flattenKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...flattenKeys(value as Record<string, unknown>, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

/** Resolve a dot-notation key to its value in a nested object */
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && !Array.isArray(acc)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

const namespaces: Record<string, { en: Record<string, TranslationValue>; es: Record<string, TranslationValue> }> = {
  common: { en: enCommon, es: esCommon },
  hero: { en: enHero, es: esHero },
  about: { en: enAbout, es: esAbout },
  skills: { en: enSkills, es: esSkills },
  experience: { en: enExperience, es: esExperience },
  projects: { en: enProjects, es: esProjects },
  contact: { en: enContact, es: esContact },
  resume: { en: enResume, es: esResume },
  blog: { en: enBlog, es: esBlog },
  seo: { en: enSeo, es: esSeo },
  personal: { en: enPersonal, es: esPersonal },
};

// Verifies EN↔ES translation key parity across all namespaces
describe('Property 9: Translation key completeness across languages', () => {
  for (const [ns, { en, es }] of Object.entries(namespaces)) {
    describe(`namespace: ${ns}`, () => {
      const enKeys = flattenKeys(en as Record<string, unknown>);
      const esKeys = flattenKeys(es as Record<string, unknown>);

      it('EN has at least one key', () => {
        expect(enKeys.length).toBeGreaterThan(0);
      });

      it('every EN key has a non-empty ES counterpart', () => {
        const missing: string[] = [];
        const empty: string[] = [];

        for (const key of enKeys) {
          const value = getNestedValue(es as Record<string, unknown>, key);
          if (value === undefined) {
            missing.push(key);
          } else if (typeof value === 'string' && value.trim() === '') {
            empty.push(key);
          }
        }

        expect(missing, `ES missing keys in "${ns}": ${missing.join(', ')}`).toEqual([]);
        expect(empty, `ES empty keys in "${ns}": ${empty.join(', ')}`).toEqual([]);
      });

      it('every ES key has a non-empty EN counterpart', () => {
        const missing: string[] = [];
        const empty: string[] = [];

        for (const key of esKeys) {
          const value = getNestedValue(en as Record<string, unknown>, key);
          if (value === undefined) {
            missing.push(key);
          } else if (typeof value === 'string' && value.trim() === '') {
            empty.push(key);
          }
        }

        expect(missing, `EN missing keys in "${ns}": ${missing.join(', ')}`).toEqual([]);
        expect(empty, `EN empty keys in "${ns}": ${empty.join(', ')}`).toEqual([]);
      });
    });
  }
});
