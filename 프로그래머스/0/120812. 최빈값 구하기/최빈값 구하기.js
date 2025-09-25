function solution(array) {
  const counts = new Map();
  array.forEach((num) => {
    counts.set(num, counts.get(num) + 1 || 1);
  });

  const maxCount = Math.max(...counts.values());
  return [...counts].filter(([, count]) => count === maxCount).length === 1
    ? [...counts].find(([, count]) => count === maxCount)[0]
    : -1;
}