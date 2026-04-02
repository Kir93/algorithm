const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

if (a === b || b === c || a === c) {
  console.log('S');
} else if (a + b === c || b + c === a || a + c === b) {
  console.log('S');
} else {
  console.log('N');
}
