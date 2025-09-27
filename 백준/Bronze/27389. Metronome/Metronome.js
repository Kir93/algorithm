const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(Math.round((parseInt(input[0], 10) / 4) * 100) / 100);