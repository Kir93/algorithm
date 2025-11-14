const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const p = input[0];
console.log(p === p.split('').reverse().join('') ? 'true' : 'false');