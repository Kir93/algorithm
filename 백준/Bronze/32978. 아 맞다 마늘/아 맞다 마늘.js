const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);
const pasta = input[1].split(' ');
const chef = input[2].split(' ');

console.log(pasta.find((p) => !chef.includes(p)));
