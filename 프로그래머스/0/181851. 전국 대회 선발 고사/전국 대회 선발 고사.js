function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((v, i) => [v, i])
    .filter((_, i) => attendance[i])
    .sort((a, b) => a[0] - b[0]);

  return a[1] * 10000 + b[1] * 100 + c[1];
}