const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (const n of input) {
  const numberN = BigInt(n.trim());

  if (numberN === 0n) break;
  if (numberN % 42n === 0n) console.log('PREMIADO');
  else console.log('TENTE NOVAMENTE');
}
