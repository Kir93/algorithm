const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const temp = input[0];

if (temp.includes('d2') || temp.includes('D2')) {
  console.log('D2');
} else {
  console.log('unrated');
}
