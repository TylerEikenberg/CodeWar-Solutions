const palindrome = string => {
  return (
    string
      .toString()
      .split('')
      .reverse()
      .join('') === string.toString()
  );
};
palindrome('racecar');
