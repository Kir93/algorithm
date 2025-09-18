function solution(dots) {
  const xSet = [...new Set(dots.map((dot) => dot[0]))];
  const ySet = [...new Set(dots.map((dot) => dot[1]))];
  return Math.abs(xSet[0] - xSet[1]) * Math.abs(ySet[0] - ySet[1]);
}