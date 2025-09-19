const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a, b] = input;

let answer = '';

for (let i = 0; i < a.length; i++) {
  answer += a[i] + b[i];
}

while (answer.length !== 2) {
  let temp = '';
  for (let i = 0; i < answer.length - 1; i++) {
    temp += (+answer[i] + +answer[i + 1]) % 10;
  }
  answer = temp;
}

console.log(answer);