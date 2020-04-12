export function mergeSort(arrayToSort: number[]): number[] {
  if (arrayToSort.length <= 1) {
    return arrayToSort;
  }
  const halvesLimit = Math.floor(arrayToSort.length / 2);
  const left = arrayToSort.slice(0, halvesLimit);
  const right = arrayToSort.slice(halvesLimit, arrayToSort.length);
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges 2 arrays that are ordered in an ascending way into a new
 * array, ordered also in an ascending way.
 *
 */
function merge(parArr1: number[], parArr2: number[]): number[] {
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
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result;
}
