function solution(order) {
  return order
    .toString()
    .split('')
    .reduce((acc, curr) => acc + +new RegExp(/[369]/).test(curr), 0);
}