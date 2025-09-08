function solution(arr) {
  let y = arr.length;
  let x = arr[0].length;

  if (y > x) {
    for (let i = 0; i < y; i++) {
      arr[i].push(...Array(y - x).fill(0));
    }
  } else {
    for (let i = 0; i < x - y; i++) {
      arr.push(Array(x).fill(0));
    }
  }

  return arr;
}