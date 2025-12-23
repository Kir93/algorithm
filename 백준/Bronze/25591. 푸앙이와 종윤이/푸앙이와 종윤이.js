const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const a = 100 - n;
const b = 100 - m;
const c = 100 - (a + b);
const d = a * b;
const q = Math.floor(d / 100);
const r = d % 100;

console.log(a, b, c, d, q, r);
console.log(d >= 100 ? c + q : c, r);
