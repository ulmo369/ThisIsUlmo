import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { contactInfo } from '@/data/contact';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import type { ComponentType } from 'react';

/** Contact method descriptor for rendering icons */
interface ContactMethod {
  key: string;
  href: string;
  external: boolean;
  icon: ComponentType<{ className?: string }>;
}

/** Builds the list of contact methods from static data */
function getContactMethods(): ContactMethod[] {
  const methods: ContactMethod[] = [
    { key: 'email', href: `mailto:${contactInfo.email}`, external: false, icon: MdEmail },
  ];
  if (contactInfo.phone) {
    methods.push({ key: 'phone', href: `tel:${contactInfo.phone}`, external: false, icon: MdPhone });
  }
  methods.push(
    { key: 'linkedin', href: contactInfo.linkedin, external: true, icon: FaLinkedin },
    { key: 'github', href: contactInfo.github, external: true, icon: FaGithub },
  );
  return methods;
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

          {/* Contact icons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {methods.map((method) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.key}
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  aria-label={t(`tooltips.${method.key}`)}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <IconComponent className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">{t(`tooltips.${method.key}`)}</span>
                </a>
              );
            })}
          </motion.div>

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
