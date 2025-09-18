function solution(s) {
  return s
    .split(' ')
    .reduce(
      (acc, cur, i, arr) =>
        cur === 'Z' ? acc - Number(arr[i - 1]) : acc + Number(cur),
      0,
    );
}