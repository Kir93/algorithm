const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [t1, e1, f1] = input[0].split(' ').map(Number);
const [t2, e2, f2] = input[1].split(' ').map(Number);

const max = (3 * t1) + (20 * e1) + (120 * f1);
const mel = (3 * t2) + (20 * e2) + (120 * f2);

if (max > mel) {
  console.log("Max");
} else if (max < mel) {
  console.log("Mel");
} else {
  console.log("Draw");
}