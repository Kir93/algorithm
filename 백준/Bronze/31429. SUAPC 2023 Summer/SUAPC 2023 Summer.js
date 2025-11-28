const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const score = [12, 11, 11, 10, 9, 9, 9, 8, 7, 6, 6];
const penalty = [1600, 894, 1327, 1311, 1004, 1178, 1357, 837, 1055, 556, 773];

const n = Number(input[0]);

console.log(`${score[n - 1]} ${penalty[n - 1]}`);
