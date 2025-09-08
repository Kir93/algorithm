function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));
  let mode = 'r';
  let x = 0;
  let y = 0;

  for (let i = 0; i < n * n; i++) {
    answer[y][x] = i + 1;
    if (mode === 'r') {
      x++;
      if (x === n - 1 || answer[y][x + 1] !== 0) {
        mode = 'b';
      }
    } else if (mode === 'b') {
      y++;
      if (y === n - 1 || answer[y + 1][x] !== 0) {
        mode = 'l';
      }
    } else if (mode === 'l') {
      x--;
      if (x === 0 || answer[y][x - 1] !== 0) {
        mode = 't';
      }
    } else if (mode === 't') {
      y--;
      if (y === 0 || answer[y - 1][x] !== 0) {
        mode = 'r';
      }
    }
  }

  return answer;
}