function solution(board) {
  const n = board.length;
  const boomX = [-1, -1, -1, 0, 0, 1, 1, 1];
  const boomY = [-1, 0, 1, -1, 1, -1, 0, 1];
  const booms = [];

  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === 1) booms.push([i, j]);
    });
  });

  booms.forEach(([x, y]) => {
    boomX.forEach((_, i) => {
      const nx = x + boomX[i];
      const ny = y + boomY[i];
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0)
        board[nx][ny] = 1;
    });
  });

  return board.flat().filter((v) => v === 0).length;
}