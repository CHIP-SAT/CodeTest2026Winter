const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const [k, l] = input[0].map(Number);

const waiting = input.slice(1);

let map = new Map();

for (let i = 0; i < l; i++) {
  const id = waiting[i][0];

  if (map.has(id)) map.delete(id);
  map.set(id, true);
}

let count = 0;
for (const key of map.keys()) {
  if (count === k) break;
  console.log(key);
  count++;
}
