function solution(polynomial) {
  let answer = '';

  polynomial = polynomial.split(' + ');

  const xNum = polynomial
    .filter((p) => p.includes('x'))
    .reduce(
      (acc, cur) => acc + (cur === 'x' ? 1 : Number(cur.slice(0, -1))),
      0,
    );

  const num = polynomial
    .filter((p) => !p.includes('x'))
    .reduce((acc, cur) => acc + Number(cur), 0);

  if (xNum) answer += (xNum === 1 ? '' : xNum) + 'x';
  if (num) answer += (answer ? ' + ' : '') + num;

  return answer;
}
