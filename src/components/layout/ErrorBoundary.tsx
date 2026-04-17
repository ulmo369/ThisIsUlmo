import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/** Catches runtime errors in its subtree and renders a friendly fallback UI */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          role="alert"
          className="flex min-h-screen flex-col items-center justify-center gap-6 bg-theme-light-base px-4 text-center dark:bg-theme-dark-base"
        >
          <div className="text-6xl" aria-hidden="true">⚠️</div>
          <h1 className="text-2xl font-bold text-theme-light-text-primary dark:text-theme-dark-text-primary">
            Something went wrong
          </h1>
          <p className="max-w-md text-theme-light-text-secondary dark:text-theme-dark-text-secondary">
            An unexpected error occurred. Please try again or refresh the page.
          </p>
          <button
            onClick={this.handleRetry}
            className="rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
