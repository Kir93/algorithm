function solution(num_str) {
  return [...num_str].reduce((acc, curr) => acc + parseInt(curr, 10), 0);
}