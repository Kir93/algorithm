const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const limit = parseInt(input[0]);
const speed = parseInt(input[1]);
let fee = 0;

if (speed <= limit) {
  fee = 0;
} else if (speed - limit <= 20) {
  fee = 100;
} else if (speed - limit <= 30) {
  fee = 270;
} else {
  fee = 500;
}

console.log(
  fee === 0
    ? 'Congratulations, you are within the speed limit!'
    : `You are speeding and your fine is $${fee}.`,
);