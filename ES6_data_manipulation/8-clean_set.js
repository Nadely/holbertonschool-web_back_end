export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const resultArray = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      resultArray.push(value.slice(startString.length));
    }
  });

  return resultArray.join('-');
}

/* export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      const cleanedValue = value.slice(startString.length);
      result += (result === '' ? '' : '-') + cleanedValue;
    }
  }

  return result;
}/*

/* export default function cleanSet(set, startString) {
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
} */

/* export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  return [...set].filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
} */
