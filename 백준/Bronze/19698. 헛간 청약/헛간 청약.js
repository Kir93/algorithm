const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, w, h, l] = input[0].split(' ').map(Number);

console.log(Math.min(n, Math.floor(w / l) * Math.floor(h / l)));