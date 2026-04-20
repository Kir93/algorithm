const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for (let i = 0; i < 7; i++) {
  const [seminar, num] = input[i].split(' ');
  result.push([seminar, parseInt(num)]);
}

result.sort((a, b) => b[1] - a[1]);
console.log(result[0][0]);
