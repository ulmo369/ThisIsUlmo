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

describe('Property 5: Project detail page completeness', () => {
  it.each(projects.map((p) => [p.slug, p]))(
    'project "%s" has complete STAR sections, techStack, and engineeringHighlights',
    (_slug, project) => {
      const p = project as (typeof projects)[number];

      // STAR sections are non-empty strings
      expect(typeof p.star.situation).toBe('string');
      expect(p.star.situation.length).toBeGreaterThan(0);
      expect(typeof p.star.task).toBe('string');
      expect(p.star.task.length).toBeGreaterThan(0);
      expect(typeof p.star.action).toBe('string');
      expect(p.star.action.length).toBeGreaterThan(0);
      expect(typeof p.star.result).toBe('string');
      expect(p.star.result.length).toBeGreaterThan(0);

      // Every techStack item is a non-empty string
      expect(p.techStack.length).toBeGreaterThan(0);
      for (const tech of p.techStack) {
        expect(typeof tech).toBe('string');
        expect(tech.length).toBeGreaterThan(0);
      }

      // Engineering highlights arrays are non-empty
      const { decisions, tradeoffs, constraints, scalability } = p.engineeringHighlights;

      expect(decisions.length).toBeGreaterThan(0);
      for (const d of decisions) {
        expect(typeof d).toBe('string');
        expect(d.length).toBeGreaterThan(0);
      }

      expect(tradeoffs.length).toBeGreaterThan(0);
      for (const t of tradeoffs) {
        expect(typeof t).toBe('string');
        expect(t.length).toBeGreaterThan(0);
      }

      expect(constraints.length).toBeGreaterThan(0);
      for (const c of constraints) {
        expect(typeof c).toBe('string');
        expect(c.length).toBeGreaterThan(0);
      }

      expect(scalability.length).toBeGreaterThan(0);
      for (const s of scalability) {
        expect(typeof s).toBe('string');
        expect(s.length).toBeGreaterThan(0);
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
