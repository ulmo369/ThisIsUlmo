import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useThemeContext } from '@/lib/ThemeProvider';
import { navigationItems } from '@/data/navigation';

// Sun icon for light mode indicator
function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

// Moon icon for dark mode indicator
function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

// Hamburger icon for mobile menu
function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

// Close icon for mobile menu
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Extract display label from i18n key (e.g., 'common.nav.home' → 'Home')
function getDisplayLabel(label: string): string {
  const parts = label.split('.');
  const raw = parts[parts.length - 1];
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

export function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'en' | 'es'>('en');
  const location = useLocation();

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-background-light/80 backdrop-blur-md dark:border-gray-800 dark:bg-background-dark/80">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:py-5">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          onClick={closeMobileMenu}
        >
          Portfolio
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-base font-medium transition-colors ${
                isActiveRoute(item.href)
                  ? 'text-primary-500 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {getDisplayLabel(item.label)}
            </Link>
          ))}
        </div>

        {/* Desktop toggles */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-lg p-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${currentLang === 'en' ? 'Spanish' : 'English'}`}
            className="rounded-lg px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {currentLang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden rounded-lg p-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {mobileMenuOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <HamburgerIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark">
          <div className="flex flex-col px-4 py-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeMobileMenu}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActiveRoute(item.href)
                    ? 'bg-primary-500/10 text-primary-500 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {getDisplayLabel(item.label)}
              </Link>
            ))}

            <div className="flex items-center gap-2 border-t border-gray-200 dark:border-gray-800 pt-3 mt-2">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="rounded-lg p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={toggleLanguage}
                aria-label={`Switch to ${currentLang === 'en' ? 'Spanish' : 'English'}`}
                className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {currentLang === 'en' ? 'ES' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
