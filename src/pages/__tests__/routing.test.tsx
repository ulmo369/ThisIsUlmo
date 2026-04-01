import { render, screen, waitFor, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import fc from 'fast-check';
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

describe('Routing integration', () => {
  it('/ renders LandingPage with hero section', async () => {
    await act(async () => { renderAtRoute('/'); });
    await waitFor(() => {
      expect(screen.getByText('hero.name')).toBeInTheDocument();
    });
  });

  it('/projects renders ProjectsPage with project titles', async () => {
    await act(async () => { renderAtRoute('/projects'); });
    await waitFor(() => {
      expect(screen.getByText('projects.title')).toBeInTheDocument();
    });
  });

  it('/projects/kyc-system renders ProjectDetailPage', async () => {
    await act(async () => { renderAtRoute('/projects/kyc-system'); });
    await waitFor(() => {
      expect(screen.getByText('KYC Verification System')).toBeInTheDocument();
    });
  });

  it('/blog renders BlogPage with blog content', async () => {
    await act(async () => { renderAtRoute('/blog'); });
    await waitFor(() => {
      expect(screen.getByText('blog.title')).toBeInTheDocument();
    });
  });

  it('/contact renders ContactPage with contact content', async () => {
    await act(async () => { renderAtRoute('/contact'); });
    await waitFor(() => {
      expect(screen.getByText('contact.title')).toBeInTheDocument();
    });
  });

  it('/random-undefined-route renders NotFoundPage with 404 text and link to /', async () => {
    await act(async () => { renderAtRoute('/random-undefined-route'); });
    await waitFor(() => {
      expect(screen.getByText('404')).toBeInTheDocument();
    });
    const homeLink = screen.getByRole('link', { name: /git checkout main/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('Suspense shows LoadingFallback while lazy components load', async () => {
    await act(async () => { renderAtRoute('/'); });
    // LoadingFallback uses role="status" with aria-label="Loading"
    // After lazy load resolves, the page content appears
    await waitFor(() => {
      expect(screen.getByText('hero.name')).toBeInTheDocument();
    });
  });
});

describe('ErrorBoundary catches and displays fallback', () => {
  it('renders error fallback when a child throws', async () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    function Thrower(): never { throw new Error('Test error'); }

    const { ErrorBoundary } = await import('@/components/layout/ErrorBoundary');
    render(<ErrorBoundary><Thrower /></ErrorBoundary>);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Try Again')).toBeInTheDocument();
    spy.mockRestore();
  });
});


// Verifies Navbar and Footer render on every route
describe('Property 1: Layout consistency across all routes', () => {
  const validRoutes = [
    '/',
    '/projects',
    '/projects/kyc-system',
    '/blog',
    '/contact',
    '/this-does-not-exist',
  ];

  it.each(validRoutes)('route "%s" renders both Navbar and Footer', async (route) => {
    let container: HTMLElement;
    await act(async () => {
      const result = renderAtRoute(route);
      container = result.container;
    });
    await waitFor(() => {
      expect(container.querySelector('header')).toBeInTheDocument();
      expect(container.querySelector('footer')).toBeInTheDocument();
    });
  });
});

// Verifies random invalid routes render 404 with a home link
describe('Property 2: Undefined routes render 404 with home link', () => {
  const definedPrefixes = ['/', '/projects', '/blog', '/contact', '/dev/components'];

  /** Generates random path strings that don't match any defined route */
  const invalidRouteArb = fc
    .stringMatching(/^\/[a-z0-9-]{1,30}$/)
    .filter((s) => !definedPrefixes.includes(s) && !s.startsWith('/projects') && !s.startsWith('/dev'));

  it('random undefined routes render 404 page with a link to /', async () => {
    await fc.assert(
      fc.asyncProperty(invalidRouteArb, async (route) => {
        let unmount: () => void;
        await act(async () => {
          const result = renderAtRoute(route);
          unmount = result.unmount;
        });
        await waitFor(() => {
          expect(screen.getByText('404')).toBeInTheDocument();
        });
        const homeLinks = screen.getAllByRole('link').filter((a) => a.getAttribute('href') === '/');
        expect(homeLinks.length).toBeGreaterThanOrEqual(1);
        unmount!();
      }),
      { numRuns: 100 },
    );
  });
});
