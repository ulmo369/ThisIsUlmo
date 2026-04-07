import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { skills } from '@/data/skills';
import type { Skill, SkillCategory } from '@/types';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

const CORE_STACK = ['Python', 'C++', 'AWS', 'TypeScript'];

/** Maps SkillCategory values to i18n keys */
const categoryKeyMap: Record<SkillCategory, string> = {
  'Programming Languages': 'programmingLanguages',
  'Cloud & Infrastructure': 'cloudInfrastructure',
  'AI / Data Science': 'aiDataScience',
  Frontend: 'frontend',
  Backend: 'backend',
  Databases: 'databases',
  Testing: 'testing',
  'Tools & Workflow': 'toolsWorkflow',
  Languages: 'languages',
  Methodologies: 'methodologies',
};

const CATEGORY_ORDER: SkillCategory[] = [
  'Programming Languages',
  'Cloud & Infrastructure',
  'AI / Data Science',
  'Frontend',
  'Backend',
  'Databases',
  'Testing',
  'Tools & Workflow',
  'Languages',
  'Methodologies',
];

/** Groups skills by category preserving defined order */
function groupByCategory(allSkills: Skill[]): Map<SkillCategory, Skill[]> {
  const grouped = new Map<SkillCategory, Skill[]>();
  for (const cat of CATEGORY_ORDER) {
    grouped.set(cat, []);
  }
  for (const skill of allSkills) {
    grouped.get(skill.category)?.push(skill);
  }
  return grouped;
}

export default function SkillsSection() {
  const { t } = useTranslation('skills');

  const grouped = useMemo(() => groupByCategory(skills), []);
  const coreSkills = useMemo(
    () => skills.filter((s) => CORE_STACK.includes(s.name)),
    [],
  );

  return (
    <Section id="skills">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-10 sm:gap-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <Heading level={2}>{t('title')}</Heading>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Proficiency legend */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Badge label={t('proficiency.core')} variant="core" />
            </div>
            <div className="flex items-center gap-2">
              <Badge label={t('proficiency.experienced')} variant="experienced" />
            </div>
            <div className="flex items-center gap-2">
              <Badge label={t('proficiency.familiar')} variant="familiar" />
            </div>
          </motion.div>

          {/* Core stack highlight */}
          <motion.div variants={fadeInUp}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-lg border-2 border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30 px-4 py-2 text-sm font-semibold text-primary-700 dark:text-primary-300"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Category grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORY_ORDER.map((category) => {
              const categorySkills = grouped.get(category) ?? [];
              return (
                <motion.div key={category} variants={fadeInUp}>
                  <Card className="h-full">
                    <Heading level={4} className="mb-4">
                      {t(`categories.${categoryKeyMap[category]}`)}
                    </Heading>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <Badge
                          key={skill.name}
                          label={skill.name}
                          variant={skill.proficiency}
                        />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
