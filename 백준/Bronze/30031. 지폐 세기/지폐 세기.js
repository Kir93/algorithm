const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const [_n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let result = 0;
for (let m of input) {
  const [w, _h] = m.split(' ').map(Number);
  if (w === 136) {
    result += 1000;
  } else if (w === 142) {
    result += 5000;
  } else if (w === 148) {
    result += 10000;
  } else if (w === 154) {
    result += 50000;
  }
}

console.log(result);
