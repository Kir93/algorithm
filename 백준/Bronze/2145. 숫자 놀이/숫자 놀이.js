const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let n of input) {
  if (n === '0') {
    break;
  }
  while (n.length > 1) {
    n = n
      .split('')
      .reduce((acc, curr) => acc + Number(curr), 0)
      .toString();
  }

  console.log(n);
}
