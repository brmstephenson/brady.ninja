export default function Home() {
  return (
    <div className="p-2 h-full bg-editor-background text-editor-foreground overflow-auto">
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
      <h1 className="text-2xl font-bold">
        {"<Hello, I'm "} <SyntaxHighlightedText>Brady</SyntaxHighlightedText>{' '}
        {'! />'}
      </h1>
      <p>
        {'<'}I&apos;m a <SyntaxHighlightedText>front-end</SyntaxHighlightedText>{' '}
        focused full stack engineer.{' />'}
      </p>
    </div>
  )
}
function SyntaxHighlightedText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-editor-accent-1 dark:text-editor-accent-1-dark">
      {children}
    </span>
  )
}
