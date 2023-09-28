// let str = "satyam";
// const removeDup = (str) => {
//   let splitStr = str.split("");
//   //   console.log(splitStr);
//   let blank = [];
//   for (let i = 0; i < splitStr.length; i++) {
//     if (!blank.includes(str[i])) {
//       blank.push(str[i]);
//     }
//   }
//   let joined = blank.join("");
//   return joined;
// };
// console.log(removeDup(str));
// // removeDup(str);

///////////////////
//2Way

let str = "satyam";
const removeDup = (str) => {
  const blankObj = {};
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (!blankObj.hasOwnProperty(str[i])) {
      blankObj[str[i]] = true;
      output = output + str[i];
    }
  }
  return output;
};
console.log(removeDup(str));
