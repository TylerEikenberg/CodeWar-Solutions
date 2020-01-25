// return masked string
function maskify(cc) {
  // separate last four chars in string
  // if string is less than 4 length return string
  if (cc.length < 4) return cc;
  // check length of left side to be #
  //      repeat # by length
  // join # string with last four chars

  const lastFour = cc.slice(cc.length - 4);
  const hashes = '#'.repeat(cc.length - 4);
  return hashes + lastFour;
}

const maskify = cc => {
  return cc.length < 4
    ? cc
    : '#'.repeat(cc.length - 4) + cc.slice(cc.length - 4);
};
