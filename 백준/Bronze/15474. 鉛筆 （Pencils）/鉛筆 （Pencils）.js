const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, a, b, c, d] = input[0].split(' ').map(Number);

let X = Math.ceil(n / a);
let Y = Math.ceil(n / c);

console.log(Math.min(X * b, Y * d));
