function solution(s) {
  var answer = "";
  let temp = "";

  const map = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch <= "9" && ch >= "0") {
      answer += ch;
      continue;
    }

    temp += ch;

    if (map[temp] !== undefined) {
      answer += map[temp];
      temp = "";
    }
  }

  return Number(answer);
}
