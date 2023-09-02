let x = "hello madam oo level";
function smallPalindrome(x) {
  let split = x.toLowerCase().split(" ");
  let smallLength = Infinity;
  let small = "";
  for (let i = 0; i < split.length; i++) {
    let reverse = "";
    for (let j = split[i].length - 1; j >= 0; j--) {
      reverse = reverse + split[i][j];
    }
    if (reverse == split[i]) {
      if (smallLength > reverse.length) {
        smallLength = reverse.length;
        small = reverse;
      }
    }
  }
  return small;
}
console.log(smallPalindrome(x));
