function solution(arr, n) {
  return arr.length % 2 !== 0
    ? arr.map((v, i) => (i % 2 === 0 ? v + n : v))
    : arr.map((v, i) => (i % 2 !== 0 ? v + n : v));
}