const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const x = parseInt(input[0]);
const y = parseInt(input[1]);
const z = parseInt(input[2]);

const moveTime = (x + y) * 60;
const limitTime = z * 60 + 30;

if (moveTime < limitTime) {
  console.log(1);
} else {
  console.log(0);
}
