const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const chess = {
  K: 0,
  k: 0,
  P: 1,
  p: 1,
  N: 3,
  n: 3,
  B: 3,
  b: 3,
  R: 5,
  r: 5,
  Q: 9,
  q: 9,
};

let white = 0;
let black = 0;

for (let i = 0; i < 8; i++) {
  const pieces = input[i];
  for (const piece of pieces) {
    if (piece === '.') continue;
    if (piece.toUpperCase() === piece) {
      white += chess[piece];
    } else {
      black += chess[piece];
    }
  }
}

console.log(white - black);
