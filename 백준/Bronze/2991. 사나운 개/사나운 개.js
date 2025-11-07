const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [A, B, C, D] = input[0].split(' ').map(Number);
const delivery = input[1].split(' ').map(Number);

for (let t of delivery) {
  let dog = 0;
  const aDog = t % (A + B);
  const bDog = t % (C + D);

  if (0 < aDog && aDog <= A) {
    dog += 1;
  }
  if (0 < bDog && bDog <= C) {
    dog += 1;
  }

  console.log(dog);
}
