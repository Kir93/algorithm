const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const output = [];
const T = Number(input[0]);
let cursor = 1;

for (let i = 0; i < T; i++) {
  let sum = 0;
  const N = Number(input[cursor++]);
  for (let j = 1; j <= N; j++)
    sum += Math.max(...input[cursor++].split(" ").map(Number), 0);
  output.push(sum);
}

console.log(output.join("\n"));
