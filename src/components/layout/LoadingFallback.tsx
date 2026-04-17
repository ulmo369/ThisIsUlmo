/** Spinner component used as the Suspense fallback for lazy-loaded pages */
export function LoadingFallback({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex min-h-[50vh] items-center justify-center ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-theme-light-border border-t-primary-500 dark:border-theme-dark-border dark:border-t-primary-400" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
