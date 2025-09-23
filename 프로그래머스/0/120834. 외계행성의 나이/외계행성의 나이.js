function solution(age) {
  return String.fromCharCode(
    ...age
      .toString()
      .split('')
      .map((x) => x.charCodeAt() + 49),
  );
}