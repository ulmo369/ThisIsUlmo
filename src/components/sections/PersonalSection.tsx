import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import { education } from '@/data/education';
import { awards } from '@/data/awards';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

/** Category keys that map to arrays in personalInfo */
const CATEGORIES = ['sports', 'books', 'games', 'music'] as const;

export default function PersonalSection() {
  const { t } = useTranslation('personal');

  return (
    <Section id="personal">
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

          {/* Category cards */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => (
              <motion.div key={category} variants={fadeInUp}>
                <Card className="h-full flex flex-col gap-4">
                  <Heading level={4}>{t(`${category}.title`)}</Heading>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t(`${category}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {personalInfo[category].map((item) => (
                      <Badge key={item} label={item} variant="default" />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div variants={fadeInUp}>
            <Heading level={3} className="text-center mb-6">
              {t('education.title')}
            </Heading>
            <div className="grid gap-6 sm:grid-cols-2">
              {education.map((entry) => (
                <Card key={`${entry.institution}-${entry.degree}`} className="h-full">
                  <Heading level={4} className="mb-2">{entry.degree}</Heading>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{entry.institution}</p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{entry.period}</span>
                  {entry.description && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{entry.description}</p>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div variants={fadeInUp}>
            <Heading level={3} className="text-center mb-6">
              {t('awards.title')}
            </Heading>
            <div className="grid gap-6 sm:grid-cols-2">
              {awards.map((award) => (
                <Card key={award.title} className="h-full">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Heading level={4}>{award.title}</Heading>
                    {award.year && <Badge label={award.year} variant="default" />}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{award.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Personality */}
          <motion.div variants={fadeInUp}>
            <Card className="text-center max-w-2xl mx-auto">
              <Heading level={4} className="mb-3">
                {t('personality.title')}
              </Heading>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('personality.description')}
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
