function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
  const slope1 = (y1 - y2) * (x3 - x4) === (y3 - y4) * (x1 - x2);
  const slope2 = (y1 - y3) * (x2 - x4) === (y2 - y4) * (x1 - x3);
  const slope3 = (y1 - y4) * (x2 - x3) === (y2 - y3) * (x1 - x4);
  return +(slope1 || slope2 || slope3);
}