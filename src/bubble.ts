import {swap} from './swap';

export function bubbleSort(arrayParam: number[]) {
  let arr = [...arrayParam];
  for (let i = arr.length - 1; i > 0; i--) {
    let numChanges = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
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
