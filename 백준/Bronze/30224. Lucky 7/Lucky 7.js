const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input[0];

if (!n.includes('7') && parseInt(n) % 7 !== 0) {
    console.log(0);
} else if (!n.includes('7') && parseInt(n) % 7 === 0) {
    console.log(1);
} else if (n.includes('7') && parseInt(n) % 7 !== 0) {
    console.log(2);
} else {
    console.log(3);
}