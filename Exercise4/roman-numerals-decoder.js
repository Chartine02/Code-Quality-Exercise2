const solution = (roman) => {
  const romans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return roman
    .split("")
    .reverse()
    .reduce((acc, val, i, arr) => {
      val = romans[val];
      i = romans[arr[i - 1]] || 0;
      return acc + (i <= val ? val : -val);
    }, 0);
};
