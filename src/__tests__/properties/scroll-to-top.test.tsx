// Validates scroll-to-top button visibility based on scroll position threshold

import { render, act, waitFor } from '@testing-library/react';
import fc from 'fast-check';
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton';

/** Sets window.scrollY and dispatches a scroll event inside act() */
function simulateScroll(y: number) {
  Object.defineProperty(window, 'scrollY', { value: y, writable: true, configurable: true });
  act(() => {
    window.dispatchEvent(new Event('scroll'));
  });
}

describe('Property 12: Scroll-to-top button visibility threshold', () => {
  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true });
  });

  it('button is visible ↔ scroll position > 300 for any position in [0, 10000]', async () => {
    await fc.assert(
      fc.asyncProperty(fc.integer({ min: 0, max: 10000 }), async (scrollY) => {
        // Set scroll position before render so initial useState picks it up
        Object.defineProperty(window, 'scrollY', { value: scrollY, writable: true, configurable: true });

        const { queryByLabelText, unmount } = render(<ScrollToTopButton />);

        // Dispatch scroll to ensure hook state is in sync
        simulateScroll(scrollY);

        if (scrollY > 300) {
          await waitFor(() => {
            expect(queryByLabelText('Scroll to top')).toBeInTheDocument();
          });
        } else {
          await waitFor(() => {
            expect(queryByLabelText('Scroll to top')).not.toBeInTheDocument();
          });
        }

        unmount();
      }),
      { numRuns: 200 },
    );
  });
});
