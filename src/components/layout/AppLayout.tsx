import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton';

/** Root layout wrapping all routes with persistent navigation and footer */
export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-theme-light-base dark:bg-theme-dark-base">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
