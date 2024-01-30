/* Test 6 */

export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const cleanedValues = [...set].filter((value) => value.startsWith(startString))
    .map((cleanedValue) => cleanedValue.slice(startString.length))
    .join('-');

  return cleanedValues;
}

/* Test 5

export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  return [...set].reduce((result, value) => {
    if (value.startsWith(startString)) {
      const cleanedValue = value.slice(startString.length);
      result.push(cleanedValue);
    }
    return result;
  }, []).join('-');
}
*/

/* Test 4

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
*/

/* Test 3

export default function cleanSet(set, startString) {
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
}
/*

/*Test 2

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
*/

/* Test 1

export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  return [...set].filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
*/
