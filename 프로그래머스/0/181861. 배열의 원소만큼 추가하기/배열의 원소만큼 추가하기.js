function solution(arr) {
  var answer = [];
  arr.forEach((num) => answer.push(...Array.from({ length: num }, () => num)));
  return answer;
}