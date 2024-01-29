export default function groceriesList() {
  const list = [
    { name: 'Apples', quantity: 10 },
    { name: 'Tomatoes', quantity: 10 },
    { name: 'Pasta', quantity: 1 },
    { name: 'Rice', quantity: 1 },
    { name: 'Banana', quantity: 5 },
  ];

  return new Map(list.map((listValue) => [
    listValue.name, listValue.quantity,
  ]));
}
