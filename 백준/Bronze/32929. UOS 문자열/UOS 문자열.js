const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const UOS = 'UOS';
console.log(UOS[((parseInt(input[0]) % 3) + 2) % 3]);