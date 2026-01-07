const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Math.floor(parseInt(input[0]) / 3);

console.log(Math.floor(((n - 1) * (n - 2)) / 2));
