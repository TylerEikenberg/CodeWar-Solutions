String.prototype.toJadenCase = function() {
  const stringArr = this.split(' ');
  const newArr = [];

  stringArr.forEach(string => {
    let word = string.split('');
    word.splice(0, 1, word[0].toUpperCase());
    newArr.push(word.join(''));
  });
  return newArr.join(' ');
};

String.prototype.toJadenCase = function() {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return this.split(' ')
    .map(capitalizeFirstLetter)
    .join(' ');
};
