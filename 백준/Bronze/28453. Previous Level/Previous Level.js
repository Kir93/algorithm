const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ls = input[1].split(' ').map(Number);

for (i of ls) {
  let lank = 0;
  if (i == 300) {
    lank = 1;
  } else if (i >= 275) {
    lank = 2;
  } else if (i >= 250) {
    lank = 3;
  } else {
    lank = 4;
  }
  process.stdout.write(lank + ' ');
}
