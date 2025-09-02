function solution(arr, k) {
  let answer = [...new Set(arr)].slice(0, k);

  return answer.length === k
    ? answer
    : [...answer, ...Array(k - answer.length).fill(-1)];
}