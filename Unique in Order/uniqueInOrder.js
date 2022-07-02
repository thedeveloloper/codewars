var uniqueInOrder = function (iterable) {
  let result = [];
  iterable.length &&
    (typeof iterable === "string" ? iterable.split("") : iterable).map(
      (item) => {
        if (result.slice(-1) != item) result.push(item);
      }
    );
  return result;
};
