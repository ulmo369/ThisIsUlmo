import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import type { ExperienceEntry } from '@/types';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Badge from '@/components/ui/Badge';

/** Renders a single timeline entry */
function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  const { t } = useTranslation('experience');

  return (
    <motion.div variants={fadeInUp} className="relative pl-8 sm:pl-10">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1.5 rounded-full border-2 ${
          entry.isPrimary
            ? 'h-5 w-5 border-primary-500 bg-primary-500 dark:border-primary-400 dark:bg-primary-400'
            : 'h-3.5 w-3.5 border-gray-400 bg-gray-400 dark:border-gray-500 dark:bg-gray-500'
        }`}
        style={entry.isPrimary ? { left: '-3px' } : { left: '0px' }}
      />

      <article
        className={`rounded-xl border p-5 sm:p-6 transition-colors ${
          entry.isPrimary
            ? 'border-primary-300 dark:border-primary-700 bg-primary-50/50 dark:bg-primary-900/20'
            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50'
        }`}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Heading level={3} className={entry.isPrimary ? 'text-primary-600 dark:text-primary-400' : ''}>
              {t(`${entry.id}.role`)}
            </Heading>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {entry.company}
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {entry.period.includes('Present') ? entry.period.replace('Present', t('present')) : entry.period}
          </span>
        </div>

        <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
          {t(`${entry.id}.description`)}
        </p>

        {(() => {
          const metrics = t(`${entry.id}.metrics`, { returnObjects: true });
          const metricsArr = Array.isArray(metrics) ? metrics : [];
          return metricsArr.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {metricsArr.map((metric: string) => (
                <Badge
                  key={metric}
                  label={metric}
                  variant={entry.isPrimary ? 'core' : 'default'}
                />
              ))}
            </div>
          ) : null;
        })()}
      </article>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const { t } = useTranslation('experience');

  return (
    <Section id="experience">
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

          {/* Timeline */}
          <div className="relative ml-2 sm:ml-4">
            {/* Vertical line */}
            <div className="absolute left-[6px] sm:left-[6px] top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />

            <div className="flex flex-col gap-8">
              {experience.map((entry) => (
                <TimelineEntry key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
