const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ls = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

console.log(ls[0]);
