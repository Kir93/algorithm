const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const nums = input
  .slice(1)
  .map(Number)
  .filter((num) => num % 2 === 1);

console.log(nums.length);
