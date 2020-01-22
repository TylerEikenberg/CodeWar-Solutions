function findOutlier(integers) {
  //   use filter to create two arrays
  //      one of all evens numbers, one of all odd numbers
  let evenArray = integers.filter(num => {
    return num % 2 === 0;
  });

  let oddArray = integers.filter(num => {
    return num % 2 !== 0;
  });

  //   return the element in the array that is smallest(only has one element)
  return evenArray.length > oddArray.length ? oddArray[0] : evenArray[0];
}

findOutlier([0, 1, 2]);
