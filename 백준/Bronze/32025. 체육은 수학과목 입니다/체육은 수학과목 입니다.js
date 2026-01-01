const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [W, H] = input.map(Number);

console.log(Math.floor((Math.min(W, H) * 100) / 2));
