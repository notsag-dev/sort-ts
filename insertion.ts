/**
 * Insertion sort.
 *
 * The ordered part is maintained on the left side of the array.
 * On each iteration the algorithm gets the next unordered element
 * from left to right and inserts it in the ordered side of the
 * array.
 *
 */
export function insertionSort(arrayParam: number[]): number[] {
  let result = [...arrayParam];
  for (let i = 1; i < result.length; i++) {
    // TODO do a better insertion algorithm to improve performance
    let newIndexOfUnorderedElement = i;
    for (let j = i - 1; j >= 0; j--) {
      if (result[i] < result[j]) {
        newIndexOfUnorderedElement--; 
      } else {
        break;
      }
    }

    // TODO create function to insert in ordered array
    if (newIndexOfUnorderedElement !== i) {
      result = [
        ...result.slice(0, newIndexOfUnorderedElement),
        result[i],
        ...result.slice(newIndexOfUnorderedElement, i),
        ...result.slice(i + 1, result.length),
      ]
    }
  }
  return result;
}
