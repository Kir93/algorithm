const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const emoji = input[0];
let result = 0;

for (const c of emoji) {
  result += c === ':' ? 2 : c === '_' ? 6 : 1;
}
console.log(result);
