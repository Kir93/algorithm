const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const friends = input[1].split(' ');
const helloBit = input[2];

console.log(friends.filter((friend) => friend === helloBit).length);
