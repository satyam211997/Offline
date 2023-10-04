// //LN 3 used as a hasOwnProperty("keys" in obj)
// let obj = { fName: "Satyam", city: "Indore" };
// if ("x" in obj) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

////////////////////////////////
const profile = {
  name: "Satyam",
  city: "JBP",
  state: "MP",
  country: "India",
};

//For getting all keys
const keys = [];
for (let avaKeys in profile) {
  keys.push(avaKeys);
}
console.log(keys);

//Another Way
const allKeys = Object.keys(profile);
console.log(allKeys, "by 2Way");
