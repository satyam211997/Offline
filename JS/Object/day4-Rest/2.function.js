const sum = (...input) => {
  let add = 0;
  for (let i = 0; i < input.length; i++) {
    add += input[i];
  }
  return add;
};
// sum(1, 2, 5, 4, 5, 88, 7);
console.log(sum(1, 2, 5, 4, 5, 88, 7));
