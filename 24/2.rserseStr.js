////String reverse with reversing of individual words
let str = "my name is Satyam";
const revStr = (str) => {
  let splitArr = str.split(" ");
  console.log(splitArr);
  let rev = splitArr.reverse();
  console.log(rev, "rev");
  let joined = rev.join("");
};
revStr(str);
