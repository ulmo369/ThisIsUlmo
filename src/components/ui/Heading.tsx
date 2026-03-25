import { type ElementType, type ReactNode } from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
  mono?: boolean;
}

const levelClasses: Record<number, string> = {
  1: 'text-3xl sm:text-4xl md:text-5xl font-bold',
  2: 'text-2xl sm:text-3xl md:text-4xl font-bold',
  3: 'text-xl sm:text-2xl font-semibold',
  4: 'text-lg sm:text-xl font-semibold',
};

export default function Heading({
  level,
  children,
  className = '',
  mono = false,
}: HeadingProps) {
  const Tag = `h${level}` as ElementType;

  const baseClasses =
    'text-gray-900 dark:text-gray-100 tracking-tight';

  const fontClass = mono ? 'font-mono' : '';

  const classes =
    `${baseClasses} ${levelClasses[level]} ${fontClass} ${className}`.trim();

  return <Tag className={classes}>{children}</Tag>;
}

export type { HeadingProps };
