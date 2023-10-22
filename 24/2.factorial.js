// ///Find factorial of user input number
// let no = 6;
// const factorial = (no) => {
//   let output = 1;
//   for (let i = no; i >= 1; i--) {
//     output = output * i;
//   }
//   return output;
// };
// console.log(factorial(no));
// // factorial(no);
////////////
const factorial = (no) => {
  if (no < 1) {
    return 1;
  } else {
    return no * factorial(no - 1);
  }
};
console.log(factorial(5));
