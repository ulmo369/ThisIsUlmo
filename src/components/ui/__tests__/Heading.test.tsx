import { render, screen } from '@testing-library/react';
import Heading from '../Heading';

describe('Heading', () => {
  it('renders <h1> when level is 1', () => {
    render(<Heading level={1}>Title</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders <h2> when level is 2', () => {
    render(<Heading level={2}>Subtitle</Heading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders <h3> when level is 3', () => {
    render(<Heading level={3}>Section</Heading>);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('renders <h4> when level is 4', () => {
    render(<Heading level={4}>Sub-section</Heading>);
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(<Heading level={1}>Hello World</Heading>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies font-mono class when mono is true', () => {
    render(<Heading level={2} mono>Code</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('font-mono');
  });

  it('does not apply font-mono when mono is false', () => {
    render(<Heading level={2}>Normal</Heading>);
    expect(screen.getByRole('heading')).not.toHaveClass('font-mono');
  });

  it('supports className override', () => {
    render(<Heading level={1} className="text-center">Title</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('text-center');
  });

  it('applies level-specific size classes', () => {
    const { rerender } = render(<Heading level={1}>H1</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('text-3xl');

    rerender(<Heading level={2}>H2</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('text-2xl');

    rerender(<Heading level={3}>H3</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('text-xl');

    rerender(<Heading level={4}>H4</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('text-lg');
  });
});
