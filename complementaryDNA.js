const replace = symbol => {
  if (symbol === 'A') {
    return 'T';
  }
  if (symbol === 'T') {
    return 'A';
  }
  if (symbol === 'G') {
    return 'C';
  }
  if (symbol === 'C') {
    return 'G';
  }
};

function DNAStrand(dna) {
  // store new array
  // iterate through array
  //      for each element, turn it into its complementary DNA symbol
  const dnaArray = dna.split('');
  const newArray = [];
  dnaArray.forEach(symbol => {
    newArray.push(replace(symbol));
  });
  return newArray.join('');
}

DNAStrand('ATTGC');

function DNAStrand(dna) {
  const dnaObj = { A: 'T', T: 'A' };
}
