function solution(arr) {
  return arr.map((n) =>
    n >= 50 && n % 2 === 0
      ? Math.floor(n / 2)
      : n < 50 && n % 2 === 1
      ? n * 2
      : n,
  );
}