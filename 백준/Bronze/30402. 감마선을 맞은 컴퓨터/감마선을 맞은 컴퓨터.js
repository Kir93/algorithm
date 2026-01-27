const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (line of input) {
  const pic = line.split(' ');
  if (pic.includes('w')) {
    console.log('chunbae');
    break;
  } else if (pic.includes('b')) {
    console.log('nabi');
    break;
  } else if (pic.includes('g')) {
    console.log('yeongcheol');
    break;
  }
}
