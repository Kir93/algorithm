function solution(picture, k) {
  return picture
    .map((v) =>
      Array(k).fill(
        v.replaceAll('.', '.'.repeat(k)).replaceAll('x', 'x'.repeat(k)),
      ),
    )
    .flat();
}