const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const alphabets = input[0].split('');

for (const alphabet of alphabets) {
  const times = String(alphabet.charCodeAt(0))
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr), 0);

  console.log(alphabet.repeat(times));
}
