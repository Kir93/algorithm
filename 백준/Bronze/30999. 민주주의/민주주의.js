const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let r = 0;

for (let i = 1; i <= n; i++) {
  const vote = input[i].split('');
  if (
    vote.filter((v) => v === 'O').length > vote.filter((v) => v === 'X').length
  ) {
    r++;
  }
}

console.log(r);
