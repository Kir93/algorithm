function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([start, end]) => {
    for (let i = start; i < end; i++) line[i + 100]++;
  });

  return line.filter((v) => v > 1).length;
}