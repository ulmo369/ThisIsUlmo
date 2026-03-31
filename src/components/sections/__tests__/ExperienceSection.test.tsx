import { render, screen } from '@testing-library/react';
import ExperienceSection from '../ExperienceSection';
import { experience } from '@/data/experience';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => `experience.${key}`,
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
}));

describe('ExperienceSection', () => {
  it('renders section with id "experience"', () => {
    const { container } = render(<ExperienceSection />);
    expect(container.querySelector('section#experience')).toBeInTheDocument();
  });

  it('renders title and subtitle', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('experience.title')).toBeInTheDocument();
    expect(screen.getByText('experience.subtitle')).toBeInTheDocument();
  });

  it('renders all experience entries', () => {
    render(<ExperienceSection />);
    for (const entry of experience) {
      expect(screen.getByText(entry.role)).toBeInTheDocument();
      expect(screen.getByText(entry.company)).toBeInTheDocument();
    }
  });

  it('renders metrics for the primary entry', () => {
    render(<ExperienceSection />);
    const primary = experience.find((e) => e.isPrimary);
    expect(primary).toBeDefined();
    for (const metric of primary!.metrics) {
      expect(screen.getByText(metric)).toBeInTheDocument();
    }
  });

  it('renders timeline articles for each entry', () => {
    const { container } = render(<ExperienceSection />);
    const articles = container.querySelectorAll('article');
    expect(articles.length).toBe(experience.length);
  });
});
