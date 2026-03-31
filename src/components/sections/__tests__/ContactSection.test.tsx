import { render, screen } from '@testing-library/react';
import ContactSection from '../ContactSection';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => `contact.${key}`,
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
}));

describe('ContactSection', () => {
  it('renders section with id "contact"', () => {
    const { container } = render(<ContactSection />);
    expect(container.querySelector('section#contact')).toBeInTheDocument();
  });

  it('renders title and subtitle', () => {
    render(<ContactSection />);
    expect(screen.getByText('contact.title')).toBeInTheDocument();
    expect(screen.getByText('contact.subtitle')).toBeInTheDocument();
  });

  it('renders email, linkedin, and github contact methods', () => {
    render(<ContactSection />);
    const headings = screen.getAllByText(/contact\.(email|linkedin|github)/);
    expect(headings.length).toBeGreaterThanOrEqual(3);
  });

  it('renders external links with security attributes', () => {
    const { container } = render(<ContactSection />);
    const externalLinks = container.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders CTA text', () => {
    render(<ContactSection />);
    expect(screen.getByText('contact.cta')).toBeInTheDocument();
  });
});
