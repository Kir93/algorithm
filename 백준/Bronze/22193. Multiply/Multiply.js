const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = BigInt(input[1]);
const b = BigInt(input[2]);

console.log((a * b).toString());