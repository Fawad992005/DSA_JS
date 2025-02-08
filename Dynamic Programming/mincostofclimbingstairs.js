let cost = [10, 15, 20];

function mincost(cost) {
  const n = cost.length;
  if (n === 0) return 0;
  if (n === 1) return cost[0];
  let dpone = cost[0];
  let dptwo = cost[1];
  for (let i = 2; i < n; i++) {
    let current = cost[i] + Math.min(dpone, dptwo);
    dpone = dptwo;
    dptwo = current;
  }
  return Math.min(dpone, dptwo);
}

console.log(mincost(cost));
