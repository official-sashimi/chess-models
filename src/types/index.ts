import { Position } from '../Position';

export const ALL_FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const;
export type File = typeof ALL_FILES[number];

export const ALL_RANKS = [1, 2, 3, 4, 5, 6, 7, 8] as const;
export type Rank = typeof ALL_RANKS[number];

export const ALL_MOVE_DIRECTIONS = [
  'Up',
  'UpRight',
  'Right',
  'DownRight',
  'Down',
  'DownLeft',
  'Left',
  'UpLeft',
] as const;
export type MoveDirection = typeof ALL_MOVE_DIRECTIONS[number];

export type Color = 'White' | 'Black';

export interface Piece {
  readonly color: Color;
  movablePositionsFrom: (offset: Position) => Set<Position>;
  takablePositionsFrom: (offset: Position) => Set<Position>;
}
