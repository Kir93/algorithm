const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [w, h] = input[0].split(' ').map(Number);

console.log(((w * h) / 2).toFixed(1));