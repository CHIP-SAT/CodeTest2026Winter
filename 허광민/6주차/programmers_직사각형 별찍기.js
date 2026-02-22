function solution(a, b) {
  return Array.from({ length: b }, () => '*'.repeat(a));
}
