import { type ElementType, type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  const baseClasses = 'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8';

  const classes = `${baseClasses} ${className}`.trim();

  return <Component className={classes}>{children}</Component>;
}

export type { ContainerProps };
