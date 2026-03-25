const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const s = input[0].trim();
const lst = [1, 2, 3, 4];

for (let c of s) {
  if (c === 'A') {
    [lst[0], lst[1]] = [lst[1], lst[0]];
  } else if (c === 'B') {
    [lst[0], lst[2]] = [lst[2], lst[0]];
  } else if (c === 'C') {
    [lst[0], lst[3]] = [lst[3], lst[0]];
  } else if (c === 'D') {
    [lst[1], lst[2]] = [lst[2], lst[1]];
  } else if (c === 'E') {
    [lst[1], lst[3]] = [lst[3], lst[1]];
  } else if (c === 'F') {
    [lst[2], lst[3]] = [lst[3], lst[2]];
  }
}

console.log(lst.indexOf(1) + 1);
console.log(lst.indexOf(4) + 1);
