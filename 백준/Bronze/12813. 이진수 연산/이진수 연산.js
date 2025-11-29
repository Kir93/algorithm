const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [aStr, bStr] = input;

const a = BigInt('0b' + aStr);
const b = BigInt('0b' + bStr);

const fill = 100000;
const mask = 2n ** 100000n - 1n;

console.log((a & b).toString(2).padStart(fill, '0'));
console.log((a | b).toString(2).padStart(fill, '0'));
console.log((a ^ b).toString(2).padStart(fill, '0'));
console.log((a ^ mask).toString(2).padStart(fill, '0'));
console.log((b ^ mask).toString(2).padStart(fill, '0'));
