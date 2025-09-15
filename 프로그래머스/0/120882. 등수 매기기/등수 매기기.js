function solution(score) {
  const newScore = score.map(([e, m]) => (e + m) / 2);
  const sortedScore = [...newScore].sort((a, b) => b - a);
  return newScore.map((s) => sortedScore.indexOf(s) + 1);
}