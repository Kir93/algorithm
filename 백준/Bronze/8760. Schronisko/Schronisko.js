const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.slice(1).forEach((num) => {
  const [n, m] = num.split(' ').map(Number);
  console.log(Math.floor((n * m) / 2));
});
