const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

Array.from({ length: parseInt(input[0]) }, () => console.log('I love DGU'));
