interface BadgeProps {
  label: string;
  variant?: 'core' | 'experienced' | 'familiar' | 'default';
  className?: string;
}

const variantClasses: Record<string, string> = {
  core: 'bg-primary-200 text-primary-900 dark:bg-primary-800/60 dark:text-primary-200 border-primary-300 dark:border-primary-600',
  experienced:
    'bg-accent-green/20 text-accent-green-dark dark:bg-accent-green/30 dark:text-accent-green-light border-accent-green/40 dark:border-accent-green/50',
  familiar:
    'bg-accent-red/15 text-accent-red-dark dark:bg-accent-red/25 dark:text-accent-red-light border-accent-red/35 dark:border-accent-red/45',
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
