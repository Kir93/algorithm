const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const name = input[1];
let r = 0;

for (const char of name) {
  r += char.charCodeAt(0) - 64;
}

console.log(r);
