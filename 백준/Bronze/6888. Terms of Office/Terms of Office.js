const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [start, end] = input.map(Number);

const cnt = (end - start) / 60;

for (let i = 0; i <= cnt; i++) {
  console.log(`All positions change in year ${start + i * 60}`);
}
