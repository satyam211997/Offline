const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

const union = (inputA, inputB) => {
  let blankArr = [];

  for (let i = 0; i < inputA.length; i++) {
    if (!blankArr.includes(inputA[i])) {
      blankArr.push(inputA[i]);
    }
  }
  for (let j = 0; j < inputB.length; j++) {
    if (!blankArr.includes(inputB[j])) {
      blankArr.push(inputB[j]);
    }
  }
  return blankArr;
};
// union(inputA, inputB);
console.log(union(inputA, inputB));
