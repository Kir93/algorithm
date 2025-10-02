const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const [x, y] = input.map(Number);
console.log(x > y ? x + y : y - x);