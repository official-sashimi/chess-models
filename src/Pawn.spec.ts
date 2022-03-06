import { Pawn } from './Pawn';
import { Position } from './Position';

describe('Pawn', () => {
  describe('movablePositionsFrom method', () => {
    describe('of white color', () => {
      const whitePawn = new Pawn('White');

      describe('about a position which is between 2 and 7', () => {
        it('returns an set of positions', () => {
          expect(whitePawn.movablePositionsFrom(new Position('a', 2))).toEqual(
            new Set([new Position('a', 3), new Position('a', 4)]),
          );
          expect(whitePawn.movablePositionsFrom(new Position('h', 7))).toEqual(
            new Set([new Position('h', 8)]),
          );
        });
      });

      describe('about position which is the greatest rank', () => {
        it('returns a empty set', () => {
          expect(whitePawn.movablePositionsFrom(new Position('a', 8))).toEqual(
            new Set([]),
          );
          expect(whitePawn.movablePositionsFrom(new Position('h', 8))).toEqual(
            new Set([]),
          );
        });
      });

      // TODO: decide what to do
      // It is strange when a pawn is placed at rank 1 in the first place, but consider whether validation should be a responsibility of this model.
      // Even if we have validation in a board or other contextual model, should we implement a sample that takes care of this case?
      xdescribe('about position which is the lowest rank', () => {
        it('returns an set of positions', () => {
          expect(whitePawn.movablePositionsFrom(new Position('a', 1))).toEqual(
            new Set([new Position('a', 2)]),
          );
        });
      });
    });

    describe('of black color', () => {
      const blackPawn = new Pawn('Black');

      describe('about a position which is between 2 and 7', () => {
        it('returns an set of positions', () => {
          expect(blackPawn.movablePositionsFrom(new Position('h', 2))).toEqual(
            new Set([new Position('h', 1)]),
          );
          expect(blackPawn.movablePositionsFrom(new Position('a', 7))).toEqual(
            new Set([new Position('a', 6), new Position('a', 5)]),
          );
        });
      });

      describe('about position which is the greatest rank', () => {
        it('returns a empty set', () => {
          expect(blackPawn.movablePositionsFrom(new Position('h', 1))).toEqual(
            new Set([]),
          );
          expect(blackPawn.movablePositionsFrom(new Position('a', 1))).toEqual(
            new Set([]),
          );
        });
      });

      xdescribe('about position which is the lowest rank', () => {
        it('returns an set of positions', () => {
          expect(blackPawn.movablePositionsFrom(new Position('a', 8))).toEqual(
            new Set([new Position('a', 7)]),
          );
        });
      });
    });
  });

  describe('#takablePositionsFrom', () => {
    describe('of white color', () => {
      const whitePawn = new Pawn('White');

      describe('about a position which is between 2 and 7', () => {
        it('returns an set of positions', () => {
          expect(whitePawn.takablePositionsFrom(new Position('a', 2))).toEqual(
            new Set([new Position('b', 3)]),
          );
          expect(whitePawn.takablePositionsFrom(new Position('b', 3))).toEqual(
            new Set([new Position('a', 4), new Position('c', 4)]),
          );
          expect(whitePawn.takablePositionsFrom(new Position('h', 7))).toEqual(
            new Set([new Position('g', 8)]),
          );
        });
      });

      describe('about position which is the greatest rank', () => {
        it('returns a empty set', () => {
          expect(whitePawn.takablePositionsFrom(new Position('a', 8))).toEqual(
            new Set(),
          );
          expect(whitePawn.takablePositionsFrom(new Position('h', 8))).toEqual(
            new Set(),
          );
        });
      });

      xdescribe('about position which is the lowest rank', () => {
        it('returns a empty set', () => {
          expect(whitePawn.takablePositionsFrom(new Position('a', 1))).toEqual(
            new Set(),
          );
        });
      });
    });

    describe('of black color', () => {
      const blackPawn = new Pawn('Black');

      describe('about a position which is between 2 and 7', () => {
        it('returns an set of positions', () => {
          expect(blackPawn.takablePositionsFrom(new Position('h', 2))).toEqual(
            new Set([new Position('g', 1)]),
          );
          expect(blackPawn.takablePositionsFrom(new Position('b', 7))).toEqual(
            new Set([new Position('a', 6), new Position('c', 6)]),
          );
          expect(blackPawn.takablePositionsFrom(new Position('a', 7))).toEqual(
            new Set([new Position('b', 6)]),
          );
        });
      });

      describe('about position which is the greatest rank', () => {
        it('returns a empty set', () => {
          expect(blackPawn.takablePositionsFrom(new Position('h', 1))).toEqual(
            new Set(),
          );
          expect(blackPawn.takablePositionsFrom(new Position('a', 1))).toEqual(
            new Set(),
          );
        });
      });

      xdescribe('about position which is the lowest rank', () => {
        it('returns a empty set', () => {
          expect(blackPawn.takablePositionsFrom(new Position('a', 8))).toEqual(
            new Set(),
          );
        });
      });
    });
  });
});
