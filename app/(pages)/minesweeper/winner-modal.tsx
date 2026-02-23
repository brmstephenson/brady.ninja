'use client'

import { useState } from 'react'

interface WinnerModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  score: number
}

export default function WinnerModal({
  score,
  open,
  setOpen,
}: WinnerModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-editor-background border-2 border-editor-accent-1 p-6 rounded-lg text-editor-foreground w-96 shadow-xl">
        <div className="flex justify-end">
          <button
            className="flex justify-center items-center w-8 h-8 rounded-full transition-colors hover:bg-editor-accent-1/20 text-editor-accent-2"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="flex justify-center text-2xl font-extrabold text-editor-accent-1">
            You win!
          </h2>
          <p className="flex justify-center text-editor-accent-2 pb-8">
            Your time: {score}s
          </p>
          {/* <WinnerForm score={score} setOpen={setOpen} /> */}
        </div>
      </div>
    </div>
  )
}

interface WinnerFormProps {
  score: number
  setOpen: (open: boolean) => void
}

function WinnerForm({ score, setOpen }: WinnerFormProps) {
  const [name, setName] = useState('')

  async function saveScore() {
    // TODO: Wire up API call to save high score
    // try {
    //   await saveHighScore(name, score)
    //   setName('')
    //   setOpen(false)
    // } catch (e) {
    //   console.error('Error saving high score', e)
    // }
    console.log('Score saved (stubbed):', { name, score })
    setName('')
    setOpen(false)
  }

  return (
    <>
      <p className="flex justify-center text-editor-accent-2">
        Would you like to post your score?
      </p>
      <h4 className="flex justify-center items-center text-xl font-mono text-editor-accent-1">
        {score}s
      </h4>
      <div>
        <div className="flex gap-2 items-center justify-center">
          <label className="text-editor-accent-2">Name:</label>
          <input
            className="bg-editor-background text-editor-foreground p-2 rounded border border-editor-accent-1 focus:outline-none focus:ring-1 focus:ring-editor-accent-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex justify-end w-full pt-4">
          <button
            className="bg-editor-accent-1 hover:bg-editor-accent-1/80 transition-colors text-editor-accent-1-foreground rounded px-4 py-1 font-medium"
            onClick={saveScore}
          >
            Save
          </button>
        </div>
      </div>
    </>
  )
}
