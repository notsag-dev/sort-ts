export type TreeNode<T> = {
  value: T;
  less: TreeNode<T> | undefined;
  greaterOrEqual: TreeNode<T> | undefined;
};

export function binaryTreeSort<T>(
  arrayToSort: T[],
  compare: (a: T, b: T) => number
): T[] {
  const tree = treeFromArray(arrayToSort, compare);
  const orderedArray = arrayFromTree(tree);
  return orderedArray;
}

function treeFromArray<T>(
  array: T[],
  compare: (a: T, b: T) => number
): TreeNode<T> {
  return array.reduce(
    (treeRoot: TreeNode<T>, value: T): TreeNode<T> =>
      insertInTree(treeRoot, value, compare),
    undefined
  );
}

function arrayFromTree<T>(tree: TreeNode<T> | undefined): T[] {
  if (!tree) {
    return [];
  }
  return [
    ...arrayFromTree(tree.less),
    tree.value,
    ...arrayFromTree(tree.greaterOrEqual),
  ];
}

function insertInTree<T>(
  treeRoot: TreeNode<T> | undefined,
  valueToInsert: T,
  compare: (a: T, b: T) => number
): TreeNode<T> {
  const newNode = {
    value: valueToInsert,
    less: undefined,
    greaterOrEqual: undefined,
  };
  if (!treeRoot) {
    return newNode;
  }
  if (compare(valueToInsert, treeRoot.value) < 0) {
    treeRoot.less = insertInTree(treeRoot.less, valueToInsert, compare);
  } else {
    treeRoot.greaterOrEqual = insertInTree(
      treeRoot.greaterOrEqual,
      valueToInsert,
      compare
    );
  }
  return treeRoot;
}
