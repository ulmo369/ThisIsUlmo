import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
}

/** Renders SEO meta tags for a given page via react-helmet-async */
export default function SEOHead({ title, description, ogImage, ogUrl }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
    </Helmet>
  );
}
