function findOdd(A) {
  // iterate through array
  //      keep count of each element
  //          pull out number that appears an odd number of times
  const counts = {};

  A.forEach(element => {
    counts[element] = (counts[element] || 0) + 1;
  });

  for (let [key, value] of Object.entries(counts)) {
    if (value % 2 !== 0) {
      return parseInt(key);
    }
  }
}
