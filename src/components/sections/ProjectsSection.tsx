import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import type { Project } from '@/types';

/** Renders a single project card with link to detail page */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeInUp}>
      <Link to={`/projects/${project.slug}`} className="block h-full">
        <Card hoverable className="h-full flex flex-col">
          <Heading level={3} className="mb-2">
            {project.title}
          </Heading>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech) => (
              <Badge key={tech} label={tech} variant="default" />
            ))}
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
              {project.metrics.map((metric) => (
                <Badge key={metric} label={metric} variant="core" />
              ))}
            </div>
          )}
        </Card>
      </Link>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { t } = useTranslation('projects');

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section id="projects">
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

          {/* Featured project cards — responsive 1→2→3 columns */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* CTA to full projects page */}
          <motion.div variants={fadeInUp} className="text-center">
            <Link to="/projects">
              <Button variant="outline" size="lg">
                {t('viewAll')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
