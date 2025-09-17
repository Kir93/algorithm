function solution(polynomial) {
  let xCount = 0;
  let nCount = 0;

  const terms = polynomial.split(' + ');

  terms.forEach((term) => {
    if (term.includes('x')) {
      xCount += term.split('x')[0] === '' ? 1 : Number(term.split('x')[0]);
    } else {
      nCount += Number(term);
    }
  });

  if (xCount && nCount) {
    return `${xCount === 1 ? '' : xCount}x + ${nCount}`;
  } else if (xCount && !nCount) {
    return `${xCount === 1 ? '' : xCount}x`;
  } else {
    return `${nCount}`;
  }
}