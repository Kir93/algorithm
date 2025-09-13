function solution(numbers) {
  const convertNumber = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  convertNumber.forEach((num, i) => (numbers = numbers.replaceAll(num, i)));

  return +numbers;
}