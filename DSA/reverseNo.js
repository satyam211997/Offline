//Reverse no without convert it into string
// let no = 1234;

// function reverseStr(no) {
//   let output = 0;

//   while (no > 0) {
//     let remender = no % 10;
//     output = output * 10 + remender;
//     no = parseInt(no / 10);
//   }
//   return output;
// }
// console.log(reverseStr(no));

let no = 1234;
function reverseStr(no) {
  let output = 0;

  while (no > 0) {
    let rem = no % 10;
    output = output * 10 + rem;
    no = parseInt(no / 10);
  }
  return output;
}
console.log(reverseStr(no));
