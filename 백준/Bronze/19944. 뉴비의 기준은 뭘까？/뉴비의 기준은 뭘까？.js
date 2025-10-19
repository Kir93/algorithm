const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

if (m <= n && m > 2) {
  console.log('OLDBIE!');
} else if (m <= 2) {
  console.log('NEWBIE!');
} else {
  console.log('TLE!');
}