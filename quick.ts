export function quickSort(arrayToSort: number[]): number[] {
  if (arrayToSort.length <= 1) {
    return arrayToSort;
  }

  // TODO add parameter to specify if the array should be mutated
  const arr = [...arrayToSort];

  // The pivot is arbitrarily assigned to the righ-most element of
  // the array
  let pivotIndex = arrayToSort.length - 1;

  let ind = 0;
  let done;
  while(ind < pivotIndex) {
    // Every element > pivot must be to the right of the pivot
    // What's lesser or equal stays on the left
    if (arrayToSort[ind] > arrayToSort[pivotIndex]) {
      const removedElement = arrayToSort.splice(ind, 1)[0];
      arrayToSort.push(removedElement);
      pivotIndex--;
    } else {
      ind++;
    }
  }
  
  return [
    ...quickSort(arrayToSort.slice(0, pivotIndex)),
    arrayToSort[pivotIndex],
    ...quickSort(arrayToSort.slice(pivotIndex + 1, arrayToSort.length)),
  ];
}
