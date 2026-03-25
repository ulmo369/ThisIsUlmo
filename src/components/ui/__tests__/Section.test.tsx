import { render, screen } from '@testing-library/react';
import Section from '../Section';

describe('Section', () => {
  it('renders a <section> element', () => {
    render(<Section>Content</Section>);
    const el = screen.getByText('Content').closest('section');
    expect(el).toBeInTheDocument();
    expect(el?.tagName).toBe('SECTION');
  });

  it('renders children content', () => {
    render(<Section>Section body</Section>);
    expect(screen.getByText('Section body')).toBeInTheDocument();
  });

  it('applies the id prop for anchor linking', () => {
    render(<Section id="skills">Skills</Section>);
    const section = screen.getByText('Skills').closest('section');
    expect(section).toHaveAttribute('id', 'skills');
  });

  it('does not set id when not provided', () => {
    render(<Section>No id</Section>);
    const section = screen.getByText('No id').closest('section');
    expect(section).not.toHaveAttribute('id');
  });

  it('supports className override', () => {
    render(<Section className="bg-black">Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('bg-black');
  });

  it('applies base padding and max-width classes', () => {
    render(<Section>Content</Section>);
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('py-12', 'mx-auto', 'max-w-6xl');
  });
});
