const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const student = [0, 0, 0, 0, 0];

for (let i = 1; i <= N; i++) {
  const [S, Y] = input[i].split(' ').map(Number);
  if (Y === 1 || Y === 2) {
    student[0] += 1;
  } else if (S === 0 && (Y === 3 || Y === 4)) {
    student[1] += 1;
  } else if (S === 1 && (Y === 3 || Y === 4)) {
    student[2] += 1;
  } else if (S === 0 && (Y === 5 || Y === 6)) {
    student[3] += 1;
  } else {
    student[4] += 1;
  }
}

let room = 0;
for (let i = 0; i < student.length; i++) {
  room += Math.ceil(student[i] / K);
}

console.log(room);
