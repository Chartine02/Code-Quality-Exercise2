const getNestingLevel = (arr) => {
  if (!Array.isArray(arr)) return 0;
  return 1 + Math.max(0, ...arr.map(getNestingLevel));
};

function flattenArray(arr) {
  return arr.flat(Infinity);
}
