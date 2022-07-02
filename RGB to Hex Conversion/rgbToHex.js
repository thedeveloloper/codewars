function rgb(r, g, b) {
  return [r, g, b]
    .map((input) => Math.min(Math.max(input, 0), 255))
    .map((input) => input.toString(16).toUpperCase().padStart(2, 0))
    .join("");
}
