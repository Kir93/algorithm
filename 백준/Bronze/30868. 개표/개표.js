const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for (let i = 1; i < input.length; i++) {
  result.push(
    (
      '++++ '.repeat(Math.floor(input[i] / 5)) + '|'.repeat(input[i] % 5)
    ).trim(),
  );
}

console.log(result.join('\n'));
