function solution(num_list, n) {
  return Array.from({ length: Math.ceil(num_list.length / n) }, (_, i) =>
    num_list.slice(i * n, i * n + n),
  );
}