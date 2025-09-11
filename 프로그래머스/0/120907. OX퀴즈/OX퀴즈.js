function solution(quiz) {
  return quiz.map((q) => {
    const [calc, result] = q.split(' = ');
    const [a, op, b] = calc.split(' ');
    const r = op === '+' ? Number(a) + Number(b) : Number(a) - Number(b);
    return r === Number(result) ? 'O' : 'X';
  });
}