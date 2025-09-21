const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let target = ['M', 'O', 'B', 'I', 'S'];
let check = true;

target.forEach((c) => {
  if (!input[0].includes(c)) {
    check = false;
    return;
  }
});

console.log(check ? 'YES' : 'NO');