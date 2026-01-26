const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let r = 1n;

for (let i = 2n; i <= BigInt(input[0]); i++) {
  r *= i;
}

console.log(String(r).slice(-1));
