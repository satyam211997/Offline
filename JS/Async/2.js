let p1 = () => {
  return new Promise((resolve, reject) => {
    resolve("Done");
  });
};
let p2 = () => {
  return new Promise((resolve, reject) => {
    resolve("Done2");
  });
};
let p3 = () => {
  return new Promise((resolve, reject) => {
    reject("rejected");
  });
};
// p1()
//   .then((data) => {
//     p2()
//       .then((data) => {
//         p3()
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
/* async function getData() {
  const data1 = await p1().catch((err) => null);
  if (!data1) {
    console.log("Error");
    return;
    // Error condition
  }

  // Success
  console.log("Success: ", data1);

  data2 = await p2().catch((err) => {
    console.log("err");
  });
} */

// const runP = async () => {
//   try {
//     const r = await p2();
//     console.log(r);
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// };

// runP();
////

let getData = async () => {
  try {
    let data1 = await p1();
    console.log(data1);
    let data2 = await p2();
    console.log(data2);
    let data3 = await p3();
    console.log(data3);
  } catch {
    console.log("err");
  }
};
getData();
