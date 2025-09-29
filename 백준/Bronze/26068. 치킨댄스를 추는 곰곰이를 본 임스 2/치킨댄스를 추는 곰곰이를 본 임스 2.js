const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const [_, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(inputs.filter((num) => parseInt(num.split('D-')[1]) <= 90).length);