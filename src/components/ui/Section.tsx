import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = '',
}: SectionProps) {
  const baseClasses =
    'py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl';

  const classes = `${baseClasses} ${className}`.trim();

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}

export type { SectionProps };
