const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, u, l] = input[0].split(' ').map(Number);

if (n >= 1000 && (u >= 8000 || l >= 260)) {
  console.log('Very Good');
} else if (n < 1000) {
  console.log('Bad');
} else {
  console.log('Good');
}
