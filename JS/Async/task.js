let p1 = new Promise((resolve, reject) => {
  resolve("Job");
});
let p2 = new Promise((resolve, reject) => {
  resolve("Music");
});
let p3 = new Promise((resolve, reject) => {
  resolve("Ghummi");
});
let p4 = new Promise((resolve, reject) => {
  resolve("Business");
});
let p5 = new Promise((resolve, reject) => {
  resolve("Nothing");
});
let one = Promise.allSettled([p1, p2, p3, p4]);

let sawDream = new Promise((resolve, reject) => {
  resolve("sawed dream");
});
let thoughtOnDream = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("think");
  }, 3000);
});
let discusFriend = new Promise((resolve, reject) => {
  reject("fun");
});
let bouncedBack = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("im bounced Back");
  }, 10000);
});

// let f1 = new Promise((resolve, reject) => {
//   reject("nii hoga terese");
// });
// let f2 = new Promise((resolve, reject) => {
//   reject("nii hoga terese");
// });
// let f3 = new Promise((resolve, reject) => {
//   reject("nii hoga terese");
// });

// let frient3Talk = Promise.any([f1, f2, f3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let disappointed = new Promise((resolve, reject) => {
//   resolve(" DisAppointed");
// });
// let jobApply = new Promise((resolve, reject) => {
//   resolve("Got settled in job");
// });
// let selected = new Promise((resolve, reject) => {
//   resolve(
//     " Informed All As Im Selected and So happy, And all peoples Appreciate "
//   );
// });

// let StartUpDecide = new Promise((resolve, reject) => {
//   resolve("im decide to StartUp and TAlking to family about it");
// });
// let reject1 = new Promise((resolve, reject) => {
//   reject("no  StartUp by Family");
// });
// let reject2 = new Promise((resolve, reject) => {
//   reject("no  StartUp by Family");
// });
// let reject3 = new Promise((resolve, reject) => {
//   reject("no  StartUp by Family");
// });
// let rejectByFamily = Promise.any([reject1, reject2, reject3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let StartupStart = new Promise((resolve, reject) => {
//   resolve(" m to StartUp Krung");
// });
// let s1 = new Promise((resolve, reject) => {
//   reject("Fail in startUP");
// });
// let s2 = new Promise((resolve, reject) => {
//   reject("Fail in startUP");
// });
// let s3 = new Promise((resolve, reject) => {
//   reject("Fail in startUP");
// });
// let s4 = new Promise((resolve, reject) => {
//   reject("Fail in startUP");
// });
// let s5 = new Promise((resolve, reject) => {
//   reject("Fail in startUP");
// });
// let s6 = new Promise((resolve, reject) => {
//   reject("Fail in startUP");
// });
// let s7 = new Promise((resolve, reject) => {
//   resolve("7th StartUp  successfull");
// });
// let chlGya = Promise.any([s1, s2, s3, s4, s5, s6, s7])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(er));

// let last = new Promise((resolve, reject) => {
//   resolve("People Stopped Saying Anything MAst Life Enjoy");
// });
