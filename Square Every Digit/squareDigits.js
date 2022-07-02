function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((digit) => Math.pow(digit, 2))
      .join("")
  );
}
