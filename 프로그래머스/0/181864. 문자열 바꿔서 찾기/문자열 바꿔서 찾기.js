function solution(myString, pat) {
  return +myString
    .split('')
    .map((s) => (s === 'A' ? 'B' : 'A'))
    .join('')
    .includes(pat);
}