# sort-ts
![build](https://github.com/notsag-dev/sort-ts/workflows/build/badge.svg)

Sorting algorithms for Typescript. All of the implemented algorithms are at the moment not-in-place ones, meaning they create and return a new array instead of mutating the original one.

## Install
```
npm install sort-ts
```

## Use
```javascript
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  mergeSort,
  shellSort
} from 'sort-ts';

// Compare function for ascending order
function compare(a: number, b: number): number {
  return a - b;
}

const orderedArray = bubbleSort([-1, 1, -100, 1000, 23, 34, 10000, 0], compare);
// Same for other algorithms
```

## Contribute
Some algorithms could be added to the library. Feel free to add new ones and create a pull request!
