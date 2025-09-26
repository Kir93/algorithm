const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const roomNumber = {
  Algorithm: 204,
  DataAnalysis: 207,
  ArtificialIntelligence: 302,
  CyberSecurity: 'B101',
  Network: 303,
  Startup: 501,
  TestStrategy: 105,
};

console.log(
  input
    .slice(1)
    .map((subject) => roomNumber[subject])
    .join('\n'),
);