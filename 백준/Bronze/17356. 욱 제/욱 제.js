const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

[a, b] = input.map(Number);
m = (b - a) / 400;
console.log(1 / (1 + 10 ** m));