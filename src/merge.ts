export function mergeSort<T>(
  arrayToSort: T[],
  compare: (a: T, b: T) => number
): T[] {
  if (arrayToSort.length <= 1) {
    return arrayToSort;
  }
  const halvesLimit = Math.floor(arrayToSort.length / 2);
  const left = arrayToSort.slice(0, halvesLimit);
  const right = arrayToSort.slice(halvesLimit, arrayToSort.length);
  return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
}

/**
 * Merges 2 arrays that are ordered in an ascending way into a new
 * array, ordered also in an ascending way.
 *
 */
function merge<T>(
  parArr1: T[],
  parArr2: T[],
  compare: (a: T, b: T) => -1 | 0 | 1
): T[] {
  const result = [];
  const arr1 = [...parArr1];
  const arr2 = [...parArr2];
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0) {
      return result.concat(arr2);
    }
    if (arr2.length === 0) {
      return result.concat(arr1);
    }
    if (compare(arr1[0], arr2[0]) < 0) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result;
}
