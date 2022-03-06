import { Position } from './Position';
import { ALL_MOVE_DIRECTIONS, MoveDirection } from './types';

export class MoveDirectionWrapper {
  readonly moveDirection: MoveDirection;

  constructor(moveDirection: MoveDirection) {
    this.moveDirection = moveDirection;
  }

  reverse(): MoveDirectionWrapper {
    const index =
      (ALL_MOVE_DIRECTIONS.indexOf(this.moveDirection) +
        ALL_MOVE_DIRECTIONS.length / 2) %
      ALL_MOVE_DIRECTIONS.length;
    const reverseDirection = ALL_MOVE_DIRECTIONS[index];
    return new MoveDirectionWrapper(reverseDirection);
  }

  allPositionsFrom(offset: Position): Set<Position> {
    return this.#positionsGetter()(offset);
  }

  #positionsGetter(): (offset: Position) => Set<Position> {
    switch (this.moveDirection) {
      case 'Up':
        return Position.allUpsFrom;
      case 'UpRight':
        return Position.allUpRightsFrom;
      case 'Right':
        return Position.allRightsFrom;
      case 'DownRight':
        return Position.allDownRightsFrom;
      case 'Down':
        return Position.allDownsFrom;
      case 'DownLeft':
        return Position.allDownLeftsFrom;
      case 'Left':
        return Position.allLeftsFrom;
      case 'UpLeft':
        return Position.allUpLeftsFrom;
    }
  }
}
