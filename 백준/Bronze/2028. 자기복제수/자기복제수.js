const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (n of input.slice(1)) {
  if ((parseInt(n) ** 2).toString().endsWith(n)) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
