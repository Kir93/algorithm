const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const menu = [];
let price = 0;

for (let i = 0; i < parseInt(input[0]); i++) {
  menu.push(parseInt(input[i + 1]));
}

for (let i = 0; i < parseInt(input[parseInt(input[0]) + 1]); i++) {
  price += menu[parseInt(input[i + parseInt(input[0]) + 2]) - 1];
}

console.log(price);
