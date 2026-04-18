const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

if (a + c < b + d) {
  console.log('Hanyang Univ.');
} else if (a + c > b + d) {
  console.log('Yongdap');
} else {
  console.log('Either');
}
