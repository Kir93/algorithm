function solution(babbling) {
  let answer = 0;
  const words = ['aya', 'ye', 'woo', 'ma'];
  const regex = new RegExp(words.join('|'), 'g');

  for (let babble of babbling) {
    const filtered = babble.replace(regex, ' ');
    if (filtered.trim().length === 0) {
      answer += 1;
    }
  }
  return answer;
}