const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const forms = { c: 26, d: 10 };
const plate = input[0];

let answer = forms[plate[0]];

for (let i = 1; i < plate.length; i++) {
  let added = forms[plate[i]];
  if (plate[i] === plate[i - 1]) {
    added -= 1;
  }
  answer *= added;
}

console.log(answer);