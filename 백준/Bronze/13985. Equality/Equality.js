const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [calc, result] = input[0].split(' = ');
const [a, b] = calc.split(' + ');

console.log(parseInt(a) + parseInt(b) === parseInt(result) ? 'YES' : 'NO');