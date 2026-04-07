import { render, screen } from '@testing-library/react';
import PersonalSection from '../PersonalSection';
import { personalInfo } from '@/data/personal';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => `personal.${key}`,
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
}));

describe('PersonalSection', () => {
  it('renders section with id "personal"', () => {
    const { container } = render(<PersonalSection />);
    expect(container.querySelector('section#personal')).toBeInTheDocument();
  });

  it('renders title and subtitle', () => {
    render(<PersonalSection />);
    expect(screen.getByText('personal.title')).toBeInTheDocument();
    expect(screen.getByText('personal.subtitle')).toBeInTheDocument();
  });

  it('renders sports, books, games, and music category cards', () => {
    render(<PersonalSection />);
    expect(screen.getByText('personal.sports.title')).toBeInTheDocument();
    expect(screen.getByText('personal.books.title')).toBeInTheDocument();
    expect(screen.getByText('personal.games.title')).toBeInTheDocument();
    expect(screen.getByText('personal.music.title')).toBeInTheDocument();
  });

  it('renders personal data items as badges including music', () => {
    render(<PersonalSection />);
    for (const sport of personalInfo.sports) {
      expect(screen.getByText(sport)).toBeInTheDocument();
    }
    for (const game of personalInfo.games) {
      expect(screen.getByText(game)).toBeInTheDocument();
    }
    for (const item of personalInfo.music) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it('renders education sub-section', () => {
    render(<PersonalSection />);
    expect(screen.getByText('personal.education.title')).toBeInTheDocument();
  });

  it('renders awards sub-section', () => {
    render(<PersonalSection />);
    expect(screen.getByText('personal.awards.title')).toBeInTheDocument();
  });

  it('renders personality section', () => {
    render(<PersonalSection />);
    expect(screen.getByText('personal.personality.title')).toBeInTheDocument();
    expect(screen.getByText('personal.personality.description')).toBeInTheDocument();
  });
});
