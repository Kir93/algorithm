const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = Number(input[0]);
const [w, v] = input[1].split(' ').map(Number);

console.log(w / v >= a ? 1 : 0);
