function cakes(recipe, available) {
  let maxCakes = null;
  for (const [ingredient, count] of Object.entries(recipe)) {
    const maxCakesForIngredient = available[ingredient]
      ? Math.floor(available[ingredient] / count)
      : 0;
    (maxCakes == null || maxCakesForIngredient < maxCakes) &&
      (maxCakes = maxCakesForIngredient);
  }
  return maxCakes;
}
