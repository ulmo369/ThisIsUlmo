import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectsSection from '../ProjectsSection';
import { projects } from '@/data/projects';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => `projects.${key}`,
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
}));

const featured = projects.filter((p) => p.featured);

function renderWithRouter() {
  return render(
    <MemoryRouter>
      <ProjectsSection />
    </MemoryRouter>,
  );
}

describe('ProjectsSection', () => {
  it('renders section with id "projects"', () => {
    const { container } = renderWithRouter();
    expect(container.querySelector('section#projects')).toBeInTheDocument();
  });

  it('renders title and subtitle', () => {
    renderWithRouter();
    expect(screen.getByText('projects.title')).toBeInTheDocument();
    expect(screen.getByText('projects.subtitle')).toBeInTheDocument();
  });

  it('renders only featured project cards', () => {
    renderWithRouter();
    for (const project of featured) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  it('renders project card links pointing to /projects/:slug', () => {
    renderWithRouter();
    for (const project of featured) {
      const link = screen.getByText(project.title).closest('a');
      expect(link).toHaveAttribute('href', `/projects/${project.slug}`);
    }
  });

  it('renders a "view all" CTA linking to /projects', () => {
    renderWithRouter();
    const viewAll = screen.getByText('projects.viewAll').closest('a');
    expect(viewAll).toHaveAttribute('href', '/projects');
  });
});
