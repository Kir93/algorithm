const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const weight = Number(input[0]);
const height = Number(input[1]);

const bmi = weight / height ** 2;

if (bmi < 18.5) {
  console.log('Underweight');
} else if (bmi <= 25) {
  console.log('Normal weight');
} else {
  console.log('Overweight');
}
