function solution(emergency) {
  const sortedEmergency = [...emergency].sort((a, b) => b - a);
  return emergency.map((e) => sortedEmergency.indexOf(e) + 1);
}