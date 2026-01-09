const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ls = input[1].split(' ').map(Number);

let check = 0;

for (let c of ls) {
  if (c % 2 === 0) {
    check += 1;
  } else {
    check -= 1;
  }
}

if (check > 0) {
  console.log('Happy');
} else {
  console.log('Sad');
}
