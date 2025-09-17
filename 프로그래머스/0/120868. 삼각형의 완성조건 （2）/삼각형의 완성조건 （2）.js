function solution(sides) {
  let answer = 0;
  const maxSide = Math.max(...sides);
  const minSide = Math.min(...sides);

  for (let i = maxSide - minSide; i < maxSide; i++) answer += 1;
  for (let i = maxSide + 1; i < maxSide + minSide; i++) answer += 1;

  return answer;
}