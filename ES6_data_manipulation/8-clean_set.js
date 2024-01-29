export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  return [...set].reduce((result, value) => {
    let newResult = result; // Create a new variable to hold the updated result
    if (value.startsWith(startString)) {
      if (newResult !== '') {
        newResult += '-';
      }
      newResult += value.slice(startString.length);
    }
    return newResult; // Return the updated result
  }, '');
}

/* export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  return [...set].filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
} */
