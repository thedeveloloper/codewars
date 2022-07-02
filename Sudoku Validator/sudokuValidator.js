function validSolution(board) {
  const validate = (input) => input.length === [...new Set(input)].length;
  const [check, grids] = [[], []];

  board.forEach((row, rowIndex) => {
    check.push(validate(row));
    const col = [];
    for (const colIndex in row) {
      col.push(board[colIndex][rowIndex]);
    }
    check.push(validate(col));
    grids.push([]);
  });

  board.forEach((row, rowIndex) => {
    row.forEach((digit, digitIndex) => {
      let gridRow = 0;
      if (rowIndex >= 3 && rowIndex <= 5) {
        gridRow = 1;
      } else if (rowIndex >= 6 && rowIndex <= 8) {
        gridRow = 2;
      }

      if (digitIndex >= 3 && digitIndex <= 5) {
        gridRow += 3;
      } else if (digitIndex >= 6 && digitIndex <= 8) {
        gridRow += 6;
      }
      grids[gridRow].push(digit);
    });
  });

  grids.forEach((grid) => {
    check.push(validate(grid));
  });

  return check.every((value) => value === true);
}
