const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const five_count = Math.floor(n / 5);
const one_count = n % 5;

const result = 'V'.repeat(five_count) + 'I'.repeat(one_count);
console.log(result);