const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let i = 1;
for (let t = 0; t < Number(input[0]); t++) {
  const [H, W] = input[i].split(' ').map(Number);
  const grill = input.slice(i + 1, i + 1 + H);
  for (let j = 0; j < H; j++) {
    console.log(grill[j].split('').reverse().join(''));
  }
  i += H + 1;
}
