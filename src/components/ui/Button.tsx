import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const variantClasses: Record<string, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 focus-visible:ring-primary-500',
  secondary:
    'bg-theme-light-elevated text-theme-light-text-primary hover:bg-theme-light-border-accent dark:bg-theme-dark-elevated dark:text-theme-dark-text-primary dark:hover:bg-theme-dark-border-accent focus-visible:ring-primary-400',
  ghost:
    'bg-transparent text-theme-light-text-secondary hover:bg-theme-light-surface dark:text-theme-dark-text-secondary dark:hover:bg-theme-dark-surface focus-visible:ring-primary-400',
  outline:
    'border border-theme-light-border text-theme-light-text-secondary hover:bg-theme-light-surface dark:border-theme-dark-border dark:text-theme-dark-text-secondary dark:hover:bg-theme-dark-surface focus-visible:ring-primary-400',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  disabled = false,
  children,
  className = '',
  onClick,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-disabled={disabled || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export type { ButtonProps };
