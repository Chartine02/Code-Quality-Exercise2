const getNestingLevel = (arr) => {
  if (!Array.isArray(arr)) return 0;
  return 1 + Math.max(0, ...arr.map(getNestingLevel));
};

const flattenArray = (arr) => (getNestingLevel(arr) ? arr.flat(Infinity) : arr);

console.log(flattenArray([1, 2, 4]));
