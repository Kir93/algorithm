const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [_, m, k] = input[0].split(' ').map(Number);
console.log(Math.floor(k / m), k % m);