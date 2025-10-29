const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.slice(0, -1).forEach((_, index) => {
  console.log(`Case ${index + 1}: Sorting... done!`);
});