import { bubbleSort } from '../';

describe('bubbleSort()', () => {
  it('returns an empty array when it receives an empty array', () => {
    expect(bubbleSort([], (a, b) => a - b)).toMatchObject([]);
  });

  it('returns the same array when it receives a one-element array', () => {
    expect(bubbleSort([-1], (a, b) => a - b)).toMatchObject([-1]);
  });

  it('properly orders a multiple element array', () => {
    expect(
      bubbleSort([-1, 1, -100, 1000, 23, 34, 10000, 0], (a, b) => a - b)
    ).toMatchObject([-100, -1, 0, 1, 23, 34, 1000, 10000]);
  });

  it('properly orders a multiple element array in descending order', () => {
    expect(
      bubbleSort([-1, 1, -100, 1000, 23, 34, 10000, 0], (a, b) => b - a)
    ).toMatchObject([10000, 1000, 34, 23, 1, 0, -1, -100]);
  });
});
