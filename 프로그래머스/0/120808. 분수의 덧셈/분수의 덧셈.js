function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function solution(numer1, denom1, numer2, denom2) {
  const number = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;
  const gcdNumber = gcd(number, denom);
  return [Math.floor(number / gcdNumber), Math.floor(denom / gcdNumber)];
}