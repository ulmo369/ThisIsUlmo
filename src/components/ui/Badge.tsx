interface BadgeProps {
  label: string;
  variant?: 'core' | 'experienced' | 'familiar' | 'default';
  className?: string;
}

const variantClasses: Record<string, string> = {
  core: 'bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300 border-primary-200 dark:border-primary-800',
  experienced:
    'bg-accent-green/10 text-accent-green-dark dark:bg-accent-green/20 dark:text-accent-green-light border-accent-green/30 dark:border-accent-green/40',
  familiar:
    'bg-accent-red/10 text-accent-red-dark dark:bg-accent-red/20 dark:text-accent-red-light border-accent-red/30 dark:border-accent-red/40',
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
