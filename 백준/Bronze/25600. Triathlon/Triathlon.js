const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let max_score = 0;

for (points of input.slice(1)) {
  const [a, d, g] = points.split(' ').map(Number);
  const plus = d + g;
  const score = a === plus ? a * plus * 2 : a * plus;
  max_score = Math.max(max_score, score);
}

console.log(max_score);
