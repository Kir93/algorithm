function solution(strArr) {
  const counter = new Object();
  for (str of strArr) {
    counter[str.length] = (counter[str.length] || 0) + 1;
  }
  return Math.max(...Object.values(counter));
}