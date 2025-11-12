const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const command_line = ['N', 'E', 'S', 'W'];
let p = 0;

input.map((c) => {
  if (c === '1') {
    p = p === 3 ? 0 : p + 1;
  } else if (c === '2') {
    p = p >= 2 ? p - 2 : p + 2;
  } else if (c === '3') {
    p = p === 0 ? 3 : p - 1;
  }
});

console.log(command_line[p]);