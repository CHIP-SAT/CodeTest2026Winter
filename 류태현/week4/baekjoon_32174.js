const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" "));

const N = Number(input[0][0]);
const M = Number(input[0][1]);
const suffle = input.slice(1);

const BN = BigInt(N);

let cards = 1;

let log = [cards];

for (let i = 0; i < M; i++) {
  const a = Number(suffle[i][0]);
  const bStr = suffle[i][1];

  if (a === 1) {
    const shift = Number(BigInt(bStr) % BN); // 0..N-1
    cards = ((cards - 1 + shift) % N) + 1;
    log.push(cards);
  } else if (a === 2) {
    const shift = Number(BigInt(bStr) % BN);
    cards = ((cards - 1 - shift + N) % N) + 1;
    log.push(cards);
  } else {
    const z = Number(bStr);
    cards = log[z];
    log.push(cards);
  }
}

console.log(cards);
