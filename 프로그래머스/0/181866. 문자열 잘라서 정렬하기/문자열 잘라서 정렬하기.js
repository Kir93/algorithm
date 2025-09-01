function solution(myString) {
  return myString
    .split('x')
    .filter((s) => s)
    .sort();
}