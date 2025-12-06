const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const h = parseInt(input[0], 10);
const m = parseInt(input[1], 10);

console.log(h * 60 + m);
