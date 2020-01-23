function spinWords(string) {
  // split string by spaces to create array of strings
  // iterate through array
  //      if word length >= 5 reverse the characters of that word
  const words = string.split(' ');

  words.forEach((word, i) => {
    if (word.length >= 5) {
      let reverseWord = word.split('').reverse();

      words.splice(i, 1, reverseWord.join(''));
    }
  });
  return words.join(' ');
}
