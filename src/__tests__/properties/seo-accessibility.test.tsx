// Validates SEO metadata completeness/uniqueness and accessibility attributes on images and icon-only elements

import { render, waitFor, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { seoData } from '@/data/seo';
import App from '@/App';

vi.mock('react-i18next', () => ({
  useTranslation: (ns?: string) => ({
    t: (key: string) => (ns ? `${ns}.${key}` : key),
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
  initReactI18next: { type: '3rdParty', init: vi.fn() },
}));

vi.mock('@/lib/ThemeProvider', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useThemeContext: () => ({ theme: 'dark' as const, toggleTheme: vi.fn() }),
}));

describe('Property 13: SEO metadata completeness and uniqueness per route', () => {
  const routes = Object.keys(seoData);

  it('seoData has at least one route entry', () => {
    expect(routes.length).toBeGreaterThan(0);
  });

  it.each(routes)('route "%s" has all required non-empty SEO fields', (route) => {
    const meta = seoData[route];

    expect(meta.title).toBeTruthy();
    expect(meta.description).toBeTruthy();
    expect(meta.ogTitle).toBeTruthy();
    expect(meta.ogDescription).toBeTruthy();
    expect(meta.ogImage).toBeTruthy();
    expect(meta.ogUrl).toBeTruthy();
  });

  it('all route titles are unique', () => {
    const titles = routes.map((r) => seoData[r].title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);
  });
});

/** Renders the App at a given route inside all required providers */
function renderAtRoute(route: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe('Property 14: Accessibility attributes on images and icon-only elements', () => {
  const testRoutes = ['/', '/projects/kyc-system'];

  it.each(testRoutes)(
    'route "%s": every <img> has a non-empty alt attribute',
    async (route) => {
      let container: HTMLElement;
      await act(async () => {
        const result = renderAtRoute(route);
        container = result.container;
      });

      await waitFor(() => {
        const images = container.querySelectorAll('img');
        for (const img of images) {
          const alt = img.getAttribute('alt');
          expect(alt).toBeTruthy();
        }
      });
    },
  );

  it.each(testRoutes)(
    'route "%s": every icon-only interactive element has a non-empty aria-label',
    async (route) => {
      let container: HTMLElement;
      await act(async () => {
        const result = renderAtRoute(route);
        container = result.container;
      });

      await waitFor(() => {
        const buttons = container.querySelectorAll('button');
        for (const button of buttons) {
          const hasVisibleText = button.textContent?.trim().replace(/\s/g, '');
          const hasSvg = button.querySelector('svg');

          // Icon-only: contains an SVG but no meaningful visible text
          if (hasSvg && !hasVisibleText) {
            const ariaLabel = button.getAttribute('aria-label');
            expect(ariaLabel).toBeTruthy();
          }
        }

        const links = container.querySelectorAll('a');
        for (const link of links) {
          const hasVisibleText = link.textContent?.trim().replace(/\s/g, '');
          const hasSvg = link.querySelector('svg');

          if (hasSvg && !hasVisibleText) {
            const ariaLabel = link.getAttribute('aria-label');
            expect(ariaLabel).toBeTruthy();
          }
        }
      });
    },
  );
});
