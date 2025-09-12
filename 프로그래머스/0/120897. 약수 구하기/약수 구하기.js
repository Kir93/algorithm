function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((x) => n % x === 0);
}