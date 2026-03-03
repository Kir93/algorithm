const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [w, h] = input[0].split(' ').map(Number);

const diagonal = Math.sqrt(w ** 2 + h ** 2);

console.log(w + h - diagonal);
