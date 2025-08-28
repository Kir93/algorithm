function solution(my_string, alp) {
  var answer = '';
  return my_string.replaceAll(alp, alp.toUpperCase());
}