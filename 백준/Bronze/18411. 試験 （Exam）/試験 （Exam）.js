const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const test = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(test[1] + test[2]);