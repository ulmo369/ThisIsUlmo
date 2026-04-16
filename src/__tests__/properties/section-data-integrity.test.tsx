// Validates section data integrity: project links, project completeness, and external link security

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { projects } from '@/data/projects';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
}));

describe('Property 4: Project card links match project slugs', () => {
  it('each featured project card contains a link to /projects/{slug}', () => {
    const { container } = render(
      <MemoryRouter>
        <ProjectsSection />
      </MemoryRouter>,
    );

    const featuredProjects = projects.filter((p) => p.featured);

    for (const project of featuredProjects) {
      const expectedHref = `/projects/${project.slug}`;
      const link = container.querySelector(`a[href="${expectedHref}"]`);
      expect(link).toBeInTheDocument();
    }
  });
});

describe('Property 5: Project structural data completeness', () => {
  it.each(projects.map((p) => [p.slug, p]))(
    'project "%s" has complete structural fields (slug, techStack)',
    (_slug, project) => {
      const p = project as (typeof projects)[number];

      // slug is a non-empty string
      expect(typeof p.slug).toBe('string');
      expect(p.slug.length).toBeGreaterThan(0);

      // Every techStack item is a non-empty string
      expect(p.techStack.length).toBeGreaterThan(0);
      for (const tech of p.techStack) {
        expect(typeof tech).toBe('string');
        expect(tech.length).toBeGreaterThan(0);
      }
    },
  );
});

describe('Property 6: External links have security attributes', () => {
  it('all external links in ContactSection have target="_blank" and rel="noopener noreferrer"', () => {
    const { container } = render(<ContactSection />);

    // External contact links (linkedin, github) should have security attrs
    const allLinks = container.querySelectorAll('a[href]');
    const externalLinks = Array.from(allLinks).filter((link) => {
      const href = link.getAttribute('href') ?? '';
      return href.startsWith('http://') || href.startsWith('https://');
    });

    // We expect at least linkedin and github
    expect(externalLinks.length).toBeGreaterThanOrEqual(2);

    for (const link of externalLinks) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });
});
