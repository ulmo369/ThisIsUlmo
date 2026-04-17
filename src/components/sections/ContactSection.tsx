import { useState, useRef, useCallback } from 'react';
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

const STREAK_SUFFIXES_EN = [
  '', 'double!!', 'triple!!', 'dominating!!', 'rampage!!',
  'killing spree!!!', 'unstoppable!!!!', 'GOD LIKE!!!!!', 'BEYOND GOD LIKE!!!!!!',
];

const STREAK_SUFFIXES_ES = [
  '', 'doble!!', 'triple!!', 'dominando!!', 'exterminio!!',
  'masacre!!!', 'imparable!!!!', 'DIOS!!!!!', 'POR ENCIMA DE DIOS!!!!!!',
];

function CopyButton({ value, label, lang }: { value: string; label: string; lang: string }) {
  const [streak, setStreak] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suffixes = lang.startsWith('es') ? STREAK_SUFFIXES_ES : STREAK_SUFFIXES_EN;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }

    // Clear previous hide timer
    if (timerRef.current) clearTimeout(timerRef.current);

    // Bump streak (first click = 0, second = 1, etc.)
    setStreak((prev) => {
      const next = visible ? Math.min(prev + 1, suffixes.length - 1) : 0;
      return next;
    });
    setVisible(true);

    // Hide after 2s and reset streak after fade-out
    timerRef.current = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setStreak(0), 300);
    }, 2000);
  }, [value, visible]);

  const suffix = suffixes[streak];
  const message = suffix ? `${label} ${suffix}` : label;

  return (
    <div className="relative flex flex-col items-center gap-1">
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-theme-light-text-muted dark:text-theme-dark-text-muted">{value}</span>
        <button
          onClick={handleCopy}
          aria-label={label}
          className="p-1 rounded hover:bg-theme-light-surface dark:hover:bg-theme-dark-surface transition-colors"
        >
          <MdContentCopy className="w-3.5 h-3.5 text-theme-light-text-muted dark:text-theme-dark-text-muted" />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.span
            key={streak}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              streak >= 8
                ? { opacity: 1, scale: 1.35, x: [0, -4, 4, -4, 4, -2, 2, 0], y: [0, -2, 2, -2, 2, 0] }
                : streak >= 7
                  ? { opacity: 1, scale: 1.3, x: [0, -2, 2, -2, 2, 0] }
                  : { opacity: 1, scale: 1 + streak * 0.04 }
            }
            exit={{ opacity: 0, scale: 0.8 }}
            transition={
              streak >= 7
                ? { duration: 0.4, x: { repeat: Infinity, duration: 0.3 }, y: { repeat: Infinity, duration: 0.4 } }
                : { duration: 0.15 }
            }
            className="absolute -bottom-5 text-xs text-primary-500 dark:text-primary-400 whitespace-nowrap font-medium text-center"
            >
              {message}
            </motion.span>
          )}
        </AnimatePresence>
    </div>
  );
}

export default function ContactSection() {
  const { t, i18n } = useTranslation('contact');
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
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-theme-light-text-secondary dark:text-theme-dark-text-secondary leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 max-w-2xl mx-auto"
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
                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-theme-light-surface dark:hover:bg-theme-dark-surface transition-colors"
                  >
                    <IconComponent className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                    <span className="text-xs text-theme-light-text-muted dark:text-theme-dark-text-muted">{t(`tooltips.${method.key}`)}</span>
                  </a>
                  {method.copyValue && (
                    <CopyButton value={method.copyValue} label={t('copied')} lang={i18n.language} />
                  )}
                </div>
              );
            })}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-theme-light-text-muted dark:text-theme-dark-text-muted text-sm sm:text-base mt-4"
          >
            {t('cta')}
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
