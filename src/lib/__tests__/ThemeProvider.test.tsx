import { render, screen, renderHook } from '@testing-library/react';
import { ThemeProvider, useThemeContext } from '../ThemeProvider';

describe('ThemeProvider', () => {
  it('provides theme context to children', () => {
    function Consumer() {
      const { theme } = useThemeContext();
      return <div>Theme: {theme}</div>;
    }
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>,
    );
    expect(screen.getByText(/Theme:/)).toBeInTheDocument();
  });

  it('useThemeContext throws when used outside ThemeProvider', () => {
    expect(() => {
      renderHook(() => useThemeContext());
    }).toThrow('useThemeContext must be used within a ThemeProvider');
  });
});
