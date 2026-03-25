import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Heading from '@/components/ui/Heading'
import { Navbar } from '@/components/layout/Navbar'
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton'

export default function ComponentsView() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
      {/* Navbar at top */}
      <Navbar />
      <ScrollToTopButton />

      <div className="pt-20">
        <Section>
          <Container>
            <Heading level={1}>Component Preview</Heading>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
              Vista temporal para verificar componentes
            </p>
          </Container>
        </Section>

        {/* Buttons */}
        <Section>
          <Container>
            <Heading level={2}>Buttons</Heading>
            <Heading level={4} className="mt-4 text-gray-500 dark:text-gray-400">Variants</Heading>
            <div className="mt-2 flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <Heading level={4} className="mt-4 text-gray-500 dark:text-gray-400">Sizes</Heading>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <Heading level={4} className="mt-4 text-gray-500 dark:text-gray-400">States</Heading>
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
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Basic card without hover effect.</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <Badge label="Python" variant="core" />
                  <Badge label="AWS" variant="core" />
                </div>
              </Card>
              <Card hoverable>
                <Heading level={3}>Hoverable Card</Heading>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Hover me for scale + shadow effect.</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  <Badge label="React" variant="experienced" />
                  <Badge label="TypeScript" variant="core" />
                </div>
              </Card>
              <Card hoverable onClick={() => {}}>
                <Heading level={3}>Clickable Card</Heading>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Has button role + tabIndex for a11y.</p>
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
        <Section id="section-demo" className="bg-gray-50 dark:bg-gray-900/50">
          <Container>
            <Heading level={2}>Section + Container</Heading>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              This section has a custom background to show the Section component with an id anchor and className override.
              The Container centers content with max-width and responsive padding.
            </p>
          </Container>
        </Section>

        {/* Scroll spacer */}
        <Section>
          <Container>
            <div className="h-[800px] flex items-center justify-center text-gray-500 dark:text-gray-400">
              <p className="text-center">↓ Scroll down to see the scroll-to-top button appear ↓</p>
            </div>
          </Container>
        </Section>

        {/* Footer placeholder */}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
          <Container>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Footer component will be added in task 5.6
            </p>
          </Container>
        </footer>
      </div>
    </div>
  )
}
