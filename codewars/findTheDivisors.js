function divisors(integer) {
  const ints = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      ints.push(i);
    }
  }

  return ints.length !== 0 ? ints : `${integer} is prime`;
}

console.log(divisors(15));
