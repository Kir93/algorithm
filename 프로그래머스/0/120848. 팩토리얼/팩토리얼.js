function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    const fac = factorial(i);
    if (fac <= n) answer = i;
    else break;
  }
  return answer;
}