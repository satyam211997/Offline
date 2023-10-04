// let obj = {};
// let key = "Fname";
// obj[key] = "satyam";
// console.log(obj);
//////////////

const profile = {};
function update(x, y) {
  profile[x] = y;
}
update("FName", "Satyam");
update("LName", "Patel");
console.log(profile);
