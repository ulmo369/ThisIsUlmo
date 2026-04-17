interface BadgeProps {
  label: string;
  variant?: 'core' | 'experienced' | 'familiar' | 'default';
  className?: string;
}

const variantClasses: Record<string, string> = {
  core: 'bg-primary-100 text-primary-800 dark:bg-primary-800/60 dark:text-primary-200 border-primary-200 dark:border-primary-600',
  experienced:
    'bg-accent-green-bg-light text-accent-green-light dark:bg-accent-green/30 dark:text-accent-green-light border-accent-green-light/30 dark:border-accent-green/50',
  familiar:
    'bg-accent-red-bg-light text-accent-red-light dark:bg-accent-red/25 dark:text-accent-red-light border-accent-red-light/30 dark:border-accent-red/45',
  default:
    'bg-theme-light-surface text-theme-light-text-secondary dark:bg-theme-dark-surface dark:text-theme-dark-text-secondary border-theme-light-border dark:border-theme-dark-border',
};

export default function Badge({
  label,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const baseClasses =
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors';

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  return <span className={classes}>{label}</span>;
}

export type { BadgeProps };
