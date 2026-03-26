import { Link } from 'react-router-dom';
import { navigationItems } from '@/data/navigation';
import { contactInfo } from '@/data/contact';

// Extract display label from i18n key (e.g., 'common.nav.home' → 'Home')
function getDisplayLabel(label: string): string {
  const parts = label.split('.');
  const raw = parts[parts.length - 1];
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-background-light dark:border-gray-800 dark:bg-background-dark">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:items-start">
          {/* Navigation links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {getDisplayLabel(item.label)}
              </Link>
            ))}
          </nav>

          {/* Contact links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${contactInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              Email
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              LinkedIn
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Signature phrase */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Built with precision and passion — Diego Emilio Barrera Hernandez
          </p>
        </div>
      </div>
    </footer>
  );
}
