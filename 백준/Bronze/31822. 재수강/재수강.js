const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const subjectCode = input[0];
const n = parseInt(input[1]);
let result = 0;

for (let i = 2; i <= n + 1; i++) {
  const availableCode = input[i];
  if (subjectCode.startsWith(availableCode.slice(0, 5))) {
    result++;
  }
}

console.log(result);
