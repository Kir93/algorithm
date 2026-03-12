const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = Number(input[0]);
const x = Number(input[1]);
const b = Number(input[2]);
const y = Number(input[3]);
const t = Number(input[4]);

const r_a = a + Math.max(t - 30, 0) * x * 21;
const r_b = b + Math.max(t - 45, 0) * y * 21;

console.log(r_a, r_b);
