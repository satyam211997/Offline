// //Find for single word
// let x ="maDam";
// const palindrome = (x) => {
//   let split = x.toLowerCase().split("");
//   //   console.log(split);
//   let rev = "";
//   for (let i = split.length - 1; i >= 0; i--) {
//     rev = rev + split[i];
//   }
//   if (split.join("") === rev) {
//     console.log("this is palindrome");
//   } else {
//     console.log("this is not");
//   }
// };
// palindrome(x);
/////////////////////////////////////

// Find the longest from the string
let x = "hello madam how are you sasasasas";

function largestPAlindrome(x) {
  let split = x.toLowerCase().split(" ");
  // console.log(split);
  let longest = "";
  // let blanckPalind = [];
  let maxlength = Infinity;
  let maxPlaindrome = "";
  for (let i = 0; i < split.length; i++) {
    let rev = "";
    for (let j = split[i].length - 1; j >= 0; j--) {
      rev = rev + split[i][j];
    }
    // console.log(rev);
    if (split[i] == rev) {
      // blanckPalind.push(rev);
      if (maxlength > rev.length) {
        maxlength = rev.length;
        maxPlaindrome = rev;
      }
    }
  }
  // console.log(blanckPalind);
  return maxPlaindrome;
}
// largestPAlindrome(x);
console.log(largestPAlindrome(x));
