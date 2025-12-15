const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);

while (a >= 2) {
  if (b >= a - 1) {
    console.log(2 * a - 1);
    break;
  } else {
    a--;
  }
}
