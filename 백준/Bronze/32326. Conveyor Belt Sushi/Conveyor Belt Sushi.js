const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [r, g, b] = input.map(Number);

console.log(r * 3 + g * 4 + b * 5);
