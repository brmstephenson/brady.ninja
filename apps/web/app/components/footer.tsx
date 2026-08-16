export default function Footer() {
  return (
    <footer className="fixed w-screen bottom-0 left-0 bg-background dark:bg-background-dark flex items-center justify-center gap-3 p-2">
      <p className="text-sm text-muted-foreground">
        Copyright © 2026 Brady Stephenson
      </p>
      <span className="text-muted-foreground/40" aria-hidden>
        ·
      </span>
      <a
        href="https://github.com/brmstephenson/brady.ninja"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Source
      </a>
    </footer>
  )
}
