function pathFinder(maze) {
  const board = maze.split("\n").map((row) => row.split(""));
  let queue = [[0, 0]];
  for (const [index, square] of queue.entries()) {
    for (let i = 0; i < 4; i++) {
      let newSquare = [];
      switch (i) {
        case 0:
          newSquare = [square[0] - 1, square[1]];
          break;
        case 1:
          newSquare = [square[0], square[1] + 1];
          break;
        case 2:
          newSquare = [square[0] + 1, square[1]];
          break;
        case 3:
          newSquare = [square[0], square[1] - 1];
          break;
      }

      queue.push(newSquare);
    }
    console.log(index, square);
    if (index >= 12) break;
  }
  console.log(board);
  return true;
}

console.log(
  pathFinder(`.W.
.W.
W..`)
);
