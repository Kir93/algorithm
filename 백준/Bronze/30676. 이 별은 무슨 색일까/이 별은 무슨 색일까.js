const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);

switch (true) {
  case 620 <= n && n <= 780:
    console.log('Red');
    break;
  case 590 <= n && n < 620:
    console.log('Orange');
    break;
  case 570 <= n && n < 590:
    console.log('Yellow');
    break;
  case 495 <= n && n < 570:
    console.log('Green');
    break;
  case 450 <= n && n < 495:
    console.log('Blue');
    break;
  case 425 <= n && n < 450:
    console.log('Indigo');
    break;
  case 350 <= n && n < 425:
    console.log('Violet');
    break;
  default:
    break;
}
