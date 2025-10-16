const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift().split(' ').map(Number)[0];
let ls = Array.from({ length: n }, (_, i) => i + 1);

input.forEach((line) => {
  const [i, j, k] = line.split(' ').map(Number);
  ls = [
    ...ls.slice(0, i - 1),
    ...ls.slice(k - 1, j),
    ...ls.slice(i - 1, k - 1),
    ...ls.slice(j),
  ];
});

console.log(ls.join(' '));