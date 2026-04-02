import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '@/utils/SEOHead';
import { seoData } from '@/data/seo';
import { projects } from '@/data/projects';
import { fadeInUp, fadeIn, staggerContainer } from '@/lib/motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

/** STAR method section labels */
const starKeys = ['situation', 'task', 'action', 'result'] as const;

/** Engineering highlights section keys */
const highlightKeys = ['decisions', 'tradeoffs', 'constraints', 'scalability'] as const;

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation('projects');

  const project = projects.find((p) => p.slug === slug);

  const fallbackSeo = seoData['/projects/:slug'];

  if (!project) {
    return (
      <Section>
        <SEOHead title={fallbackSeo.title} description={fallbackSeo.description} ogImage={fallbackSeo.ogImage} ogUrl={fallbackSeo.ogUrl} />
        <Container className="text-center py-20">
          <Heading level={2}>{t('notFound')}</Heading>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {t('notFoundDescription')}
          </p>
          <Link to="/projects" className="mt-6 inline-block">
            <Button variant="primary">{t('backToProjects')}</Button>
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <SEOHead
        title={`${project.title} | Diego Emilio Barrera Hernandez`}
        description={project.description}
        ogImage={fallbackSeo.ogImage}
        ogUrl={`https://placeholder.dev/projects/${project.slug}`}
      />
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 sm:gap-10"
        >
          {/* Back link */}
          <motion.div variants={fadeInUp}>
            <Link
              to="/projects"
              className="text-primary-500 hover:text-primary-400 transition-colors text-sm"
            >
              ← {t('backToProjects')}
            </Link>
          </motion.div>

          {/* Title and description */}
          <motion.div variants={fadeInUp}>
            <Heading level={1}>{project.title}</Heading>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Tech stack */}
          <motion.div variants={fadeInUp}>
            <Heading level={3} className="mb-3">
              {t('techStack')}
            </Heading>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} label={tech} variant="default" />
              ))}
            </div>
          </motion.div>

          {/* STAR method sections */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {starKeys.map((key) => (
              <motion.div key={key} variants={fadeInUp}>
                <Card className="h-full">
                  <Heading level={3} mono className="mb-3 text-primary-500 dark:text-primary-400">
                    {t(`star.${key}`)}
                  </Heading>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.star[key]}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {project.metrics.map((metric) => (
                <Badge key={metric} label={metric} variant="core" />
              ))}
            </motion.div>
          )}

          {/* Engineering Highlights */}
          <motion.div variants={fadeIn}>
            <Heading level={2} className="mb-6">
              {t('engineering.title')}
            </Heading>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {highlightKeys.map((key) => (
                <Card key={key} className="h-full">
                  <Heading level={4} mono className="mb-3">
                    {t(`engineering.${key}`)}
                  </Heading>
                  <ul className="space-y-2">
                    {project.engineeringHighlights[key].map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-primary-500 mt-1 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Diagram placeholder */}
          {project.diagramPlaceholder && (
            <motion.div variants={fadeInUp}>
              <Card className="flex items-center justify-center py-16 border-dashed">
                <div className="text-center">
                  <div className="text-4xl mb-3">📐</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {t('diagramPlaceholder')}
                  </p>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Lazy-loaded image placeholder */}
          <motion.div variants={fadeInUp}>
            <img
              src=""
              alt={project.title}
              loading="lazy"
              width={800}
              height={400}
              className="hidden"
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
