import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Heading from '@/components/ui/Heading'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton'
import { LoadingFallback } from '@/components/layout/LoadingFallback'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'
import PersonalSection from '@/components/sections/PersonalSection'
import PalettePreview from '@/pages/PalettePreview'

export default function ComponentsView() {
  return (
    <div className="min-h-screen bg-theme-light-base dark:bg-theme-dark-base text-theme-light-text-primary dark:text-theme-dark-text-primary">
      {/* Navbar at top */}
      <Navbar />
      <ScrollToTopButton />

      <div className="pt-20">
        <PalettePreview />

        <Section>
          <Container>
            <Heading level={1}>Component Preview</Heading>
            <p className="mt-2 text-theme-light-text-muted dark:text-theme-dark-text-muted text-sm">
              Vista temporal para verificar componentes
            </p>
          </Container>
        </Section>

        {/* Buttons */}
        <Section>
          <Container>
            <Heading level={2}>Buttons</Heading>
            <Heading level={4} className="mt-4 text-theme-light-text-muted dark:text-theme-dark-text-muted">Variants</Heading>
            <div className="mt-2 flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <Heading level={4} className="mt-4 text-theme-light-text-muted dark:text-theme-dark-text-muted">Sizes</Heading>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <Heading level={4} className="mt-4 text-theme-light-text-muted dark:text-theme-dark-text-muted">States</Heading>
            <div className="mt-2 flex flex-wrap gap-3">
              <Button href="https://example.com" external>External Link</Button>
              <Button disabled>Disabled</Button>
            </div>
          </Container>
        </Section>

        {/* Badges */}
        <Section>
          <Container>
            <Heading level={2}>Badges</Heading>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge label="Python" variant="core" />
              <Badge label="C++" variant="core" />
              <Badge label="AWS" variant="core" />
              <Badge label="TypeScript" variant="core" />
              <Badge label="React" variant="experienced" />
              <Badge label="Node.js" variant="experienced" />
              <Badge label="Rust" variant="familiar" />
              <Badge label="Docker" variant="default" />
            </div>
          </Container>
        </Section>

        {/* Cards */}
        <Section>
          <Container>
            <Heading level={2}>Cards</Heading>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <Heading level={3}>Static Card</Heading>
                <p className="mt-2 text-theme-light-text-secondary dark:text-theme-dark-text-secondary text-sm">Basic card without hover effect.</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <Badge label="Python" variant="core" />
                  <Badge label="AWS" variant="core" />
                </div>
              </Card>
              <Card hoverable>
                <Heading level={3}>Hoverable Card</Heading>
                <p className="mt-2 text-theme-light-text-secondary dark:text-theme-dark-text-secondary text-sm">Hover me for scale + shadow effect.</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <Badge label="React" variant="experienced" />
                  <Badge label="TypeScript" variant="core" />
                </div>
              </Card>
              <Card hoverable onClick={() => {}}>
                <Heading level={3}>Clickable Card</Heading>
                <p className="mt-2 text-theme-light-text-secondary dark:text-theme-dark-text-secondary text-sm">Has button role + tabIndex for a11y.</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <Badge label="Rust" variant="familiar" />
                  <Badge label="Docker" variant="default" />
                </div>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Headings */}
        <Section>
          <Container>
            <Heading level={2}>Headings</Heading>
            <div className="mt-4 space-y-3">
              <Heading level={1}>Heading Level 1</Heading>
              <Heading level={2}>Heading Level 2</Heading>
              <Heading level={3}>Heading Level 3</Heading>
              <Heading level={4}>Heading Level 4</Heading>
              <Heading level={2} mono>Mono Heading</Heading>
              <Heading level={3} mono>Mono Level 3</Heading>
            </div>
          </Container>
        </Section>

        {/* Section + Container demo */}
        <Section id="section-demo" className="bg-theme-light-surface dark:bg-theme-dark-surface">
          <Container>
            <Heading level={2}>Section + Container</Heading>
            <p className="mt-2 text-theme-light-text-secondary dark:text-theme-dark-text-secondary text-sm">
              This section has a custom background to show the Section component with an id anchor and className override.
              The Container centers content with max-width and responsive padding.
            </p>
          </Container>
        </Section>

        {/* Loading Fallback */}
        <Section>
          <Container>
            <Heading level={2}>Loading Fallback</Heading>
            <p className="mt-2 text-theme-light-text-secondary dark:text-theme-dark-text-secondary text-sm">Spinner used as Suspense fallback for lazy-loaded pages.</p>
            <div className="mt-4 rounded-xl border border-theme-light-border dark:border-theme-dark-border p-8">
              <LoadingFallback />
            </div>
          </Container>
        </Section>

        {/* Error Boundary Fallback (static preview) */}
        <Section>
          <Container>
            <Heading level={2}>Error Boundary Fallback</Heading>
            <p className="mt-2 text-theme-light-text-secondary dark:text-theme-dark-text-secondary text-sm">Friendly error state shown when a runtime error is caught.</p>
            <div className="mt-4 rounded-xl border border-theme-light-border dark:border-theme-dark-border p-8">
              <div className="flex flex-col items-center justify-center gap-6 text-center">
                <div className="text-6xl" aria-hidden="true">⚠️</div>
                <h3 className="text-2xl font-bold text-theme-light-text-primary dark:text-theme-dark-text-primary">Something went wrong</h3>
                <p className="max-w-md text-theme-light-text-secondary dark:text-theme-dark-text-secondary">An unexpected error occurred. Please try again or refresh the page.</p>
                <button className="rounded-lg bg-primary-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400">
                  Try Again
                </button>
              </div>
            </div>
          </Container>
        </Section>

        {/* === Landing Page Sections Preview === */}
        <Section className="bg-theme-light-surface dark:bg-theme-dark-surface">
          <Container>
            <Heading level={2}>Landing Page Sections</Heading>
            <p className="mt-2 text-theme-light-text-secondary dark:text-theme-dark-text-secondary text-sm">Preview of all landing page sections below.</p>
          </Container>
        </Section>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <PersonalSection />
        <ContactSection />

        {/* Scroll spacer */}
        <Section>
          <Container>
            <div className="h-[600px] flex items-center justify-center text-theme-light-text-muted dark:text-theme-dark-text-muted">
              <p className="text-center">↓ Scroll down to see the scroll-to-top button ↓</p>
            </div>
          </Container>
        </Section>
      </div>

      {/* Real Footer component */}
      <Footer />
    </div>
  )
}
