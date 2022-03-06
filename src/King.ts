import { Color, Piece } from './types';
import { Position } from './Position';

export class King implements Piece {
  readonly color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  movablePositionsFrom(offset: Position): Set<Position> {
    return new Set(
      [...Position.all()].filter((position) => {
        const distance = offset.distanceFrom(position);
        return (
          distance.file + distance.rank > 0 &&
          distance.file < 2 &&
          distance.rank < 2
        );
      }),
    );
  }

  takablePositionsFrom(offset: Position): Set<Position> {
    return this.movablePositionsFrom(offset);
  }
}
