const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [sleep_time, alarm_time] = input.map(Number);

if (sleep_time > alarm_time) {
  console.log(alarm_time + 24 - sleep_time);
} else {
  console.log(alarm_time - sleep_time);
}