import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';
import { contactInfo } from '@/data/contact';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const { t: tHero } = useTranslation('hero');
  const { t: tCommon } = useTranslation('common');

  return (
    <Section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] items-center py-0 sm:py-0 md:py-0"
    >
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center gap-6 sm:gap-8"
        >
          <Heading level={1} className="leading-tight">
            {tHero('name')}
          </Heading>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary-500 dark:text-primary-400">
            {tHero('role')}
          </p>

          <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {tHero('intro')}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link to="/projects">
              <Button variant="primary" size="lg">
                {tCommon('buttons.viewProjects')}
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="outline" size="lg">
                {tCommon('buttons.contactMe')}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="lg"
              href={contactInfo.linkedin}
              external
            >
              {tHero('cta.linkedin')}
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
