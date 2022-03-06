import { MoveDirection, Piece } from './types';
import { RegularlyMovingPiece } from './RegularlyMovingPiece';

export class Bishop extends RegularlyMovingPiece implements Piece {
  moveDirections() {
    return new Set([
      'UpRight',
      'DownRight',
      'DownLeft',
      'UpLeft',
    ] as MoveDirection[]);
  }
}
