const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const balance = input[0]
  .split(' ')
  .map(Number)
  .reduce((a, b) => a + b, 0);
const c = Number(input[1]);

console.log(balance >= c * 2 ? balance - c * 2 : balance);