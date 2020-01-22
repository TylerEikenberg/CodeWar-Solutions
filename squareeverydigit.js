const squareDigits = num => {
  // square every digit in a number and return it
  const numsArray = num.toString().split('');

  const squaredNumsArray = [];

  numsArray.forEach(num => {
    squaredNumsArray.push(num * num);
  });

  return parseInt(squaredNumsArray.join(''));
};

squareDigits(345);
