let profile = {
  name: "Satyam",
  city: "JBP",
  contact: 8770353470,
};
const { name, ...xyz } = profile;
console.log(xyz);
const { city } = xyz;
console.log(city);
