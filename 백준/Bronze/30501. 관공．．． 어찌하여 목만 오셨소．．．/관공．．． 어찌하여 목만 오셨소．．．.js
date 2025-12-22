const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

for (g of input) {
  if (g.includes('S')) {
    return console.log(g);
  }
}
