const solution = (num, total) => {
  const start = (2 * total - num * (num - 1)) / (2 * num);
  return [...Array(num)].map((_, i) => start + i);
};