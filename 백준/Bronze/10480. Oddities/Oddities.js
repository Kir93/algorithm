const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let n of [...input].slice(1).map(Number)) {
  console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`);
}
