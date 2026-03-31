import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

/** Category keys that map to arrays in personalInfo */
const CATEGORIES = ['sports', 'books', 'games'] as const;

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
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
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
