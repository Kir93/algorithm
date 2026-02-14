const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const circle = input.map(Number).reduce((acc, curr) => acc + curr, 0);
console.log(circle + 300 > 1800 ? 'No' : 'Yes');
