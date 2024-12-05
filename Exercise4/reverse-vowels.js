function reverseVowels(str) {
  const vowels = "aeiouAEIOU";
  const vowelsInString = [...str].filter((el) => vowels.includes(el));
  return str
    .split("")
    .map((el) => {
      return vowels.includes(el) ? vowelsInString.pop() : el;
    })
    .join("");
}
