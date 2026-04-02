import SEOHead from '@/utils/SEOHead';
import { seoData } from '@/data/seo';
import ContactSection from '@/components/sections/ContactSection';

/** Standalone contact page reusing the landing page ContactSection */
export default function ContactPage() {
  const seo = seoData['/contact'];

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} ogImage={seo.ogImage} ogUrl={seo.ogUrl} />
      <ContactSection />
    </>
  );
}
