const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const vowel = ['a', 'i', 'u', 'e', 'o'];

console.log(
  input[1].split('').reduce((acc, cur) => acc + vowel.includes(cur), 0),
);