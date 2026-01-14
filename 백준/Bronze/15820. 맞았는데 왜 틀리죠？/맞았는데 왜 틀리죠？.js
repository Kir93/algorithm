const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [s1, s2] = input[0].split(' ').map(Number);
const li1 = input.slice(1, s1 + 1).map((line) => line.split(' ').map(Number));
const li2 = input
  .slice(s1 + 1, s1 + s2 + 1)
  .map((line) => line.split(' ').map(Number));

for (let i = 0; i < s1; i++) {
  if (li1[i][0] !== li1[i][1]) {
    console.log('Wrong Answer');
    process.exit(0);
  }
}

for (let i = 0; i < s2; i++) {
  if (li2[i][0] !== li2[i][1]) {
    console.log('Why Wrong!!!');
    process.exit(0);
  }
}

console.log('Accepted');
