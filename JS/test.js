// let obj = {
//   name: "Satyam",
//   city: "jbp",
//   details: {
//     mobile1: 48462326,
//     mobile2: 4545465,
//   },
// };
// let shallow = { ...obj };
// shallow.name = "Raja";
// shallow.details.mobile1 = 123456;
// console.log(shallow, "shallow");
// console.log(obj, "main Obj");
///////////////////////////////
// const products = [
//   { id: 1, name: "iPhone 12", brand: "apple" },
//   { id: 2, name: "iPhone 13", brand: "apple" },
//   { id: 3, name: "Samsung s22", brand: "samsung" },
//   { id: 4, name: "Samsung s23", brand: "samsung" },
// ];

// const groupProducts = (products) => {
//   let blankObj = {};
//   for (let i = 0; i < products.length; i++) {
//     if (!blankObj.hasOwnProperty(products[i].brand)) {
//       blankObj[products[i].brand] = [products[i]];
//     } else {
//       blankObj[products[i].brand].push(products[i]);
//     }
//   }
//   return blankObj;
// };
// // groupProducts(products);
// console.log(groupProducts(products));

// // const result = {
// //   apple: [
// //     { id: 1, name: "iPhone 12", brand: "apple" },
// //     { id: 2, name: "iPhone 13", brand: "apple" },
// //   ],
// //   samsung: [
// //     { id: 3, name: "Samsung s22", brand: "samsung" },
// //     { id: 4, name: "Samsung s23", brand: "samsung" },
// //   ],
// // };
///////////////////////////////
// write a program whih print 1-10 no and after that print you are done

// let no = 0;

// function print() {
//   let set = setInterval(() => {
//     console.log(no);
//     no++;
//     if (no > 10) {
//       clearInterval(set);
//       console.log("done");
//     }
//   }, 1000);
// }

// print();

/////////////InterChange the keys into value in obj if keys are same they become array
let obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 20,
};
// output = { 10: "a", 20: ["b", "d"], 30: "c" };
function CovertKeyToValue(obj) {
  let blankObj = {};
  //   let val = Object.values(obj);
  //   console.log(val);
  for (keys in obj) {
    if (!blankObj[obj[keys]]) {
      blankObj[obj[keys]] = keys;
    } else {
      blankObj[(obj[keys] = [keys + keys])];
    }
  }
  return blankObj;
}
// CovertKeyToValue(obj);
console.log(CovertKeyToValue(obj));
