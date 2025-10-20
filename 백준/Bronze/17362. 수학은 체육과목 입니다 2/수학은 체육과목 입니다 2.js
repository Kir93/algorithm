const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]) % 8;

if (n === 1) console.log(1);
else if (n === 2 || n === 0) console.log(2);
else if (n === 3 || n === 7) console.log(3);
else if (n === 4 || n === 6) console.log(4);
else console.log(5);