import { render, screen } from '@testing-library/react';
import Container from '../Container';

describe('Container', () => {
  it('renders a <div> element by default', () => {
    render(<Container>Content</Container>);
    const el = screen.getByText('Content');
    expect(el.tagName).toBe('DIV');
  });

  it('renders a custom element via the as prop', () => {
    render(<Container as="main">Content</Container>);
    const el = screen.getByText('Content');
    expect(el.tagName).toBe('MAIN');
  });

  it('renders as <nav> when as="nav"', () => {
    render(<Container as="nav">Nav content</Container>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(<Container>Inner content</Container>);
    expect(screen.getByText('Inner content')).toBeInTheDocument();
  });

  it('supports className override', () => {
    render(<Container className="py-8">Content</Container>);
    expect(screen.getByText('Content')).toHaveClass('py-8');
  });

  it('applies base centering and max-width classes', () => {
    render(<Container>Content</Container>);
    const el = screen.getByText('Content');
    expect(el).toHaveClass('mx-auto', 'max-w-6xl', 'w-full');
  });
});
