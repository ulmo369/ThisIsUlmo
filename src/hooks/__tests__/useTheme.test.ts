import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('defaults to dark when no localStorage and no system preference', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('dark');
  });

  it('reads theme from localStorage', () => {
    localStorage.setItem('theme', 'light');
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('light');
  });

  it('ignores invalid localStorage values', () => {
    localStorage.setItem('theme', 'invalid-value');
    const { result } = renderHook(() => useTheme());
    // Should fall through to system preference or dark
    expect(['dark', 'light']).toContain(result.current.theme);
  });

  it('toggles from dark to light', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('toggles from light to dark', () => {
    localStorage.setItem('theme', 'light');
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('applies dark class to html element', () => {
    const { result } = renderHook(() => useTheme());
    // Dark mode should add 'dark' class
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    // Toggle to light should remove it
    act(() => {
      result.current.toggleTheme();
    });
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('handles localStorage being unavailable', () => {
    const getItemSpy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('localStorage unavailable');
    });
    const { result } = renderHook(() => useTheme());
    // Should fall back to system preference or dark
    expect(['dark', 'light']).toContain(result.current.theme);
    getItemSpy.mockRestore();
  });

  it('handles localStorage setItem failure gracefully', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('localStorage unavailable');
    });
    const { result } = renderHook(() => useTheme());
    // Should not throw when toggling
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('light');
    setItemSpy.mockRestore();
  });

  it('respects prefers-color-scheme: light', () => {
    // Override matchMedia to simulate light preference
    const original = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation(
      (query: string) =>
        ({
          matches: query === '(prefers-color-scheme: light)',
          media: query,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          addListener: vi.fn(),
          removeListener: vi.fn(),
          onchange: null,
          dispatchEvent: vi.fn(),
        }) as MediaQueryList,
    );
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('light');
    window.matchMedia = original;
  });
});
