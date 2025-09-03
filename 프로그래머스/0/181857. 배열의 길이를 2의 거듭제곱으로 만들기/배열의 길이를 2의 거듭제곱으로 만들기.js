function solution(arr) {
  for (let i = 0; i <= 10; i++) {
    if (2 ** i >= arr.length)
      return [...arr, ...Array(2 ** i - arr.length).fill(0)];
  }
}