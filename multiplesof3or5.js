const solution = number => {
  // get all the numbers below number
  //  loop from zero up to number
  //      for each number if it is a multiple of 3 or 5 push into new array
  //          add up all numbers in array and return

  const numsArray = [];

  for (let i = 0; i < number; i++) {
    numsArray.push(i);
  }

  const multiplesOf3or5 = [];
  numsArray.forEach(num => {
    if (num % 3 === 0 || num % 5 === 0) {
      multiplesOf3or5.push(num);
    }
  });

  let total;
  multiplesOf3or5.forEach(num => {
    total += num;
  });

  return total;
};
