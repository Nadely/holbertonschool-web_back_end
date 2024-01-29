export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const valueClean = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      valueClean.push(value.slice(startString.length));
    }
  });

  return valueClean.join('-');
}
