function solution(chicken) {
  let answer = 0;
  while (Math.floor(chicken / 10) > 0) {
    answer += Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10) + (chicken % 10);
  }
  return answer;
}