function dijkstra(dist, adj) {
  const heap = [];
  heap.push([0, 1]);

  while (heap.length > 0) {
    heap.sort((a, b) => a[0] - b[0]);
    const [cost, node] = heap.shift();
    for (const [c, n] of adj[node]) {
      if (cost + c < dist[n]) {
        dist[n] = cost + c;
        heap.push([cost + c, n]);
      }
    }
  }
}

function solution(N, road, K) {
  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;
  const adj = Array.from({ length: N + 1 }, () => []);

  for (const r of road) {
    adj[r[0]].push([r[2], r[1]]);
    adj[r[1]].push([r[2], r[0]]);
  }

  dijkstra(dist, adj);
  return dist.filter((i) => i <= K).length;
}
