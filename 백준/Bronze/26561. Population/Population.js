const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (const s of input.slice(1)) {
  const [p, t] = s.split(' ').map(Number);
  console.log(p + Math.floor(t / 4) - Math.floor(t / 7));
}
