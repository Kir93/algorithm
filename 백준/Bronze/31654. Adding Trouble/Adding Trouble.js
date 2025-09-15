const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

[a, b, c] = input[0].split(' ').map(Number);
console.log(a + b === c ? 'correct!' : 'wrong!');