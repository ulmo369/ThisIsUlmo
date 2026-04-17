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
      className="text-sm font-medium text-theme-light-text-secondary transition-colors hover:text-theme-light-text-primary dark:text-theme-dark-text-secondary dark:hover:text-theme-dark-text-primary"
    >
      {displayLabel}
    </Link>
  );
}

export function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="border-t border-theme-light-border bg-theme-light-base dark:border-theme-dark-border dark:bg-theme-dark-base">
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
              className="text-sm text-theme-light-text-secondary transition-colors hover:text-primary-500 dark:text-theme-dark-text-secondary dark:hover:text-primary-400"
            >
              Email
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-theme-light-text-secondary transition-colors hover:text-primary-500 dark:text-theme-dark-text-secondary dark:hover:text-primary-400"
            >
              LinkedIn
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-theme-light-text-secondary transition-colors hover:text-primary-500 dark:text-theme-dark-text-secondary dark:hover:text-primary-400"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-theme-light-border pt-6 text-center dark:border-theme-dark-border">
          <p className="text-sm text-theme-light-text-muted dark:text-theme-dark-text-muted">
            {t('footer.signature')}
          </p>
        </div>
      </div>
    </footer>
  );
}
