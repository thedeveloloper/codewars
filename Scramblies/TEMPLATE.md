# NOTE

- The tests for this kata are broken as of 07/02/22.

# Scramblies

- Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered.

## Examples:

```
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
```

## Sample Tests

```
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Fixed Tests', function(){
  it("Tests", () => {
    assert.strictEqual(scramble('rkqodlw','world'),true);
    assert.strictEqual(scramble('cedewaraaossoqqyt','codewars'),true);
    assert.strictEqual(scramble('katas','steak'),false);
    assert.strictEqual(scramble('scriptjavx','javascript'),false);
    assert.strictEqual(scramble('scriptingjava','javascript'),true);
    assert.strictEqual(scramble('scriptsjava','javascripts'),true);
    assert.strictEqual(scramble('javscripts','javascript'),false);
    assert.strictEqual(scramble('jscripts','javascript'),false);
    assert.strictEqual(scramble('aabbcamaomsccdd','commas'),true);
    assert.strictEqual(scramble('commas','commas'),true);
    assert.strictEqual(scramble('sammoc','commas'),true)
  })
});
```
