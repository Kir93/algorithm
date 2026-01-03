const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

if (a === b && b === c) {
  console.log('*');
} else if (a === b) {
  console.log('C');
} else if (b === c) {
  console.log('A');
} else {
  console.log('B');
}
