function solution(arr) {
  let answer = 0;
  let before_arr = [...arr];
  while (true) {
    arr = arr.map((x) => {
      if (x >= 50 && x % 2 === 0) {
        return Math.floor(x / 2);
      } else if (x < 50 && x % 2 === 1) {
        return x * 2 + 1;
      } else {
        return x;
      }
    });
    if (String(arr) === String(before_arr)) {
      break;
    }

    before_arr = [...arr];
    answer++;
  }
  return answer;
}