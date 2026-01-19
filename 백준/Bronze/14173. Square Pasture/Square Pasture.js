const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [x3, y3, x4, y4] = input[1].split(' ').map(Number);

const x = Math.max(x2, x4) - Math.min(x1, x3);
const y = Math.max(y2, y4) - Math.min(y1, y3);

console.log(Math.max(x, y) ** 2);
