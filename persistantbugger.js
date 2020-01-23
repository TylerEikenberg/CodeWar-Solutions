function persistence(num) {
  let times = 0;

  //   convert num to string
  num = num.toString();

  //   while length of string is greater than 1
  //      increment times
  //          multiply digits then convert back to string
  while (num.length > 1) {
    times++;
    num = num
      .split('')
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  //   return times
  return times;
}
