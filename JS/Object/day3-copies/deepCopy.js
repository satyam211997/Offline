let profile = {
  name: "satyam",
  city: "Indore",
  details: {
    mobile: 8770353470,
    localCity: "JBP",
  },
};
////Way1
// let deepV1 = JSON.parse(JSON.stringify(profile));
// deepV1.name = "patel";
// deepV1.details.mobile = 9165246284;
// console.log(deepV1);
// console.log(profile);

//////Way2
// let deepV2 = structuredClone(profile);
// deepV2.details.mobile = 9165246284;
// console.log(deepV2);
// console.log(profile);

////Way3 Lodesh

/////Way4 recursionDeepCopy
 


