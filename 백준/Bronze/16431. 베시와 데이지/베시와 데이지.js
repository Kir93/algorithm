const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [Br, Bc] = input[0].split(' ').map(Number);
const [Dr, Dc] = input[1].split(' ').map(Number);
const [Jr, Jc] = input[2].split(' ').map(Number);

const B = Math.max(Math.abs(Jr - Br), Math.abs(Jc - Bc));
const D = Math.abs(Jr - Dr) + Math.abs(Jc - Dc);

if (B === D) {
  console.log('tie');
} else if (B < D) {
  console.log('bessie');
} else {
  console.log('daisy');
}