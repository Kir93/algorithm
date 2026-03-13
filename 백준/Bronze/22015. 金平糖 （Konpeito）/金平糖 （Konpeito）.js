const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ls = input[0].split(' ').map(Number);

console.log(Math.max(...ls) * 3 - ls.reduce((acc, curr) => acc + curr, 0));
