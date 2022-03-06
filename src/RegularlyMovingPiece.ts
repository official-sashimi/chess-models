import { Color, MoveDirection } from './types';
import { MoveDirectionWrapper } from './MoveDirectionWrapper';
import { Position } from './Position';

export abstract class RegularlyMovingPiece {
  readonly color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract moveDirections(): Set<MoveDirection>;

  movablePositionsFrom(offset: Position): Set<Position> {
    const positions = [...this.moveDirections()]
      .map((moveDirection) => {
        let moveDirectionWrapper = new MoveDirectionWrapper(moveDirection);
        if (this.color === 'Black') {
          moveDirectionWrapper = moveDirectionWrapper.reverse();
        }
        return [...moveDirectionWrapper.allPositionsFrom(offset)];
      })
      .flat();
    return new Set(positions);
  }

  takablePositionsFrom(offset: Position): Set<Position> {
    return this.movablePositionsFrom(offset);
  }
}
