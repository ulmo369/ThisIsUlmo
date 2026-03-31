import { render, screen } from '@testing-library/react';
import ResumeSection from '../ResumeSection';
import { resumeData } from '@/data/resume';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => `resume.${key}`,
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
}));

describe('ResumeSection', () => {
  it('renders section with id "resume"', () => {
    const { container } = render(<ResumeSection />);
    expect(container.querySelector('section#resume')).toBeInTheDocument();
  });

  it('renders title and subtitle', () => {
    render(<ResumeSection />);
    expect(screen.getByText('resume.title')).toBeInTheDocument();
    expect(screen.getByText('resume.subtitle')).toBeInTheDocument();
  });

  it('renders resume summary', () => {
    render(<ResumeSection />);
    expect(screen.getByText(resumeData.summary)).toBeInTheDocument();
  });

  it('renders experience entries from resume data', () => {
    render(<ResumeSection />);
    for (const entry of resumeData.experience) {
      expect(screen.getByText(entry.role)).toBeInTheDocument();
    }
  });

  it('renders education entries', () => {
    render(<ResumeSection />);
    for (const entry of resumeData.education) {
      expect(screen.getByText(entry.degree)).toBeInTheDocument();
      expect(screen.getByText(entry.institution)).toBeInTheDocument();
    }
  });

  it('renders PDF download button with correct href', () => {
    render(<ResumeSection />);
    const downloadLink = screen.getByText('resume.download').closest('a');
    expect(downloadLink).toHaveAttribute('href', '/files/Emilio_resume.pdf');
  });
});
