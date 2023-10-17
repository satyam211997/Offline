let profile = {
  name: "satyam",
  city: "Indore",
  details: {
    mobile: 8770353470,
    localCity: "JBP",
  },
};
// let shallowCopy = { ...profile };
// shallowCopy.name = "patel";
// shallowCopy.details.mobile = 9165246284;
// console.log(shallowCopy);
// console.log(profile);
//////////////////
let shallowV2 = Object.assign({}, profile);
shallowV2.name = "patel";
shallowV2.details.mobile = 9165246284;
console.log(profile);
console.log(shallowV2);
