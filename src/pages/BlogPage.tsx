import { useTranslation } from 'react-i18next';
import SEOHead from '@/utils/SEOHead';
import { seoData } from '@/data/seo';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

/** Placeholder blog page with "coming soon" message */
export default function BlogPage() {
  const { t } = useTranslation('blog');
  const seo = seoData['/blog'];

  return (
    <Section>
      <SEOHead title={seo.title} description={seo.description} ogImage={seo.ogImage} ogUrl={seo.ogUrl} />
      <Container className="flex flex-col items-center text-center gap-6 py-16 sm:py-24">
        <Heading level={1}>{t('title')}</Heading>
        <p className="text-2xl sm:text-3xl font-semibold text-primary-500 dark:text-primary-400">
          {t('comingSoon')}
        </p>
        <p className="max-w-xl text-theme-light-text-secondary dark:text-theme-dark-text-secondary text-base sm:text-lg leading-relaxed">
          {t('description')}
        </p>
      </Container>
    </Section>
  );
}
