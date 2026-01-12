const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();

for (let c of input) {
  let r = 0;
  for (let i = 0; i < 5; i++) {
    r += parseFloat(c) ** i;
  }
  console.log(r.toFixed(2));
}
