// function getCount(str) {
//     const vowels = ['a','e','i','o','u']
//     let vowelsCount = 0;
//     const string = str.split('')

//     string.forEach(char => {
//         vowels.forEach(vowel => {
//             if(char === vowel){
//                 vowelsCount++
//             }
//         })
//     })

//     return vowelsCount;
//   }

const getCount = str => {
  // putting ^ before the letters removes everything EXCEPT those letters
  return str.replace(/[^aeiou]/gi, '').length;
};
