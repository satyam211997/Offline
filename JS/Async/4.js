// async function getData() {
//   console.log("hello1");
//   return "hello";
// }
// getData()
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log("printErr");
//   });
///////////////////

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("xyz2");
    resolve("resolved After 5Sec");
  }, 7000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 7sec");
  }, 2000);
});

////////////

const getData2 = async () => {
  console.log("xyz00");
  let data = await p;
  console.log(data);

  let data2 = await p2;

  console.log(data2);
};
getData2();
