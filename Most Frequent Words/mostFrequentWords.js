function topThreeWords(text) {
  if (text === "") return [];
  const wordOccurences = Object.entries(
    text
      .toLowerCase()
      .replace(/[.,/\#!$%^&*;:{}=-_`~()]/g, "")
      .replace(/s{2,}/g, " ")
      .split(" ")
      .reduce((wordCount, word) => {
        if (wordCount[word]) {
          wordCount[word] += 1;
        } else {
          wordCount[word] = 1;
        }
        return wordCount;
      }, {})
  ).sort((a, b) => {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] > b[1] ? -1 : 1;
    }
  });
  return wordOccurences.reduce((topThree, word, index) => {
    if (index <= 2) topThree[index] = word[0];
    return topThree;
  }, []);
}

console.log(
  topThreeWords("A a a a b b b b c c c c d d d e e e f f f f f f f f")
);
