import { Color, Piece } from './types';
import { Position } from './Position';

export class Knight implements Piece {
  readonly color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  movablePositionsFrom(offset: Position): Set<Position> {
    return new Set(
      [...Position.all()].filter((position) => {
        const distance = offset.distanceFrom(position);
        return (
          (distance.file === 1 && distance.rank === 2) ||
          (distance.file === 2 && distance.rank === 1)
        );
      }),
    );
  }

  takablePositionsFrom(offset: Position): Set<Position> {
    return this.movablePositionsFrom(offset);
  }
}
