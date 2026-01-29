const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);

console.log('@'.repeat(n + 2));
for (let i = 0; i < n; i++) {
  console.log(`@${' '.repeat(n)}@`);
}
console.log('@'.repeat(n + 2));
