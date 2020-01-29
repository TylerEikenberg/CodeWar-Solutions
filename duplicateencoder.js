function duplicateEncode(word) {
  const chars = word.toLowerCase().split('');

  const count = {};
  const newWord = [];

  chars.forEach(char => {
    count[char] = (count[char] || 0) + 1;
  });
  chars.forEach(char => {
    count[char] > 1 ? newWord.push(')') : newWord.push('(');
  });

  return newWord.join('');
}

duplicateEncode('recede');
