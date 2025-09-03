function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  } else {
    if (
      arr1.reduce((prev, cur) => prev + cur, 0) >
      arr2.reduce((prev, cur) => prev + cur, 0)
    ) {
      return 1;
    } else if (
      arr1.reduce((prev, cur) => prev + cur, 0) <
      arr2.reduce((prev, cur) => prev + cur, 0)
    ) {
      return -1;
    } else {
      return 0;
    }
  }
}