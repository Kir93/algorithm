const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(
  Math.max(...input[1].split(' ').map(Number)) +
    Math.max(...input[2].split(' ').map(Number)),
);