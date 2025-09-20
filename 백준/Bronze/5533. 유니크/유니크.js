const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const rounds = Array.from({ length: 3 }, () => []);
const scores = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  const values = input[i + 1].split(' ').map(Number);
  rounds[0].push(values[0]);
  rounds[1].push(values[1]);
  rounds[2].push(values[2]);
}

for (let i = 0; i < 3; i++) {
  const pointMap = new Map();
  rounds[i].forEach((score) => {
    pointMap.set(score, (pointMap.get(score) || 0) + 1);
  });

  rounds[i].forEach((score, playerNumber) => {
    if (pointMap.get(score) === 1) {
      scores[playerNumber] += score;
    }
  });
}

console.log(scores.join('\n'));