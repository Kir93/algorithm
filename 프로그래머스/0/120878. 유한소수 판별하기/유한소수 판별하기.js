function gcd(a, b) {
  while (b > 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function solution(a, b) {
  n = Math.floor(b / gcd(a, b));
  
  while (n > 1) {
    if (n % 2 === 0) n /= 2;
    else if (n % 5 === 0) n /= 5;
    else return 2;
  }

  return 1;
}