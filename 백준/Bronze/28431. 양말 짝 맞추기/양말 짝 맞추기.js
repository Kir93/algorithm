const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const ls = [];
for (let s of input) {
  if (ls.includes(s)) {
    ls.splice(ls.indexOf(s), 1);
  } else {
    ls.push(s);
  }
}

console.log(ls[0]);