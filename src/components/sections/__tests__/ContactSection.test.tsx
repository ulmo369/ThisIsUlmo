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

  it('renders icon links with aria-labels for email, linkedin, and github', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText('contact.tooltips.email')).toBeInTheDocument();
    expect(screen.getByLabelText('contact.tooltips.linkedin')).toBeInTheDocument();
    expect(screen.getByLabelText('contact.tooltips.github')).toBeInTheDocument();
  });

  it('renders mailto and tel links', () => {
    const { container } = render(<ContactSection />);
    const mailtoLink = container.querySelector('a[href^="mailto:"]');
    expect(mailtoLink).toBeInTheDocument();
    const telLink = container.querySelector('a[href^="tel:"]');
    expect(telLink).toBeInTheDocument();
  });

  it('renders external links with security attributes', () => {
    const { container } = render(<ContactSection />);
    const externalLinks = container.querySelectorAll('a[target="_blank"]');
    expect(externalLinks.length).toBeGreaterThanOrEqual(2);
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders CTA text', () => {
    render(<ContactSection />);
    expect(screen.getByText('contact.cta')).toBeInTheDocument();
  });
});
