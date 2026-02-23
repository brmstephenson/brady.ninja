'use client'

import React, { useCallback, useEffect, useState } from 'react'
import {
  Cell,
  fillWithBombs,
  Grid,
  makeGrid,
  updateGridFromClick,
} from './grid'
import WinnerModal from './winner-modal'
import { cn } from '@/app/lib/cn'
import { Smile, Meh, Frown, Laugh, Flag, Bomb } from 'lucide-react'

type Face = 'smile' | 'meh' | 'frown' | 'laugh'

function cellColor(cell: Cell, lost = false) {
  if (cell.flagged && !lost) {
    return 'bg-amber-500 border-amber-600'
  }

  if (cell.bomb && cell.enabled) {
    return 'bg-red-600 border-red-700'
  }

  if (cell.enabled) {
    return 'bg-editor-accent-1/20 border-editor-accent-1/10'
  }

  return 'bg-editor-accent-1 border-editor-accent-1 hover:bg-editor-accent-1/80'
}

function bombCountColor(count: number): string {
  const colors: Record<number, string> = {
    1: 'text-blue-500',
    2: 'text-green-600',
    3: 'text-red-500',
    4: 'text-purple-600',
    5: 'text-amber-700',
    6: 'text-cyan-600',
    7: 'text-gray-700',
    8: 'text-gray-500',
  }
  return colors[count] ?? ''
}

export default function MinesweeperGame() {
  const [grid, setGrid] = useState<Grid>(makeGrid(9))
  const [flagsLeft, setFlagsLeft] = useState(10)
  const [face, setFace] = useState<Face>('smile')
  const [lost, setLost] = useState(false)
  const [time, setTime] = useState(0)
  const [intervalState, setIntervalState] = useState<NodeJS.Timeout>()
  const [winnerModalOpen, setWinnerModalOpen] = useState(false)

  function startTimer() {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)

    setIntervalState(interval)
  }

  const handleClick = useCallback(
    (rowIndex: number, colIndex: number) => {
      if (lost) return

      if (!grid.some((row) => row.some((cell) => cell.bomb))) {
        startTimer()
        fillWithBombs(10, grid, { row: rowIndex, col: colIndex })
      }

      if (grid[rowIndex][colIndex].bomb) {
        clearInterval(intervalState)
        setFace('frown')
        setLost(true)
      }

      setGrid((prev) => updateGridFromClick(prev, prev[rowIndex][colIndex]))
    },
    [grid, intervalState, lost]
  )

  const handleRightClick = (
    event: React.MouseEvent<HTMLDivElement>,
    rowIndex: number,
    colIndex: number
  ) => {
    event.preventDefault()

    if (
      grid[rowIndex][colIndex].enabled ||
      lost ||
      (flagsLeft === 0 && !grid[rowIndex][colIndex].flagged)
    ) {
      return
    }

    if (grid[rowIndex][colIndex].flagged) {
      setFlagsLeft((prev) => prev + 1)
    } else {
      setFlagsLeft((prev) => prev - 1)
    }

    setGrid((prev) => {
      return prev.map((row: Cell[], rIndex: number) =>
        row.map((cell: Cell, cIndex: number) => {
          if (rIndex === rowIndex && cIndex === colIndex) {
            return { ...cell, flagged: !cell.flagged }
          }
          return cell
        })
      )
    })
  }

  function resetGame() {
    clearInterval(intervalState)
    setGrid(makeGrid(9))
    setFlagsLeft(10)
    setFace('smile')
    setLost(false)
    setWinnerModalOpen(false)
    setTime(0)
  }

  useEffect(() => {
    if (
      !lost &&
      grid.every((row) => row.every((cell) => cell.enabled || cell.bomb))
    ) {
      clearInterval(intervalState)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFace('laugh')
      setWinnerModalOpen(true)
    }
  }, [grid, intervalState, lost])

  return (
    <div className="flex flex-col items-center gap-4">
      <WinnerModal
        score={time}
        open={winnerModalOpen}
        setOpen={setWinnerModalOpen}
      />

      <div className="h-8 flex items-center justify-center">
        {lost && <p className="text-red-500 font-bold text-lg">You lose!</p>}
      </div>

      <div className="flex flex-col items-center">
        <div className="flex justify-between items-center bg-editor-accent-1 border-2 border-editor-accent-1 border-b-0 rounded-t-lg w-full">
          <div className="bg-editor-background flex items-center justify-center text-editor-foreground font-mono font-extrabold text-2xl px-3 py-1 m-2 rounded min-w-[60px]">
            {flagsLeft}
          </div>
          <div className="flex justify-center items-center">
            <button
              className="w-10 h-10 rounded-full bg-editor-background hover:scale-110 transition-transform flex items-center justify-center relative cursor-pointer"
              onClick={resetGame}
              onMouseDown={() => setFace('meh')}
              onMouseUp={() => setFace('smile')}
            >
              <Smile
                className={cn(
                  'w-8 h-8 text-yellow-400 absolute',
                  face !== 'smile' && 'invisible'
                )}
              />
              <Meh
                className={cn(
                  'w-8 h-8 text-yellow-400 absolute',
                  face !== 'meh' && 'invisible'
                )}
              />
              <Frown
                className={cn(
                  'w-8 h-8 text-red-400 absolute',
                  face !== 'frown' && 'invisible'
                )}
              />
              <Laugh
                className={cn(
                  'w-8 h-8 text-green-400 absolute',
                  face !== 'laugh' && 'invisible'
                )}
              />
            </button>
          </div>
          <div className="bg-editor-background flex items-center justify-center text-editor-foreground font-mono font-extrabold text-2xl px-3 py-1 m-2 rounded min-w-[60px]">
            {time}
          </div>
        </div>

        <div className="grid grid-cols-9 grid-rows-9 border-2 border-editor-accent-1 rounded-b-lg overflow-hidden">
          {grid?.map((row: Cell[], rowIndex: number) =>
            row?.map((cell: Cell, colIndex: number) => (
              <div
                className={cn(
                  'w-9 h-9 border flex items-center justify-center cursor-pointer select-none text-sm font-bold transition-colors',
                  cellColor(cell, lost)
                )}
                onClick={() => handleClick(rowIndex, colIndex)}
                onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
                onContextMenuCapture={(e) => e.preventDefault()}
                key={`${rowIndex}-${colIndex}`}
              >
                {cell.flagged && !cell.enabled && !lost && (
                  <Flag className="w-5 h-5 text-red-600" />
                )}
                {!cell.bomb && cell.surroundingBombs > 0 && cell.enabled && (
                  <span className={bombCountColor(cell.surroundingBombs)}>
                    {cell.surroundingBombs}
                  </span>
                )}
                {cell.bomb && cell.enabled && <Bomb className="w-5 h-5 text-gray-900" />}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
