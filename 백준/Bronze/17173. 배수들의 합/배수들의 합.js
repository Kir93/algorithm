const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let obj = {};

for (const el of arr) {
  for (let i = el; i <= n; i += el) {
    obj[i] = true;
  }
}

console.log(Object.keys(obj).reduce((acc, cur) => acc + +cur, 0));
