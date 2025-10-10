const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = -999999;

for (let i = 3; i > 0; i--) {
  let x = input[3 - i];
  if (!['Fizz', 'Buzz', 'FizzBuzz'].includes(x)) {
    n = parseInt(x, 10) + i;
  }
}

if (n % 3 === 0 && n % 5 === 0) {
  console.log('FizzBuzz');
} else if (n % 3 === 0) {
  console.log('Fizz');
} else if (n % 5 === 0) {
  console.log('Buzz');
} else {
  console.log(n);
}