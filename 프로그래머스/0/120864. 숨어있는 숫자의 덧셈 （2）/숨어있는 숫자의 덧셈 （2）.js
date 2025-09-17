function solution(my_string) {
  let answer = 0;
  let convertNum = '';

  my_string.split('').forEach((char) => {
    if (!isNaN(char)) convertNum += char;
    else {
      if (convertNum) {
        answer += parseInt(convertNum, 10);
        convertNum = '';
      }
    }
  });

  if (convertNum) answer += parseInt(convertNum, 10);
  return answer;
}