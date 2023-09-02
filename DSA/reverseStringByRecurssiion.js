let x = "satyam";
function revByRecurse(x) {
  let split = x.split("");
  function itretate(i) {
    if (i < split.length) {
      console.log(i);
    }
    split--;
    itretate(split);
  }
  itretate(split);
}
// revByRecurse(x)
console.log(revByRecurse(x));
