function digital_root(n) {
  // separate all the digits of the number
  // store that in an array
  // iterate through array and get sum of values
  // recursively send sum back through function until length of array is 1
  const digits = n.toString().split('');

  let total = 0;
  for (let i = 0; i < digits.length; i++) {
    total += parseInt(digits[i]);
  }
  if (total < 10) {
    return total;
  } else {
    return digital_root(total);
  }
}
