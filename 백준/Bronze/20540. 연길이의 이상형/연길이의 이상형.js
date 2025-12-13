const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const mbti_types = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'];
const mbti = input[0];

for (let i = 0; i < mbti.length; i++) {
  mbti_types.splice(mbti_types.indexOf(mbti[i]), 1);
}

console.log(mbti_types.join(''));
