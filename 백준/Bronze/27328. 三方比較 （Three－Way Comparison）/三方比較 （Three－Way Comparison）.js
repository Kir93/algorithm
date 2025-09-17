const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

if (input[0] < input[1]) console.log(-1);
else if (input[0] > input[1]) console.log(1);
else console.log(0);