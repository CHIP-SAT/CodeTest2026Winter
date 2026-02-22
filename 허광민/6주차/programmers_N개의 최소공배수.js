function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function solution(arr) {
  let answer = arr[0];

  for (const n of arr) {
    answer = (n * answer) / gcd(n, answer);
  }

  return answer;
}
