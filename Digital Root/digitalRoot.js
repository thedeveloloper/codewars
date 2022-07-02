function digitalRoot(n) {
  return n <= 9
    ? n
    : digitalRoot(
        n
          .toString()
          .split("")
          .map(Number)
          .reduce((a, b) => a + b)
      );
}
