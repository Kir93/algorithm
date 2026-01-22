const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (const n of input.slice(1)){
  if ((Number(n) + 1) % Number(n.slice(-2)) === 0) {
    console.log('Good');
  } else {
    console.log('Bye');
  }
}