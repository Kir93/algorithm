const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = parseInt(input[0]);

console.log((a / Math.PI) ** 0.5 * 2 * Math.PI);
