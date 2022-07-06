# Twice Linear

- Consider a sequence u where u is defined as follows:
  - The number u(0) = 1 is the first one in u.
  - For each x in u, then y = 2 _ x + 1 and z = 3 _ x + 1 must be in u too.
  - There are no other numbers in u.
- Example
  - u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
  - 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
- Task
  - Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).
- Note
  - Focus attention on efficiency

## Examples:

```
dbl_linear(10) should return 22
```

## Sample Tests

```
function testing(actual, expected) {
	Test.assertEquals(actual, expected)
}

describe("dblLinear",function() {
it("Basic tests",function() {
	testing(dblLinear(10), 22)
    testing(dblLinear(20), 57)
    testing(dblLinear(30), 91)
    testing(dblLinear(50), 175)
    testing(dblLinear(100), 447)
})})
```
