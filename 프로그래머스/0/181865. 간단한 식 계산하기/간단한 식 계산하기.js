function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);

  if (op === '+') return numA + numB;
  else if (op === '-') return numA - numB;
  else if (op === '*') return numA * numB;
}