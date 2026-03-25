// Verifies design system components use semantic HTML and support dark/light themes

import { render } from '@testing-library/react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

describe('Property 10: Design system components render semantic HTML with theme support', () => {
  describe('Semantic HTML elements', () => {
    it('Button renders a <button> element', () => {
      const { container } = render(<Button>Click</Button>);
      const el = container.firstElementChild!;
      expect(el.tagName).toBe('BUTTON');
    });

    it('Button renders an <a> element when href is provided', () => {
      const { container } = render(<Button href="/test">Link</Button>);
      const el = container.firstElementChild!;
      expect(el.tagName).toBe('A');
    });

    it('Card renders an <article> element', () => {
      const { container } = render(<Card>Content</Card>);
      const el = container.firstElementChild!;
      expect(el.tagName).toBe('ARTICLE');
    });

    it('Badge renders a <span> element (appropriate for inline text)', () => {
      const { container } = render(<Badge label="test" />);
      const el = container.firstElementChild!;
      expect(el.tagName).toBe('SPAN');
    });

    it('Section renders a <section> element', () => {
      const { container } = render(<Section>Content</Section>);
      const el = container.firstElementChild!;
      expect(el.tagName).toBe('SECTION');
    });

    it('Container renders a <div> by default', () => {
      const { container } = render(<Container>Content</Container>);
      const el = container.firstElementChild!;
      expect(el.tagName).toBe('DIV');
    });

    it('Container supports custom semantic element via as prop', () => {
      const { container } = render(<Container as="main">Content</Container>);
      const el = container.firstElementChild!;
      expect(el.tagName).toBe('MAIN');
    });

    it.each([1, 2, 3, 4] as const)('Heading level %i renders <h%i>', (level) => {
      const { container } = render(<Heading level={level}>Title</Heading>);
      const el = container.firstElementChild!;
      expect(el.tagName).toBe(`H${level}`);
    });
  });

  describe('Theme support via dark: class variants', () => {
    it('Button has dark: prefixed classes for theme support', () => {
      const { container } = render(<Button>Click</Button>);
      const classes = container.firstElementChild!.className;
      expect(classes).toMatch(/dark:/);
    });

    it('Card has dark: prefixed classes for theme support', () => {
      const { container } = render(<Card>Content</Card>);
      const classes = container.firstElementChild!.className;
      expect(classes).toMatch(/dark:/);
    });

    it('Badge has dark: prefixed classes for theme support', () => {
      const { container } = render(<Badge label="test" />);
      const classes = container.firstElementChild!.className;
      expect(classes).toMatch(/dark:/);
    });

    it('Heading has dark: prefixed classes for theme support', () => {
      const { container } = render(<Heading level={1}>Title</Heading>);
      const classes = container.firstElementChild!.className;
      expect(classes).toMatch(/dark:/);
    });

    it('Button variant classes differ between primary and secondary (theme-aware)', () => {
      const { container: c1 } = render(<Button variant="primary">A</Button>);
      const { container: c2 } = render(<Button variant="secondary">B</Button>);
      const classes1 = c1.firstElementChild!.className;
      const classes2 = c2.firstElementChild!.className;
      expect(classes1).not.toBe(classes2);
      // Both should have dark: classes
      expect(classes1).toMatch(/dark:/);
      expect(classes2).toMatch(/dark:/);
    });

    it('Badge variant classes differ between core and familiar (theme-aware)', () => {
      const { container: c1 } = render(<Badge label="a" variant="core" />);
      const { container: c2 } = render(<Badge label="b" variant="familiar" />);
      const classes1 = c1.firstElementChild!.className;
      const classes2 = c2.firstElementChild!.className;
      expect(classes1).not.toBe(classes2);
      // Both should have dark: classes
      expect(classes1).toMatch(/dark:/);
      expect(classes2).toMatch(/dark:/);
    });
  });
});
