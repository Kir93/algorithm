const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

costs = input[1].split(' ').map(Number);
console.log(costs.reduce((prev, curr) => prev + curr, 0) - Math.max(...costs));