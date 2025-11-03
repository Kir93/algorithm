const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const result = Array.from({ length: k }, (_, i) =>
  parseInt(
    String(n * (i + 1))
      .split('')
      .reverse()
      .join(''),
    10,
  ),
);

console.log(Math.max(...result));