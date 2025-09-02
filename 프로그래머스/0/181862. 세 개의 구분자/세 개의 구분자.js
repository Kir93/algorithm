function solution(myStr) {
  const result = myStr.split(/[a-c]/).filter((str) => str);
  return result.length ? result : ['EMPTY'];
}