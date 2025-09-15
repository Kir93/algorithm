function solution(id_pw, db) {
  return db.some(([id, pw]) => id === id_pw[0] && pw === id_pw[1])
    ? 'login'
    : db.some(([id]) => id === id_pw[0])
    ? 'wrong pw'
    : 'fail';
}