// Verifies theme preference round-trip: toggle → localStorage → HTML class

import { render, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import { ThemeProvider, useThemeContext } from '@/lib/ThemeProvider';
import type { ThemeContext } from '@/types';

/** Test harness that exposes theme context via ref */
function ThemeConsumer({ ctxRef }: { ctxRef: React.MutableRefObject<ThemeContext | null> }) {
  const ctx = useThemeContext();
  ctxRef.current = ctx;
  return null;
}

function renderWithProviders(ctxRef: React.MutableRefObject<ThemeContext | null>) {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        <ThemeConsumer ctxRef={ctxRef} />
      </ThemeProvider>
    </BrowserRouter>,
  );
}

describe('Property 7: Theme preference round-trip persistence', () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('for each theme value, toggling persists to localStorage and applies the correct HTML class', async () => {
    await fc.assert(
      fc.asyncProperty(fc.constantFrom('dark' as const, 'light' as const), async (targetTheme) => {
        localStorage.clear();
        document.documentElement.classList.remove('dark');

        const ctxRef: React.MutableRefObject<ThemeContext | null> = { current: null };
        const { unmount } = renderWithProviders(ctxRef);

        // Toggle to reach the target theme (toggle writes to localStorage)
        act(() => {
          // If already on target, toggle away first then back
          if (ctxRef.current!.theme === targetTheme) {
            ctxRef.current!.toggleTheme();
          }
          // Now toggle to reach the target
          ctxRef.current!.toggleTheme();
        });

        expect(ctxRef.current!.theme).toBe(targetTheme);

        // Verify localStorage matches the target theme
        expect(localStorage.getItem('theme')).toBe(targetTheme);

        // Verify the dark class on <html> matches the theme
        const hasDarkClass = document.documentElement.classList.contains('dark');
        if (targetTheme === 'dark') {
          expect(hasDarkClass).toBe(true);
        } else {
          expect(hasDarkClass).toBe(false);
        }

        unmount();
      }),
      { numRuns: 100 },
    );
  });
});
