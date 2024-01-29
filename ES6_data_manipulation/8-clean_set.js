export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const valueClean = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return valueClean;
}