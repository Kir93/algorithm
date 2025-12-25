const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const taeBo = input[0];
const taeBoSplit = taeBo.split('(^0^)');
console.log(
  taeBoSplit[0]
    .split('')
    .reduce((acc, curr) => acc + (curr === '@' ? 1 : 0), 0),
  taeBoSplit[1]
    .split('')
    .reduce((acc, curr) => acc + (curr === '@' ? 1 : 0), 0),
);
