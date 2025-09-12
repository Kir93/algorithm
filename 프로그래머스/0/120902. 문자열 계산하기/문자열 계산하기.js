function solution(my_string) {
  return my_string
    .replaceAll('- ', '+ -')
    .split(' + ')
    .map(Number)
    .reduce((prev, curr) => prev + curr, 0);
}