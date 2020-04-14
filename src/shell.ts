import { swap } from './swap';

export function shellSort<T>(
  arrayToSort: T[],
  compare: (a: T, b: T) => number
): T[] {
  let result = [...arrayToSort];

  // TODO add gap parameter, and maybe another for the
  // function that is applied each iteration to
  // recalculate the gap
  let gap = Math.floor(result.length / 2);
  while (true) {
    let swappedCount = 0;
    for (let i = 0; i < result.length - gap; i++) {
      if (compare(result[i], result[i + gap]) > 0) {
        result = swap(result, i, i + gap);
        swappedCount++;
      }
    }
    if (swappedCount === 0 && gap === 1) {
      return result;
    }
    gap = Math.floor(gap / 2) || 1;
  }
}
