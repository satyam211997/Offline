//optional chaiing
let obj = {
  car: "Thar",
  tractor: "Eicher",
  truck: "leyland",
};
const { car, tractor, truck } = obj;
console.log(car.a ?? "NA");
