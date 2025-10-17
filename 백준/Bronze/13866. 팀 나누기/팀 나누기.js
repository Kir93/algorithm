const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const numbers = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

console.log(
  Math.abs(numbers[0] + numbers.at(-1) - (numbers[1] + numbers.at(-2))),
);