let x = "hello sasas you are madam maaddaam";
let longestPalindrome = (x) => {
  let split = x.toLowerCase().split(" ");
  //   console.log(split);
  let maxLength = 0;
  let longest = "";

  for (let i = 0; i < split.length; i++) {
    let reverse = "";
    for (let j = split[i].length - 1; j >= 0; j--) {
      reverse = reverse + split[i][j];
    }
    //     console.log(reverse);
    if (reverse == split[i]) {
      if (maxLength < reverse.length) {
        maxLength = reverse.length;

        longest = reverse;
      }
    }
  }
  return longest;
};

// longestPalindrome(x);
console.log(longestPalindrome(x));
