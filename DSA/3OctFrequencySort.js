let input = "cCaaAAbbbBBB";

function frequentSort(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    if (!obj.hasOwnProperty(input[i])) {
      obj[input[i]] = 1;
    } else {
      obj[input[i]]++;
    }
  }
  let sortable = [];
  for (let key in obj) {
    sortable.push([key, obj[key]]);
  }
  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  //   return sortable;

  function Print(sortable) {
    let x = "";
    for (let k = 0; k < sortable.length; k++) {
      for (l = 0; l < sortable[k][1]; l++) {
        x = x + sortable[k][0];
      }
    }
    return x;
  }
  return Print(sortable);
}

console.log(frequentSort(input));

// let obj = { b: 3, B: 3, a: 2, A: 2, c: 1, C: 1, d: 4 };

// let sortable = [];
// for (let key in obj) {
//   sortable.push([key, obj[key]]);
// }

// sortable.sort(function (a, b) {
//   return b[1] - a[1];
// });
// console.log(sortable);
////
// let arr = [
//   ["d", 4],
//   ["b", 3],
//   ["B", 3],
//   ["a", 2],
//   ["A", 2],
//   ["c", 1],
//   ["C", 1],
// ];

// function print(arr) {
//   let x = "";
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i][1]; j++) {
//       x = x + arr[i][0];
//     }
//   }
//   return x;
// }
// // print(arr);
// console.log(print(arr));
