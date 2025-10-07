const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(
  input[0]
    .split(' ')
    .map(BigInt)
    .reduce((acc, cur) => acc + cur, BigInt(0))
    .toString(),
);