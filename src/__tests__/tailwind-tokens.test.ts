/**
 * Tailwind config smoke tests.
 *
 * Validates: Requirements 2.1–2.6, 3.1–3.5, 4.1, 4.2
 *
 * Imports the Tailwind config and asserts every semantic token hex value
 * matches the spec.
 */
import config from '../../tailwind.config';

const colors = config.theme!.extend!.colors as Record<string, unknown>;
const dark = (colors.theme as Record<string, Record<string, string>>).dark;
const light = (colors.theme as Record<string, Record<string, string>>).light;
const accentGreen = colors['accent-green'] as Record<string, string>;
const accentRed = colors['accent-red'] as Record<string, string>;

describe('Dark mode tokens', () => {
  it('base is #0f0f1a', () => expect(dark.base).toBe('#0f0f1a'));
  it('surface is #1a1a2e', () => expect(dark.surface).toBe('#1a1a2e'));
  it('elevated is #25254a', () => expect(dark.elevated).toBe('#25254a'));
  it('overlay is #232b3d', () => expect(dark.overlay).toBe('#232b3d'));
  it('border is #2d2d5e', () => expect(dark.border).toBe('#2d2d5e'));
  it('border-accent is #3d3d7a', () => expect(dark['border-accent']).toBe('#3d3d7a'));
  it('text-primary is #e2e8f0', () => expect(dark['text-primary']).toBe('#e2e8f0'));
  it('text-body is #cbd5e1', () => expect(dark['text-body']).toBe('#cbd5e1'));
  it('text-secondary is #94a3b8', () => expect(dark['text-secondary']).toBe('#94a3b8'));
  it('text-muted is #64748b', () => expect(dark['text-muted']).toBe('#64748b'));
});

describe('Light mode tokens', () => {
  it('base is #eeeceb', () => expect(light.base).toBe('#eeeceb'));
  it('surface is #e0dedc', () => expect(light.surface).toBe('#e0dedc'));
  it('elevated is #d1cfcd', () => expect(light.elevated).toBe('#d1cfcd'));
  it('border is #d1cfcd', () => expect(light.border).toBe('#d1cfcd'));
  it('border-accent is #a8a29e', () => expect(light['border-accent']).toBe('#a8a29e'));
  it('text-primary is #1c1917', () => expect(light['text-primary']).toBe('#1c1917'));
  it('text-secondary is #57534e', () => expect(light['text-secondary']).toBe('#57534e'));
  it('text-muted is #a8a29e', () => expect(light['text-muted']).toBe('#a8a29e'));
});

describe('Accent tokens', () => {
  it('accent-green DEFAULT is #4a5d23', () => expect(accentGreen.DEFAULT).toBe('#4a5d23'));
  it('accent-green light is #6b7f3a', () => expect(accentGreen.light).toBe('#6b7f3a'));
  it('accent-green dark is #3a4a1b', () => expect(accentGreen.dark).toBe('#3a4a1b'));

  it('accent-red DEFAULT is #722f37', () => expect(accentRed.DEFAULT).toBe('#722f37'));
  it('accent-red light is #8b3a44', () => expect(accentRed.light).toBe('#8b3a44'));
  it('accent-red dark is #5a252c', () => expect(accentRed.dark).toBe('#5a252c'));
});
