const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const twelve = 'ABCDEFGHIJKL';
const ten = '0123456789';
const year = parseInt(input[0]) - 2013;

console.log(
  twelve[(((year + 5) % 12) + 12) % 12] + ten[(((year - 1) % 10) + 10) % 10],
);