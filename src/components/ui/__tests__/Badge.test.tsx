import { render, screen } from '@testing-library/react';
import Badge from '../Badge';

describe('Badge', () => {
  it('renders a <span> element', () => {
    render(<Badge label="TypeScript" />);
    const badge = screen.getByText('TypeScript');
    expect(badge.tagName).toBe('SPAN');
  });

  it('displays the label text', () => {
    render(<Badge label="Python" />);
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  it('applies core variant classes', () => {
    render(<Badge label="Core" variant="core" />);
    expect(screen.getByText('Core')).toHaveClass('bg-primary-200', 'text-primary-900');
  });

  it('applies experienced variant classes', () => {
    render(<Badge label="Exp" variant="experienced" />);
    const badge = screen.getByText('Exp');
    expect(badge.className).toContain('text-accent-green-dark');
  });

  it('applies familiar variant classes', () => {
    render(<Badge label="Fam" variant="familiar" />);
    const badge = screen.getByText('Fam');
    expect(badge.className).toContain('text-accent-red-dark');
  });

  it('applies default variant classes when no variant specified', () => {
    render(<Badge label="Default" />);
    expect(screen.getByText('Default')).toHaveClass('bg-theme-light-surface', 'text-theme-light-text-secondary');
  });

  it('uses different classes for each variant', () => {
    const { rerender } = render(<Badge label="Test" variant="core" />);
    const coreClasses = screen.getByText('Test').className;

    rerender(<Badge label="Test" variant="experienced" />);
    const expClasses = screen.getByText('Test').className;

    rerender(<Badge label="Test" variant="familiar" />);
    const famClasses = screen.getByText('Test').className;

    rerender(<Badge label="Test" variant="default" />);
    const defClasses = screen.getByText('Test').className;

    const allClasses = [coreClasses, expClasses, famClasses, defClasses];
    const unique = new Set(allClasses);
    expect(unique.size).toBe(4);
  });

  it('supports className override', () => {
    render(<Badge label="Tag" className="ml-2" />);
    expect(screen.getByText('Tag')).toHaveClass('ml-2');
  });
});
