function calculateAverage(numbers) {
  return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
}
