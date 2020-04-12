export function swap<T>(arrParam: T[], i: number, j: number): T[] {
  const result = [...arrParam];
  const valueAtI = arrParam[i];
  result[i] = result[j];
  result[j] = valueAtI;
  return result;
}
