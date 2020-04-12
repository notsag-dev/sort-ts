import { swap } from './swap';


/**
 * Selection sort.
 * 
 * The sorted array is built from left to right, from min to max.
 * Each iteration goes through the unordered elements and picks
 * the minimum of them, which will be the next element of the
 * ordered array.
 *
 */
export function selectionSort(arrayParam: number[]) {
  let result = [...arrayParam];
  for (let i = 0; i < result.length - 1; i++) {
    let minInd = i;
    for (let j = i; j < result.length; j++) {
      if (result[j] < result[minInd]) {
        minInd = j;
      }
    }
    if (minInd !== i) {
      result = swap(result, i, minInd);
    }
  }
  return result;
}
