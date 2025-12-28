const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const student = Array.from({ length: 2 }, () => [0, 0, 0]);

for (let i = 1; i <= N; i++) {
  const [S, Y] = input[i].split(' ').map(Number);
  student[S][Math.floor((Y - 1) / 2)]++;
}

const room = student.flat().reduce((sum, cnt) => sum + Math.ceil(cnt / K), 0);

console.log(room);
