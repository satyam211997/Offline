const obj = {
  name: "Satyam",
  city: "jbp",
  mobile: 8770353470,
  details: {
    email: "satyampatel312@gmail.com",
  },
};
const { name, city, mobile, details } = obj;
const { email } = details;
console.log(`hello I am ${name} and i am from ${city} email: ${email} `);
