import { Color, Piece, Rank } from './types';
import { Position } from './Position';

export class Pawn implements Piece {
  readonly color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  movablePositionsFrom(offset: Position): Set<Position> {
    const nextRank = this.#nextRank(offset.rank);
    if (nextRank == undefined) {
      return new Set();
    }

    let positions = [new Position(offset.file, nextRank)];
    if (
      (offset.rank === 2 && this.color === 'White') ||
      (offset.rank === 7 && this.color === 'Black')
    ) {
      positions = [
        ...positions,
        new Position(offset.file, this.color === 'White' ? 4 : 5),
      ];
    }

    return new Set(positions);
  }

  takablePositionsFrom(offset: Position): Set<Position> {
    const nextRank = this.#nextRank(offset.rank);
    if (nextRank == undefined) {
      return new Set();
    }
    return new Set(
      [...Position.allOfRank(nextRank)].filter((otherPosition) => {
        const distance = offset.distanceFrom(otherPosition);
        return distance.file === 1;
      }),
    );
  }

  #nextRank(currentRank: Rank): Rank | undefined {
    const nextRank = currentRank + (this.color === 'White' ? 1 : -1);
    if (nextRank === 0 || nextRank === 9) {
      return undefined;
    }
    return nextRank as Rank;
  }
}
