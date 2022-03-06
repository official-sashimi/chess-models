import { MoveDirection, Piece } from './types';
import { RegularlyMovingPiece } from './RegularlyMovingPiece';

export class Queen extends RegularlyMovingPiece implements Piece {
  moveDirections() {
    return new Set([
      'Up',
      'UpRight',
      'Right',
      'DownRight',
      'Down',
      'DownLeft',
      'Left',
      'UpLeft',
    ] as MoveDirection[]);
  }
}
