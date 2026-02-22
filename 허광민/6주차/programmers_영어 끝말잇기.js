function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    if (
      words[i][0] !== words[i - 1][words[i - 1].length - 1] ||
      words.slice(0, i).includes(words[i])
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }
  return [0, 0];
}
