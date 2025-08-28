function solution(myString) {
  return myString
    .split('')
    .map((v) => (v.toLowerCase() === 'a' ? 'A' : v.toLowerCase()))
    .join('');
}