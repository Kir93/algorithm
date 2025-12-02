const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const li = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

if (li[0] === li[1] && li[1] === li[2]) {
  console.log(2);
} else if (li[0] ** 2 + li[1] ** 2 === li[2] ** 2) {
  console.log(1);
} else {
  console.log(0);
}
