const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const answers = [
  [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13],
  [1, 3, 5, 6, 7, 8, 9, 12, 13],
  [1, 3, 5, 6, 7, 8, 9, 12, 13],
  [1, 2, 3, 5, 6, 7, 8, 12, 13],
  [1, 3, 5, 6, 7, 8, 12, 13],
  [1, 3, 5, 6, 7, 8, 12, 13],
  [1, 3, 5, 6, 7, 8, 12, 13],
  [1, 3, 5, 6, 7, 8, 12, 13],
  [1, 3, 5, 6, 7, 8, 12, 13],
  [1, 2, 3, 6, 7, 8, 12, 13],
];

const n = parseInt(input[0]);

console.log(answers[n - 1].length);
console.log(
  answers[n - 1].map((answer) => String.fromCharCode(answer + 64)).join(' '),
);
