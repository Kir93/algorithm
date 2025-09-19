function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => acc + (isNaN(cur) ? 0 : Number(cur)),
    0,
  );
}