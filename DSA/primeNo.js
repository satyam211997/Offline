//
let no = 11;
const primeNo = (no) => {
  if (no === 1) {
    return "its a commposite no";
  } else if (no > 1) {
    for (let i = 2; i < no; i++) {
      if (no % i == 0) {
        return "not a prime no";
      } else {
        return "it is a prime no";
      }
    }
  }
};
console.log(primeNo(no));
