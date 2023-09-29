// let p1 = new Promise((resolve, reject) => {
//   resolve("Step1");
// });
// let p2 = new Promise((resolve, reject) => {
//   resolve("Step2");
// });
// let p3 = new Promise((resolve, reject) => {
//   resolve("Step3");
// });
// let p4 = new Promise((resolve, reject) => {
//   resolve("Step4");
// });

// let getData = async () => {
//   try {
//     let d1 = await p1;
//     console.log(d1);
//     let d2 = await p2;
//     console.log(d2);
//     let d3 = await p3;
//     console.log(d3);
//     let d4 = await p4;
//     console.log(d4);
//   } catch (error) {
//     console.log("err");
//   }
// };
// getData();
//////
// let x = 1000;
// let p1 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       setTimeout(() => resolve("promise exicuted after 6s"));
//     }, x);
//   });
// let getData = async () => {
//   let data1 = await p1();
//   console.log(data1);
// };
// getData();
////////////
let x = 2000;
function internal() {
  setInterval(() => {
    console.log("hello");
  }, x);
}
internal();
