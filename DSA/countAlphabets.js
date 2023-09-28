const countAlphabets = (str) => {
  let upper = str.toUpperCase();
  let output = "";
  let count = 1;
  for (let i = 0; i < upper.length; i++) {
    if (upper[i] == upper[i + 1]) {
      count = count + 1;
    } else {
      output = output + count + upper[i];
      count = 1;
    }
  }
  return output;
};
console.log(countAlphabets("aggggjifklrnvlkjv"));
