import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/** ASCII art terminal frame for the 404 visual */
const asciiArt = `
  $ git checkout page
  error: pathspec 'page' did not
  match any file(s) known to git

  $ find / -name "this-page"
  No results found.

  $ sudo !!
  Nice try.
`;

/** Animated terminal cursor blink */
const cursorVariants = {
  blink: {
    opacity: [1, 0, 1],
    transition: { duration: 1, repeat: Infinity, ease: 'linear' as const },
  },
};

/** Staggered entrance for content blocks */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

/** Creative developer-themed 404 page */
export default function NotFoundPage() {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center gap-8 py-12 sm:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8 w-full"
        >
          {/* 404 heading */}
          <motion.div variants={itemVariants}>
            <span className="text-7xl sm:text-9xl font-bold font-mono text-primary-500 dark:text-primary-400 select-none">
              404
            </span>
          </motion.div>

          {/* Developer-themed message */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-light-text-primary dark:text-theme-dark-text-primary">
              This page got lost in a merge conflict
            </h1>
            <p className="text-theme-light-text-muted dark:text-theme-dark-text-muted text-sm sm:text-base">
              Looks like this branch was never pushed to production.
            </p>
          </motion.div>

          {/* Animated ASCII terminal */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-md rounded-lg border border-theme-light-border dark:border-theme-dark-border bg-theme-light-surface dark:bg-theme-dark-surface overflow-hidden shadow-lg"
          >
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-theme-light-elevated dark:bg-theme-dark-elevated border-b border-theme-light-border dark:border-theme-dark-border">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-theme-light-text-muted dark:text-theme-dark-text-muted font-mono">
                ~/portfolio
              </span>
            </div>
            {/* Terminal body */}
            <div className="p-4 text-left">
              <pre className="font-mono text-xs sm:text-sm text-theme-light-text-secondary dark:text-theme-dark-text-secondary whitespace-pre leading-relaxed">
                {asciiArt}
              </pre>
              <span className="font-mono text-xs sm:text-sm text-theme-light-text-secondary dark:text-theme-dark-text-secondary">
                ${' '}
              </span>
              <motion.span
                variants={cursorVariants}
                animate="blink"
                className="inline-block w-2 h-4 bg-primary-500 dark:bg-primary-400 align-middle"
              />
            </div>
          </motion.div>

          {/* CTA back to home */}
          <motion.div variants={itemVariants}>
            <Link to="/">
              <Button variant="primary" size="lg">
                git checkout main
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
