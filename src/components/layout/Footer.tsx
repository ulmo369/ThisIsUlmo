import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navigationItems } from '@/data/navigation';
import { contactInfo } from '@/data/contact';

// Resolve nav item label via i18n key (e.g., 'common.nav.home' → t('nav.home'))
function useNavLabel(label: string): string {
  const { t } = useTranslation('common');
  const key = label.replace(/^common\./, '');
  return t(key);
}

function FooterNavLink({ item }: { item: { label: string; href: string } }) {
  const displayLabel = useNavLabel(item.label);
  return (
    <Link
      to={item.href}
      className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    >
      {displayLabel}
    </Link>
  );
}

export function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="border-t border-gray-200 bg-background-light dark:border-gray-800 dark:bg-background-dark">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:items-start">
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {navigationItems.map((item) => (
              <FooterNavLink key={item.href} item={item} />
            ))}
          </nav>

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

        <div className="mt-8 border-t border-gray-200 pt-6 text-center dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('footer.signature')}
          </p>
        </div>
      </div>
    </footer>
  );
}
