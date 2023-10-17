var myVar = "I am outside";
function myFunc() {
  console.log("printin myVar inside myFunc", myVar);
  var myVar = "I am Inside";
  new Promise(function (resolve, reject) {
    console.log("Executing the promise");
    resolve();
    reject();
  })
    .then(function () {
      console.log("promise resolved");
    })
    .catch(function (error) {
      console.log("Promise rejected");
    });
  console.log(
    "Does myVar belong to myFunc?",
    this.myVar === "I am inside" ? "yes" : "No"
  );
}
myFunc();
console.log("Started executing myFunc");
console.log("Printing myVar outside myFunc:", myVar);
