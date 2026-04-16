import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MdEmail, MdPhone, MdContentCopy } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { contactInfo } from '@/data/contact';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import type { ComponentType } from 'react';

interface ContactMethod {
  key: string;
  href: string;
  external: boolean;
  icon: ComponentType<{ className?: string }>;
  copyValue?: string;
}

function getContactMethods(): ContactMethod[] {
  const methods: ContactMethod[] = [
    { key: 'email', href: `mailto:${contactInfo.email}`, external: false, icon: MdEmail, copyValue: contactInfo.email },
  ];
  if (contactInfo.phone) {
    methods.push({ key: 'phone', href: `tel:${contactInfo.phone}`, external: false, icon: MdPhone, copyValue: contactInfo.phone });
  }
  methods.push(
    { key: 'linkedin', href: contactInfo.linkedin, external: true, icon: FaLinkedin },
    { key: 'github', href: contactInfo.github, external: true, icon: FaGithub },
  );
  return methods;
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: silently fail if clipboard API unavailable
    }
  };

  return (
    <div className="relative flex items-center gap-1.5">
      <span className="text-xs text-gray-500 dark:text-gray-400">{value}</span>
      <button
        onClick={handleCopy}
        aria-label={label}
        className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <MdContentCopy className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
      </button>
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-primary-500 dark:text-primary-400 whitespace-nowrap"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
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
          <motion.div variants={fadeInUp} className="text-center">
            <Heading level={2}>{t('title')}</Heading>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-start justify-center gap-8"
          >
            {methods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div key={method.key} className="flex flex-col items-center gap-2">
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    aria-label={t(`tooltips.${method.key}`)}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <IconComponent className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{t(`tooltips.${method.key}`)}</span>
                  </a>
                  {method.copyValue && (
                    <CopyButton value={method.copyValue} label={t('copied')} />
                  )}
                </div>
              );
            })}
          </motion.div>

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
