function solution(s) {
  const answer = [];
  s.split('').forEach((v) => {
    if (s.indexOf(v) === s.lastIndexOf(v)) answer.push(v);
  });
  return answer.sort().join('');
}