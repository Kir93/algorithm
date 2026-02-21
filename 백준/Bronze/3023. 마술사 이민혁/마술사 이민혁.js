const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1, R + 1).map((row) => row.split(''));
const [A_r, A_c] = input[R + 1].split(' ').map(Number);

for (let i = 0; i < R; i++) {
  board[i].push(...[...board[i]].reverse());
}

for (let i = R - 1; i >= 0; i--) {
  board.push(board[i].slice());
}

if (board[A_r - 1][A_c - 1] === '#') {
  board[A_r - 1][A_c - 1] = '.';
} else {
  board[A_r - 1][A_c - 1] = '#';
}

console.log(board.map((row) => row.join('')).join('\n'));
