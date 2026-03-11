const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);

Array.from({ length: n }, (_) => console.log('@@@@@'.repeat(n)));

Array.from({ length: n * 3 }, (_) => console.log('@'.repeat(n)));

Array.from({ length: n }, (_) => console.log('@@@@@'.repeat(n)));
