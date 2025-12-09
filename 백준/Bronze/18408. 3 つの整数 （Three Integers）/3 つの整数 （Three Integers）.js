const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ls = input[0].split(' ').map(Number);
console.log(
  ls.filter((x) => x === 1).length > ls.filter((x) => x === 2).length ? 1 : 2,
);
