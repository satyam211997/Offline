let obj = {
  name: "satyam",
  city: "Indore",
  details: {
    mobile: 8770353470,
    localCity: "JBP",
  },
};

const custumDeep = (obj) => {
  let x = { ...obj };
  for (let key in x) {
    //     console.log(key);
    if (typeof Object.keys(obj) == Object) {
      custumDeep(x);
    }
  }
  return x;
};
let copy = custumDeep(obj);
copy.details.localCity = "Mumbai";

console.log(copy);
console.log(obj);
