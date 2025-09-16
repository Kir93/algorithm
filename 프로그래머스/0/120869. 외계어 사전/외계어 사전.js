function solution(spell, dic) {
  return dic.some(
    (word) =>
      spell.sort().join('') === word.split('').sort().join('') &&
      spell.length === word.length,
  )
    ? 1
    : 2;
}