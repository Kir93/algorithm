function solution(array, n) {
  let answer = [101, 101];
  array
    .sort((a, b) => a - b)
    .forEach((x) => {
      const temp = Math.abs(x - n);
      if (answer[1] > temp) answer = [x, temp];
    });

  return answer[0];
}