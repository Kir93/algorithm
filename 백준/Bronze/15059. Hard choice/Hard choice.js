const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [ca, ba, pa] = input[0].split(' ').map(Number);
const [cr, br, pr] = input[1].split(' ').map(Number);

const c = cr - ca >= 0 ? cr - ca : 0;
const b = br - ba >= 0 ? br - ba : 0;
const p = pr - pa >= 0 ? pr - pa : 0;

console.log(c + b + p);