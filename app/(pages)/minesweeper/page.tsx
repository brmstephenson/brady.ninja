import MinesweeperGame from './minesweeper'

export default function Minesweeper() {
  return (
    <div className="h-full bg-editor-background text-editor-foreground overflow-auto mx-auto">
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Minesweeper</h1>
          <p className="text-editor-accent-2 text-base md:text-lg max-w-2xl">
            Classic minesweeper — left-click to reveal, right-click to flag.
            Clear all non-bomb cells to win.
          </p>
        </div>
        <MinesweeperGame />
      </div>
    </div>
  )
}
