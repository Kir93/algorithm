function solution(cipher, code) {
  return cipher
    .split('')
    .filter((_, i) => (i + 1) % code === 0)
    .join('');
}