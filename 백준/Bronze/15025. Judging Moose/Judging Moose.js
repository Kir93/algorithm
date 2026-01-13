const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [l, r] = input[0].split(' ').map(Number);

if (l === r && l === 0) {
  console.log('Not a moose');
} else if (l === r) {
  console.log('Even', l + r);
} else {
  console.log('Odd', Math.max(l, r) * 2);
}
