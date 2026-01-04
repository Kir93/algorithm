const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, h, v] = input[0].split(' ').map(Number);

const res = Math.max(h * v, (n - h) * v, h * (n - v), (n - h) * (n - v));
console.log(res * 4);
