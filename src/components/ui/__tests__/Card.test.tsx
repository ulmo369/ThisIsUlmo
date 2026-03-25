import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../Card';

describe('Card', () => {
  it('renders an <article> element', () => {
    render(<Card>Content</Card>);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(<Card>Card body</Card>);
    expect(screen.getByText('Card body')).toBeInTheDocument();
  });

  it('applies hover classes when hoverable is true', () => {
    render(<Card hoverable>Content</Card>);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('hover:scale-[1.02]', 'hover:shadow-lg');
  });

  it('does not apply hover classes when hoverable is false', () => {
    render(<Card>Content</Card>);
    const article = screen.getByRole('article');
    expect(article).not.toHaveClass('hover:scale-[1.02]');
  });

  it('supports className override', () => {
    render(<Card className="bg-red-500">Content</Card>);
    expect(screen.getByRole('article')).toHaveClass('bg-red-500');
  });

  it('adds button role and tabIndex when onClick is provided', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Content</Card>);
    const article = screen.getByRole('button');
    expect(article.tagName).toBe('ARTICLE');
    expect(article).toHaveAttribute('tabindex', '0');
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Content</Card>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
