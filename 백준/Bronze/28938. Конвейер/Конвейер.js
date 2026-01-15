const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ls = input[1]
  .split(' ')
  .map(Number)
  .reduce((acc, curr) => acc + curr, 0);

if (ls > 0) {
  console.log('Right');
} else if (ls === 0) {
  console.log('Stay');
} else {
  console.log('Left');
}
