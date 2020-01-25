function sumTwoSmallestNumbers(numbers) {
  const [num1, num2] = numbers.sort((a, b) => a - b);
  return num1 + num2;
}
