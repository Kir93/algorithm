const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [STR, DEX, INT, LUK, N] = input[0].split(' ').map(Number);
const avg = (STR + DEX + INT + LUK) / 4;

if (N - avg > 0) {
  console.log(parseInt((N - avg) * 4));
} else {
  console.log(0);
}
