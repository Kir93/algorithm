const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();

for (q of input) {
  const r = [q[0]];
  for (c of q.slice(1)) {
    if (r.at(-1) !== c) {
      r.push(c);
    }
  }
  console.log(r.join(''));
}
