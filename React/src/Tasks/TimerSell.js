//Time SellTime - current Time
// useUseEffect (()=>{},time)
//return
//1. product is loading
//2.show products
// let x = new Date();
// console.log(x);

// const Fix = new Date("October 13, 2023 13:50:00");

// let fixDate = Fix.getTime();
// console.log(fixDate, "fix date");
// console.log(Fix.getTime());

// const d = new Date();
// let ms = d.getTime();
// console.log(ms);
// let finalTime = fixDate - ms;
// console.log({ finalTime });

////////////
let passDate = new Date("October 13, 2023 13:55:00");
let passTime = passDate.getTime();
console.log(passTime);

let currentTime = new Date().getTime();
console.log(currentTime);
let x = passTime - currentTime;
console.log(x);
