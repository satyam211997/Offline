// //Remove Duplicate characters from array of element and find the count of an elements using set
// let str = "satyam";
// const removeDup = () => {
//   let blankObj = {};
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!blankObj.hasOwnProperty(str[i])) {
//       blankObj[str[i]] = blankObj[str[i]] ? blankObj[str[i]] + 1 : 1;
//       result += str[i];
//     }
//   }
//   //const count = new Set([blankObj]);
//   return blankObj;
// };
// console.log(removeDup(str));
//////////////////
let str = "Satyam";
const removeDup = (str) => {
  let lower = str.toLowerCase();
  //   console.log(lower);
  let blankObj = {};
  let result = "";
  for (let i = 0; i < lower.length; i++) {
    if (!blankObj.hasOwnProperty(lower[i])) {
      blankObj[lower[i]] = true;
      //       blankObj[lower[i]] = blankObj[lower[i]] ? blankObj[lower[i]] + 1 : 1;
      result += lower[i];
    }
  }

  return result;
};
console.log(removeDup(str));
