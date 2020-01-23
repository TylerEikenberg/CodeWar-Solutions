function duplicateCount(text) {
  const chars = text.toLowerCase().split('');
  const counts = {};

  chars.forEach(char => {
    counts[char] = (counts[char] || 0) + 1;
  });

  const duplicateTotal = Object.values(counts).filter(num => num > 1);

  if (duplicateTotal.length >= 1) {
    return duplicateTotal.length;
  } else return 0;
}
