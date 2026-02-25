const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (const line of input) {
  const [B, N] = line.split(' ').map(Number);
  if (B === 0 && N === 0) break;
  let i = 0;
  while (i ** N < B) i++;
  console.log(i ** N - B < B - (i - 1) ** N ? i : i - 1);
}
