import { render, screen } from '@testing-library/react';
import SkillsSection from '../SkillsSection';
import { skills } from '@/data/skills';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => `skills.${key}`,
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
}));

describe('SkillsSection', () => {
  it('renders section with id "skills"', () => {
    const { container } = render(<SkillsSection />);
    expect(container.querySelector('section#skills')).toBeInTheDocument();
  });

  it('renders title and subtitle', () => {
    render(<SkillsSection />);
    expect(screen.getByText('skills.title')).toBeInTheDocument();
    expect(screen.getByText('skills.subtitle')).toBeInTheDocument();
  });

  it('renders core stack skills prominently', () => {
    render(<SkillsSection />);
    const coreNames = ['Python', 'C++', 'AWS', 'TypeScript'];
    for (const name of coreNames) {
      const elements = screen.getAllByText(name);
      expect(elements.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders all skill names from data', () => {
    render(<SkillsSection />);
    for (const skill of skills) {
      const elements = screen.getAllByText(skill.name);
      expect(elements.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders proficiency legend badges', () => {
    render(<SkillsSection />);
    expect(screen.getByText('skills.proficiency.core')).toBeInTheDocument();
    expect(screen.getByText('skills.proficiency.experienced')).toBeInTheDocument();
    expect(screen.getByText('skills.proficiency.familiar')).toBeInTheDocument();
  });
});
