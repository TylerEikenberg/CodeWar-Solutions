// getWholeNumber removes the decimal point from a number
const getWholeNumber = num => {
  return num
    .toString()
    .split('.')
    .map(Number);
};

// this function rounds a number up or down

Math.round = function(number) {
  // pass number into getWholeNumber and pull out first index
  let [integer] = getWholeNumber(number);
  //   subtract our new integer from the original number to get just the decimal
  const decimal = number - integer;
  // check if decimal or greater than or equal to .5
  //      if true, return integer plus 1
  //          else, return integer
  if (decimal >= 0.5) {
    return integer + 1;
  } else return integer;
};

Math.ceil = function(number) {
  let [integer] = getWholeNumber(number);
  const decimal = number - integer;
  // check if decimal is greater than 0
  //  if true, add 1 to integer and return, otherwise return integer
  if (decimal > 0) {
    return integer + 1;
  }
  return integer;
};

Math.floor = function(number) {
  // return number without decimal to automatically floor it
  let [integer] = getWholeNumber(number);
  return integer;
};
