import { Position } from './Position';
import { MoveDirectionWrapper } from './MoveDirectionWrapper';

describe('MoveDirectionWrapper', () => {
  describe('reverse method', () => {
    const wrapper = new MoveDirectionWrapper('Up');
    const reverse = wrapper.reverse();

    it('returns a new instance of reverse direction', () => {
      expect(reverse.moveDirection).toEqual('Down');
    });
  });

  describe('allPositionsFrom', () => {
    const wrapper = new MoveDirectionWrapper('Up');
    const offset = new Position('a', 1);

    it('delegates to a Posiion static getter', () => {
      const spy = jest.spyOn(Position, 'allUpsFrom');
      wrapper.allPositionsFrom(offset);
      expect(Position.allUpsFrom).toBeCalledTimes(1);
      expect(Position.allUpsFrom).toHaveBeenCalledWith(offset);
      spy.mockRestore();
    });
  });
});
