// Validates all animation variants have durations ≤ 500ms

import * as motionVariants from '@/lib/motion';

const MAX_DURATION = 0.5;

// Extract duration from a variant's transition config
function extractDurations(variant: Record<string, unknown>): number[] {
  const durations: number[] = [];

  for (const state of Object.values(variant)) {
    if (state && typeof state === 'object') {
      const s = state as Record<string, unknown>;
      if (s.transition && typeof s.transition === 'object') {
        const t = s.transition as Record<string, unknown>;
        if (typeof t.duration === 'number') {
          durations.push(t.duration);
        }
        if (typeof t.staggerChildren === 'number') {
          durations.push(t.staggerChildren);
        }
      }
    }
  }

  return durations;
}

describe('Property 11: Animation durations do not exceed 500ms', () => {
  const variantEntries = Object.entries(motionVariants);

  it('exports at least one animation variant', () => {
    expect(variantEntries.length).toBeGreaterThan(0);
  });

  it.each(variantEntries)(
    '%s has all durations ≤ 0.5s',
    (_name, variant) => {
      const durations = extractDurations(variant as Record<string, unknown>);

      for (const duration of durations) {
        expect(duration).toBeLessThanOrEqual(MAX_DURATION);
      }
    },
  );
});
