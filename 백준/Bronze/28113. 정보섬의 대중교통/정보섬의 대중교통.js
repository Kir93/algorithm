const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [_n, a, b] = input[0].split(' ').map(Number);

if (a === b) {
  console.log('Anything');
} else {
  console.log(a < b ? 'Bus' : 'Subway');
}