const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const l = parseInt(input[0], 10);

console.log((Math.sqrt(3) / 4) * l ** 2);
