const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  process.stdout.write(`${i} `);
  if (i % 6 === 0) {
    process.stdout.write('Go! ');
  }
}

if (n % 6 !== 0) {
  process.stdout.write('Go!');
}
