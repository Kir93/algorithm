function solution(n) {
  let num = 2;
  const answer = [];

  while (n > 1) {
    if (n % num === 0) {
      answer.push(num);
      n = n / num;
    } else {
      num++;
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}