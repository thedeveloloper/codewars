function pathFinder(maze) {
  const board = maze.split("\n").map((row) => row.split(""));
  const size = board[0].length;
  const start = [0, 0];
  const end = [size, size];
  let queue = [start];
  for (const [index, square] of queue.entries()) {
    if (
      square[0] - 1 > 0 &&
      square[0] - 1 < size &&
      queue.indexOf([square[0] - 1, square[1]]) === -1 &&
      board[square[0]][square[1]] === "."
    )
      queue.push([square[0] - 1, square[1]]);

    if (
      square[1] + 1 > 0 &&
      square[1] + 1 < size &&
      queue.indexOf([square[0], square[1] + 1]) === -1 &&
      board[square[0]][square[1]] === "."
    )
      queue.push([square[0], square[1] + 1]);

    if (
      square[0] + 1 > 0 &&
      square[0] + 1 < size &&
      queue.indexOf([square[0] + 1, square[1]]) === -1 &&
      board[square[0]][square[1]] === "."
    )
      queue.push([square[0] + 1, square[1]]);

    if (
      square[1] - 1 > 0 &&
      square[1] - 1 < size &&
      queue.indexOf([square[0], square[1] - 1]) === -1 &&
      board[square[0]][square[1]] === "."
    )
      queue.push([square[0], square[1] - 1]);

    if (index >= size) break;
  }

  return queue;
}

console.log(
  pathFinder(`.W.
.W.
W..`)
);
