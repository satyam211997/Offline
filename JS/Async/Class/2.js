const p1 = new Promise((resolve, reject) => {
  resolve("resolved");
});
const p2 = new Promise((resolve, reject) => {
  resolve("resolved");
});

////Way 1 then catch
p1.then((data) => console.log(data)).catch((err) => console.log(err));
