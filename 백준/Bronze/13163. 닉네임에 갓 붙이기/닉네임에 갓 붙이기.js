const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, ...nicknames] = input;

for (let i = 0; i < n; i++) {
  const nickname = nicknames[i].split(' ');
  nickname.shift();
  console.log('god' + nickname.join(''));
}