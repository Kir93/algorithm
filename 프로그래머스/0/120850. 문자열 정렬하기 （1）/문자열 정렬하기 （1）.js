function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, '')
    .split('')
    .map(Number)
    .sort((a, b) => a - b);
}