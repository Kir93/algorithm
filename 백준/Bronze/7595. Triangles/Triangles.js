const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.forEach((num) => {
  const n = parseInt(num, 10);
  if (n === 0) return;
  Array.from({ length: n }).forEach((_, i) => console.log('*'.repeat(i + 1)));
});