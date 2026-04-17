interface BadgeProps {
  label: string;
  variant?: 'core' | 'experienced' | 'familiar' | 'default';
  className?: string;
}

const variantClasses: Record<string, string> = {
  core: 'bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300 border-primary-200 dark:border-primary-800',
  experienced:
    'bg-accent-green-bg-light text-accent-green-light dark:bg-accent-green-bg-dark dark:text-accent-green-dark border-accent-green-light/30 dark:border-accent-green-dark/40',
  familiar:
    'bg-accent-red-bg-light text-accent-red-light dark:bg-accent-red-bg-dark dark:text-accent-red-dark border-accent-red-light/30 dark:border-accent-red-dark/40',
  default:
    'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700',
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
