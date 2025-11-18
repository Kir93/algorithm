const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.forEach((num) => {
  const n = parseFloat(num);
  if (n === -1) {
    return;
  }
  console.log(
    `Objects weighing ${n.toFixed(2)} on Earth will weigh ${(n * 0.167).toFixed(
      2,
    )} on the moon.`,
  );
});