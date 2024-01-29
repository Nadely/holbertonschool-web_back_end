export default function cleanSet(set, startString) {
  const valueClean = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      valueClean.push(value.slice(startString.length));
    }
  });
  return valueClean.join('-');
}
