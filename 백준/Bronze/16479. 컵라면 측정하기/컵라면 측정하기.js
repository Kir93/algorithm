const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const k = parseInt(input[0]);
const [d1, d2] = input[1].trim().split(' ').map(Number);

const res = k ** 2 - ((d1 - d2) / 2) ** 2;
console.log(res);
