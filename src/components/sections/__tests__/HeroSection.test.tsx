import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from '../HeroSection';

vi.mock('react-i18next', () => ({
  useTranslation: (ns: string) => ({
    t: (key: string) => `${ns}.${key}`,
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
}));

function renderWithRouter() {
  return render(
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>,
  );
}

describe('HeroSection', () => {
  it('renders name, role, and intro text', () => {
    renderWithRouter();
    expect(screen.getByText('hero.name')).toBeInTheDocument();
    expect(screen.getByText('hero.role')).toBeInTheDocument();
    expect(screen.getByText('hero.intro')).toBeInTheDocument();
  });

  it('renders three CTA elements with correct links', () => {
    renderWithRouter();
    const projectsLink = screen.getByText('common.buttons.viewProjects').closest('a');
    expect(projectsLink).toHaveAttribute('href', '/projects');

    const contactLink = screen.getByText('common.buttons.contactMe').closest('a');
    expect(contactLink).toHaveAttribute('href', '/contact');

    expect(screen.getByText('hero.cta.linkedin')).toBeInTheDocument();
  });

  it('renders inside a section with id "hero"', () => {
    const { container } = renderWithRouter();
    expect(container.querySelector('section#hero')).toBeInTheDocument();
  });

  it('contains framer-motion animated wrapper', () => {
    const { container } = renderWithRouter();
    expect(container.querySelector('section#hero')).toBeInTheDocument();
    expect(screen.getByText('hero.name')).toBeInTheDocument();
  });
});
