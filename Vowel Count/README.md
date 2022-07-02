# Vowel Count

- Return the number (count) of vowels in the given string.
- We will consider a, e, i, o, u as vowels for this Kata (but not y).
- The input string will only consist of lower case letters and/or spaces.

## Examples:

```
No examples.
```

## Sample Tests

```
const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});
```
