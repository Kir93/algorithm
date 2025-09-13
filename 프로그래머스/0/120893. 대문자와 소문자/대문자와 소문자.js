function solution(my_string) {
  return my_string
    .split('')
    .map((char) =>
      char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase(),
    )
    .join('');
}
