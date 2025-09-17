function solution(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  return Math.max(numbers[0] * numbers[1], numbers.at(-1) * numbers.at(-2));
}