import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function Section({
  id,
  children,
  className = '',
  gradient = false,
}: SectionProps) {
  const baseClasses =
    'py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl';

  const classes = `${baseClasses} ${className}`.trim();

  const gradientStyle = gradient
    ? {
        background:
          'linear-gradient(to bottom, var(--tw-gradient-from, #f8fafc), var(--tw-gradient-to, #f1f5f9))',
      }
    : undefined;

  const gradientClasses = gradient
    ? '[--tw-gradient-from:theme(colors.theme.light.base)] [--tw-gradient-to:theme(colors.theme.light.surface)] dark:[--tw-gradient-from:theme(colors.theme.dark.base)] dark:[--tw-gradient-to:theme(colors.theme.dark.surface)]'
    : '';

  const allClasses = `${classes} ${gradientClasses}`.trim();

  return (
    <section id={id} className={allClasses} style={gradientStyle}>
      {children}
    </section>
  );
}

export type { SectionProps };
