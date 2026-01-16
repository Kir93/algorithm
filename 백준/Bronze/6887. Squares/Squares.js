const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
let a = 1;

while (a ** 2 <= n) {
  a++;
}

console.log(`The largest square has side length ${a - 1}.`);
