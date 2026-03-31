import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { contactInfo } from '@/data/contact';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

/** Contact method descriptor for rendering cards */
interface ContactMethod {
  key: string;
  href: string;
  external: boolean;
}

/** Builds the list of contact methods from static data */
function getContactMethods(): ContactMethod[] {
  return [
    { key: 'email', href: `mailto:${contactInfo.email}`, external: false },
    { key: 'linkedin', href: contactInfo.linkedin, external: true },
    { key: 'github', href: contactInfo.github, external: true },
  ];
}

export default function ContactSection() {
  const { t } = useTranslation('contact');
  const methods = getContactMethods();

  return (
    <Section id="contact">
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

          {/* Contact cards */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto w-full">
            {methods.map((method) => (
              <motion.div key={method.key} variants={fadeInUp}>
                <Card className="h-full flex flex-col items-center text-center gap-4">
                  <Heading level={4}>{t(method.key)}</Heading>
                  <Button
                    variant="outline"
                    href={method.href}
                    external={method.external}
                  >
                    {t(method.key)}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base"
          >
            {t('cta')}
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
