//         const runLoopInReverseUsingRecusrion = (num) => {
//           const iterateNumer = (i) => {
//             console.log(i);
//             if (i !== 0) {
//               num--;
//               iterateNumer(num);
//             }
//           };

//           iterateNumer(num);
//         };

//         runLoopInReverseUsingRecusrion(10);
/////
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenByRecursion = (nums) => {
//   let index = 0;
//   const recu = (i) => {
//     if (i % 2 === 0) {
//       console.log({ i });
//     }

//     index++;

//     if (nums.length === index) {
//       return;
//     }

//     recu(nums[index]);
//   };
//   recu(nums[index]);
// };
// console.log(evenByRecursion(nums));
///////
// let nums = [12, 2, 4, 5, 6, 8, 9, 12, 15, 14];
// const evenByRecursion = (nums) => {
//   let index = 0;
//   const recurse = (i) => {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//     index++;
//     if (nums.length === index) {
//       return;
//     }
//     recurse(nums[index]);
//   };
//   recurse(nums[index]);
// };
// console.log(evenByRecursion(nums));
let nums = [1, 2, 4, 5, 5, 6, 4, 645, 661, 31, 35, 34];
const evenByRecursion = (nums) => {
  let index = 0;
  function rec(i) {
    if (i % 2 == 0) {
      console.log(i);
    }
    index++;
    if (index == nums.length) {
      return;
    }
    rec(nums[index]);
  }

  rec(nums[index]);
};
evenByRecursion(nums);
