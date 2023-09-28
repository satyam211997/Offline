let x = 10;
const y = 20;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
setTimeout(() => {
  console.log("hello by timeout");
}, 4000);

let p = new Promise((resolve, reject) => {
  resolve("hello im Promise resolved");
});
p.then((data) => {
  console.log(data);
});
console.log("end");
