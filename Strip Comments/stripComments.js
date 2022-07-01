function solution(input, markers) {
  return input
    .split("\n")
    .map((line) => {
      let newLine = line;
      for (const char of line.split("")) {
        if (markers.indexOf(char) >= 0) {
          newLine = line.slice(0, line.indexOf(char));
          break;
        }
      }
      return newLine;
    })
    .join("\n");
}

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);
