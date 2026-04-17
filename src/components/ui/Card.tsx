import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  hoverable = false,
  onClick,
}: CardProps) {
  const baseClasses =
    'rounded-xl border bg-theme-light-surface dark:bg-theme-dark-surface border-theme-light-border dark:border-theme-dark-border p-4 sm:p-6 transition-all duration-200';

  const hoverClasses = hoverable
    ? 'hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-primary-500/10 cursor-pointer'
    : '';

  const classes = `${baseClasses} ${hoverClasses} ${className}`.trim();

  return (
    <article className={classes} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      {children}
    </article>
  );
}

export type { CardProps };
