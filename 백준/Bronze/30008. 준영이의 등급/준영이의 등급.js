const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, _] = input[0].split(' ').map(Number);
const ls = input[1].split(' ').map(Number);
const result = [];

for (const i of ls) {
  const p = Math.floor((i * 100) / n);
  if (0 <= p && p <= 4) {
    result.push(1);
  } else if (4 < p && p <= 11) {
    result.push(2);
  } else if (11 < p && p <= 23) {
    result.push(3);
  } else if (23 < p && p <= 40) {
    result.push(4);
  } else if (40 < p && p <= 60) {
    result.push(5);
  } else if (60 < p && p <= 77) {
    result.push(6);
  } else if (77 < p && p <= 89) {
    result.push(7);
  } else if (89 < p && p <= 96) {
    result.push(8);
  } else if (96 < p && p <= 100) {
    result.push(9);
  }
}

console.log(result.join(' '));
