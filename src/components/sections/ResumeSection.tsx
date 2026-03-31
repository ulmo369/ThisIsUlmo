import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function ResumeSection() {
  const { t } = useTranslation('resume');

  return (
    <Section id="resume">
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

          {/* Summary */}
          <motion.div variants={fadeInUp}>
            <Card>
              <Heading level={3} className="mb-3">
                {t('sections.summary')}
              </Heading>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {resumeData.summary}
              </p>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div variants={fadeInUp}>
            <Heading level={3} className="mb-4">
              {t('sections.experience')}
            </Heading>
            <div className="flex flex-col gap-4">
              {resumeData.experience.map((entry) => (
                <Card key={entry.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <Heading level={4}>{entry.role}</Heading>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {entry.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {entry.period}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {entry.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeInUp}>
            <Heading level={3} className="mb-4">
              {t('sections.education')}
            </Heading>
            <div className="flex flex-col gap-4">
              {resumeData.education.map((entry) => (
                <Card key={entry.institution}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <Heading level={4}>{entry.degree}</Heading>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {entry.institution}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {entry.period}
                    </span>
                  </div>
                  {entry.description && (
                    <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {entry.description}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          {resumeData.awards && resumeData.awards.length > 0 && (
            <motion.div variants={fadeInUp}>
              <Heading level={3} className="mb-4">
                {t('sections.awards')}
              </Heading>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {resumeData.awards.map((award) => (
                  <Card key={award.title}>
                    <div className="flex items-start justify-between gap-2">
                      <Heading level={4}>{award.title}</Heading>
                      {award.year && (
                        <Badge label={award.year} variant="default" />
                      )}
                    </div>
                    <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {award.description}
                    </p>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {/* Download PDF */}
          <motion.div variants={fadeInUp} className="text-center">
            <Button
              href="/files/Emilio_resume.pdf"
              external
              variant="primary"
              size="lg"
            >
              {t('download')}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
