const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
console.log(`Gnomes:`);
for (let i = 1; i <= n; i++) {
  const ls = input[i].split(' ').map(Number);
  if (
    ls.every((v, i, arr) => i === 0 || v >= arr[i - 1]) ||
    ls.every((v, i, arr) => i === 0 || v <= arr[i - 1])
  ) {
    console.log('Ordered');
  } else {
    console.log('Unordered');
  }
}