const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const k = Number(input[1]);

const x = Math.min(k + 60, n);
const res = x * 1500 + (n - x) * 3000;

console.log(res);
