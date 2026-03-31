import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => `about.${key}`,
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
}));

describe('AboutSection', () => {
  it('renders section with id "about"', () => {
    const { container } = render(<AboutSection />);
    expect(container.querySelector('section#about')).toBeInTheDocument();
  });

  it('renders title and intro', () => {
    render(<AboutSection />);
    const titles = screen.getAllByText('about.title');
    expect(titles.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('about.intro')).toBeInTheDocument();
  });

  it('renders mindset, leadership, and systems cards', () => {
    render(<AboutSection />);
    expect(screen.getByText('about.mindset.title')).toBeInTheDocument();
    expect(screen.getByText('about.leadership.title')).toBeInTheDocument();
    expect(screen.getByText('about.systems.title')).toBeInTheDocument();
  });

  it('renders three principle cards', () => {
    render(<AboutSection />);
    expect(screen.getByText('about.principles.simplicity')).toBeInTheDocument();
    expect(screen.getByText('about.principles.maintainable')).toBeInTheDocument();
    expect(screen.getByText('about.principles.understand')).toBeInTheDocument();
  });
});
