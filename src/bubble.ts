import { swap } from './swap';

export function bubbleSort<T>(
  arrayToSort: T[],
  compare: (a: T, b: T) => -1 | 0 | 1
): T[] {
  let arr = [...arrayToSort];
  for (let i = arr.length - 1; i > 0; i--) {
    let numChanges = 0;
    for (let j = 0; j < i; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        numChanges++;
        arr = swap(arr, j, j + 1);
      }
    }
    if (numChanges === 0) {
      return arr;
    }
  }
  return arr;
}
