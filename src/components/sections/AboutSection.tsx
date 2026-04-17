import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';

const principleKeys = ['simplicity', 'maintainable', 'understand'] as const;

export default function AboutSection() {
  const { t } = useTranslation('about');

  return (
    <Section id="about">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-10 sm:gap-12"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <Heading level={2}>{t('title')}</Heading>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-theme-light-text-secondary dark:text-theme-dark-text-secondary leading-relaxed">
              {t('intro')}
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {(['mindset', 'leadership', 'systems'] as const).map((key) => (
              <motion.div key={key} variants={fadeInUp}>
                <Card className="h-full">
                  <Heading level={3} className="mb-3">
                    {t(`${key}.title`)}
                  </Heading>
                  <p className="text-theme-light-text-secondary dark:text-theme-dark-text-secondary leading-relaxed">
                    {t(`${key}.description`)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp}>
            <Heading level={3} className="text-center mb-6">
              {t('principlesTitle')}
            </Heading>
            <div className="grid gap-4 sm:grid-cols-3">
              {principleKeys.map((key) => (
                <Card key={key} className="text-center">
                  <p className="font-medium text-theme-light-text-primary dark:text-theme-dark-text-primary">
                    {t(`principles.${key}`)}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
