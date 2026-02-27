const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const box = input.slice(1).map((row) => row.split(''));

const charMap = {
  '^': '<',
  '>': '^',
  v: '>',
  '<': 'v',
  '-': '|',
  '|': '-',
  '/': '\\',
  '\\': '/',
};

const rotate = [];
for (let i = m - 1; i >= 0; i--) {
  const row = [];
  for (let j = 0; j < n; j++) {
    const c = box[j][i];
    row.push(charMap[c] || c);
  }
  rotate.push(row);
}

for (const row of rotate) {
  console.log(row.join(''));
}
