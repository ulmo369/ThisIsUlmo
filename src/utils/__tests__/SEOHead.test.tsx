import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, afterEach } from 'vitest';
import SEOHead from '../SEOHead';

function renderSEO(props: Parameters<typeof SEOHead>[0]) {
  return render(
    <HelmetProvider>
      <SEOHead {...props} />
    </HelmetProvider>,
  );
}

afterEach(() => {
  document.title = '';
  document.head.querySelectorAll('meta').forEach((el) => el.remove());
});

describe('SEOHead', () => {
  it('renders title and description meta tags', async () => {
    renderSEO({ title: 'Test Page', description: 'A test description' });

    await waitFor(() => {
      expect(document.title).toBe('Test Page');
    });
    const desc = document.querySelector('meta[name="description"]');
    expect(desc?.getAttribute('content')).toBe('A test description');
  });

  it('renders Open Graph title, description, and type', async () => {
    renderSEO({ title: 'OG Test', description: 'OG description' });

    await waitFor(() => {
      expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe('OG Test');
    });
    expect(document.querySelector('meta[property="og:description"]')?.getAttribute('content')).toBe('OG description');
    expect(document.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe('website');
  });

  it('renders og:image when provided', async () => {
    renderSEO({ title: 'With Image', description: 'desc', ogImage: 'https://example.com/image.png' });

    await waitFor(() => {
      expect(document.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe('https://example.com/image.png');
    });
  });

  it('renders og:url when provided', async () => {
    renderSEO({ title: 'With URL', description: 'desc', ogUrl: 'https://example.com/page' });

    await waitFor(() => {
      expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe('https://example.com/page');
    });
  });

  it('omits og:image when not provided', async () => {
    renderSEO({ title: 'No Image', description: 'desc' });

    await waitFor(() => {
      expect(document.title).toBe('No Image');
    });
    expect(document.querySelector('meta[property="og:image"]')).toBeNull();
  });

  it('omits og:url when not provided', async () => {
    renderSEO({ title: 'No URL', description: 'desc' });

    await waitFor(() => {
      expect(document.title).toBe('No URL');
    });
    expect(document.querySelector('meta[property="og:url"]')).toBeNull();
  });
});
