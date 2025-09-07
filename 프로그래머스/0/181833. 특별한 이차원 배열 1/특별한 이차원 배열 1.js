function solution(n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push([]);
    for (let j = 0; j < n; j++) {
      answer[i].push(+(i === j));
    }
  }
  return answer;
}