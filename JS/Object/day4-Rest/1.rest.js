const obj = {
  name: "Satyam",
  city: "jbp",
  mobile: 8770353470,
};
const { name, ...rest } = obj;
console.log(rest);
