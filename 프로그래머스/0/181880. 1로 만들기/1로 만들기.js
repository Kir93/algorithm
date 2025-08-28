function solution(num_list) {
  let answer = 0;

  num_list.forEach((n) => {
    let temp = n;
    while (temp > 1) {
      if (temp % 2 === 0) {
        temp /= 2;
      } else {
        temp = (temp - 1) / 2;
      }
      answer++;
    }
  });
  return answer;
}