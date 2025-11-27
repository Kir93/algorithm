const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());
const t = input[0].split(' ').map(Number);
let d = 0;
let h = 0;
const sumTime = t.reduce((acc, curr) => acc + curr, 0);

d = Math.floor((sumTime + (n - 1) * 8) / 24);
h = (sumTime + (n - 1) * 8) % 24;

console.log(d, h);