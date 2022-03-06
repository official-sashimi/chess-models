import { MoveDirection, Piece } from './types';
import { RegularlyMovingPiece } from './RegularlyMovingPiece';

export class Rook extends RegularlyMovingPiece implements Piece {
  moveDirections() {
    return new Set(['Up', 'Right', 'Down', 'Left'] as MoveDirection[]);
  }
}
