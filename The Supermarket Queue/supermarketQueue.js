function queueTime(customers, n) {
  let tills = new Array(n).fill(0);
  if (tills.length === 1)
    return Math.round(customers.reduce((a, b) => a + b, 0));
  for (const customer of customers) {
    let queue = tills.indexOf(Math.min(...tills));
    tills[queue] += customer;
  }
  return Math.max(...tills);
}
