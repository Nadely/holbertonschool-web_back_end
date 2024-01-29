export default function updateUniqueItems(groceriesList) {
  if (!(groceriesList instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [name, quantity] of groceriesList) {
    if (quantity === 1) {
      groceriesList.set(name, 100);
    }
  }
}
