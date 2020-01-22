// function accum(s) {
//   const string = s.split('');
//   const mumbledArray = [];

//   string.forEach((letter, i) => {
//     let mumbled = letter.repeat(i + 1);
//     let splitMumble = mumbled.toLowerCase().split('');
//     splitMumble.splice(0, 1, letter.toUpperCase());

//     mumbledArray.push(splitMumble.join(''));
//   });
//   return mumbledArray.join('-');
// }

function accum(s) {
  return [...s]
    .map((element, i) => {
      return element.toUpperCase() + element.toLowerCase().repeat(i);
    })
    .join('-');
}
