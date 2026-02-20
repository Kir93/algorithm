const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [h1, m1, s1] = input[0].split(':').map(Number);
const [h2, m2, s2] = input[1].split(':').map(Number);
const t1 = h1 * 3600 + m1 * 60 + s1;
const t2 = h2 * 3600 + m2 * 60 + s2;

console.log(t1 > t2 ? t2 - t1 + 3600 * 24 : t2 - t1);
