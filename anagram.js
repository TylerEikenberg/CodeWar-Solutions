// const isAnagram = (text1, text2) => {
//   // store counts of letters in objects
//   const text1Count = {};
//   const text2Count = {};

//   //   split words into arrays and sort
//   const one = text1
//     .toLowerCase()
//     .split('')
//     .sort();
//   const two = text2
//     .toLowerCase()
//     .split('')
//     .sort();

//   //   loop through each word and get the count of each letter
//   one.forEach(char => {
//     text1Count[char] = (text1Count[char] || 0) + 1;
//   });
//   two.forEach(char => {
//     text2Count[char] = (text2Count[char] || 0) + 1;
//   });

//   // check if both object values are equal
//   return (
//     JSON.stringify(Object.values(text1Count)) ===
//     JSON.stringify(Object.values(text2Count))
//   );
// };

const isAnagram = (text1, text2) => {
  const a = text1
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  const b = text2
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  return a === b;
};

const isAnagram = (text1, text2) => {
  return (
    text1
      .toLowerCase()
      .split('')
      .sort()
      .join('') ===
    text2
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  );
};
