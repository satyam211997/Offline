const first = () => {
  return new Promise((resolve, reject) => {
    resolve("1Done");
  });
};
const second = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2Done");
    }, 4000);
  });
};
// first()
//   .then((data) => {
//     console.log(data);
//     second()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

const getData = async () => {
  try {
    console.log("async code started");
    const firstData = await first();
    console.log(firstData);
    const secondData = await second();
    console.log(secondData);
  } catch (err) {
    console.log("err", err);
  }
  console.log("Async code");
};
getData();
