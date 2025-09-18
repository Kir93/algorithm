function solution(keyinput, board) {
  let answer = [0, 0];
  keyinput.forEach((dir) => {
    if (dir === 'left' && answer[0] > -Math.floor(board[0] / 2)) answer[0] -= 1;
    else if (dir === 'right' && answer[0] < Math.floor(board[0] / 2))
      answer[0] += 1;
    else if (dir === 'up' && answer[1] < Math.floor(board[1] / 2))
      answer[1] += 1;
    else if (dir === 'down' && answer[1] > -Math.floor(board[1] / 2))
      answer[1] -= 1;
  });
  return answer;
}