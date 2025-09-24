function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(n) {
  return n / gcd(6, n);
}