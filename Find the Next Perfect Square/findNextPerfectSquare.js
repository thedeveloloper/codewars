function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (Math.sqrt(sq) % 1 !== 0) return -1;
  while (true) {
    sq += 1;
    if (Math.sqrt(sq) % 1 === 0) return sq;
  }
}
