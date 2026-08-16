export interface Cell {
  bomb: boolean
  surroundingBombs: number
  flagged: boolean
  marked: boolean
  enabled: boolean
  rowIndex: number
  colIndex: number
  connected?: boolean
}

export interface Coordinates {
  col: number
  row: number
}

interface Coordinate {
  col: number
  row: number
}

export type Grid = Cell[][]

export function getSurroundingCoordinates(
  coordinate: Coordinate
): Coordinate[] {
  return [
    { row: coordinate.row - 1, col: coordinate.col - 1 },
    { row: coordinate.row, col: coordinate.col - 1 },
    { row: coordinate.row + 1, col: coordinate.col - 1 },
    { row: coordinate.row - 1, col: coordinate.col },
    { row: coordinate.row + 1, col: coordinate.col },
    { row: coordinate.row - 1, col: coordinate.col + 1 },
    { row: coordinate.row, col: coordinate.col + 1 },
    { row: coordinate.row + 1, col: coordinate.col + 1 },
  ]
}

export function fillWithBombs(
  bombSize: number,
  grid: Grid,
  firstClickedCoordinate: Coordinate
) {
  const bombs = new Array(bombSize).fill({ row: -1, col: -1 }) as [Coordinate]

  bombs.forEach(
    (_, i) =>
      (bombs[i] = getRandomCoordinates(
        grid.length - 1,
        bombs,
        firstClickedCoordinate
      ))
  )

  bombs.forEach((coordinate) => {
    grid[coordinate.row][coordinate.col].bomb = true
  })

  fillSurroundingBombsNumbers(bombs, grid)
}

export function makeGrid(gridSize: number): Grid {
  const rows = Array.from({ length: gridSize })
  return rows.map((_r, rowIndex) =>
    Array.from({ length: gridSize }).map((_cell, colIndex) => ({
      ...defaultCellValue,
      rowIndex,
      colIndex,
    }))
  ) as Grid
}

export function updateGridFromClick(grid: Grid, clickedCell: Cell): Grid {
  if (clickedCell.bomb) {
    return grid.map((row: Cell[]) =>
      row.map((cell: Cell) => {
        return { ...cell, enabled: true }
      })
    )
  }

  if (clickedCell.surroundingBombs === 0) {
    const emptyVisited = Array.from({ length: grid.length }).map(() => {
      return Array.from({ length: grid.length }).map(() => false)
    })

    floodFill(grid, clickedCell.rowIndex, clickedCell.colIndex, emptyVisited)
    return [...grid]
  }

  if (clickedCell.surroundingBombs > 0) {
    return grid.map((row: Cell[], rowIndex) =>
      row.map((cell: Cell, colIndex) => {
        if (
          rowIndex === clickedCell.rowIndex &&
          colIndex === clickedCell.colIndex
        ) {
          return { ...cell, enabled: true }
        }
        return cell
      })
    )
  }

  return grid
}

const defaultCellValue = {
  bomb: false,
  surroundingBombs: 0,
  flagged: false,
  marked: false,
  enabled: false,
}

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

function isAlreadyBomb(
  bombs: Coordinate[],
  bombCoordinate: Coordinate
): boolean {
  return bombs.some(
    (bomb) =>
      bombCoordinate.col === bomb.col && bombCoordinate.row === bomb.row
  )
}

function isCoordinateAroundAnotherCoordinate(
  coordinate1: Coordinate,
  coordinate2: Coordinate
): boolean {
  const coordinates = getSurroundingCoordinates(coordinate1)
  return coordinates.some(
    (coordinate) =>
      coordinate.col === coordinate2.col && coordinate.row === coordinate2.row
  )
}

function isFirstClickedCoordinate(
  firstClickedCoordinate: Coordinate,
  bombCoordinate: Coordinate
): boolean {
  return (
    bombCoordinate.col === firstClickedCoordinate.col &&
    bombCoordinate.row === firstClickedCoordinate.row
  )
}

function getRandomCoordinates(
  maxSize: number,
  bombs: Coordinates[],
  firstClickedCoordinate: Coordinate
): Coordinates {
  const bombCoordinate = {
    col: getRandomInt(0, maxSize),
    row: getRandomInt(0, maxSize),
  }

  if (
    isAlreadyBomb(bombs, bombCoordinate) ||
    isFirstClickedCoordinate(firstClickedCoordinate, bombCoordinate) ||
    isCoordinateAroundAnotherCoordinate(firstClickedCoordinate, bombCoordinate)
  ) {
    return getRandomCoordinates(maxSize, bombs, firstClickedCoordinate)
  }

  return bombCoordinate
}

function fillSurroundingBombsNumbers(
  bombCoordinates: Coordinate[],
  grid: Grid
): void {
  bombCoordinates.forEach((bombCoordinate: Coordinate) => {
    const coordinatesToUpdate = getSurroundingCoordinates(bombCoordinate)

    coordinatesToUpdate.forEach((surroundingCoordinate) => {
      if (isValidCoordinate(surroundingCoordinate, grid.length)) {
        const surroundingBombs =
          grid[surroundingCoordinate.row][surroundingCoordinate.col]
            .surroundingBombs

        grid[surroundingCoordinate.row][
          surroundingCoordinate.col
        ].surroundingBombs = surroundingBombs + 1
      }
    })
  })
}

function isValidCoordinate(coordinate: Coordinate, gridSize: number) {
  return !(
    coordinate.col < 0 ||
    coordinate.row < 0 ||
    coordinate.col >= gridSize ||
    coordinate.row >= gridSize
  )
}

function floodFill(
  grid: Grid,
  rowIndex: number,
  colIndex: number,
  visited: boolean[][]
) {
  if (
    rowIndex < 0 ||
    colIndex < 0 ||
    rowIndex >= grid.length ||
    colIndex >= grid.length
  ) {
    return
  }

  if (visited[rowIndex][colIndex]) {
    return
  }

  visited[rowIndex][colIndex] = true

  if (grid[rowIndex][colIndex].surroundingBombs === 0) {
    grid[rowIndex][colIndex].enabled = true

    floodFill(grid, rowIndex - 1, colIndex, visited)
    floodFill(grid, rowIndex + 1, colIndex, visited)
    floodFill(grid, rowIndex, colIndex - 1, visited)
    floodFill(grid, rowIndex, colIndex + 1, visited)
  } else if (grid[rowIndex][colIndex].surroundingBombs > 0) {
    const cell = grid[rowIndex][colIndex]
    cell.enabled = true
    const surroundingCoordinates = getSurroundingCoordinates({
      row: rowIndex,
      col: colIndex,
    })
    surroundingCoordinates.forEach((coordinate) => {
      if (
        coordinate.row >= 0 &&
        coordinate.col >= 0 &&
        coordinate.row < grid.length &&
        coordinate.col < grid.length &&
        grid[coordinate.row][coordinate.col].surroundingBombs > 0 &&
        !grid[coordinate.row][coordinate.col].bomb
      ) {
        grid[coordinate.row][coordinate.col].enabled = true
      }
    })
  }
}
