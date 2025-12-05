const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (ls of input) {
  if (ls === '-1') break;
  console.log(
    ls
      .split(' ')
      .map(Number)
      .filter((v, _, arr) => v !== 0 && arr.includes(v * 2)).length,
  );
}
