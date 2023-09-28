//factorial
let num = 4;
const factorial = (num) => {
  let mult = 1;
  for (let i = 1; i <= num; i++) {
    mult = mult * i;
    //     console.log(mult);
  }
  return mult;
};
console.log(factorial(num));
