# Path Finder: Can You Reach the Exit

- You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.
- Empty positions are marked with a ".".
- Walls are marked "W".
- Start and exit positions are empty in all test cases.

## Examples:

```
No examples.
```

## Sample Tests

```
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;



function testMaze(expected, maze){
  let actual = pathFinder(maze);
  assert.strictEqual(actual, expected, maze);
}

describe("Peth  Finder Tests", function(){

it("Basic tests", function(){

testMaze(true,
`.W.
.W.
...`);

testMaze(false,
`.W.
.W.
W..`);

testMaze(true,
`......
......
......
......
......
......`);

testMaze(false,
`......
......
......
......
.....W
....W.`);

});

});
```
