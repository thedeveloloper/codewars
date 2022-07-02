function scramble1(str1, str2) {
  const getCharacterCounts = (input) =>
    input.split("").reduce((charCounts, char) => {
      if (charCounts[char]) {
        charCounts[char] += 1;
      } else {
        charCounts[char] = 1;
      }
      return charCounts;
    }, {});

  let valid = true;
  const scrambled = getCharacterCounts(str1);
  const text = getCharacterCounts(str2);

  for (const [char, charCount] of Object.entries(text)) {
    if (charCount > (scrambled[char] ?? 0)) {
      valid = false;
      break;
    }
  }

  return valid;
}

function scramble2(str1, str2) {
  const counts = Object.create(null);

  Array.prototype.forEach.call(str1, (char) => {
    counts[char] = (counts[char] || 0) + 1;
  });

  return Array.prototype.every.call(str2, (char) => {
    return counts[char]--;
  });
}
