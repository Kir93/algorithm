const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const string = input[0].split('');
let count = 0;
let first = 'A';

for (const s of string) {
  let left = s.charCodeAt(0) - first.charCodeAt(0);
  let right = first.charCodeAt(0) - s.charCodeAt(0);

  if (left < 0) {
    left += 26;
  }
  if (right < 0) {
    right += 26;
  }

  count += Math.min(left, right);
  first = s;
}

console.log(count);
