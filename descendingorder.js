function descendingOrder(n) {
  console.log(n);
  return parseInt(
    n
      .toString()
      .split('')
      .sort()
      .reverse()
      .join('')
  );
}
