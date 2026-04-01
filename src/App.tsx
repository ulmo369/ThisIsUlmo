import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from '@/components/layout/ErrorBoundary'
import { AppLayout } from '@/components/layout/AppLayout'
import { LoadingFallback } from '@/components/layout/LoadingFallback'

const LandingPage = lazy(() => import('@/pages/LandingPage'))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const ComponentsView = lazy(() => import('@/pages/ComponentsView'))

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/dev/components" element={<ComponentsView />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
