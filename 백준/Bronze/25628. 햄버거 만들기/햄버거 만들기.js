const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const [a, b] = input.map(Number);
console.log(Math.min(Math.floor(a / 2), b));